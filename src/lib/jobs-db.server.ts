import postgres from "postgres";
import { DEFAULT_JOBS, parseJobs, type JobOpening } from "./jobs";

let sql: ReturnType<typeof postgres> | null | undefined;
let schemaReady = false;

function databaseUrl() {
  return process.env.DATABASE_URL?.trim() || "";
}

function getSql() {
  const url = databaseUrl();
  if (!url) return null;
  if (sql === undefined) {
    const local = /localhost|127\.0\.0\.1/.test(url);
    sql = postgres(url, {
      max: 1,
      ssl: local ? false : "require",
      idle_timeout: 20,
      connect_timeout: 10,
    });
  }
  return sql;
}

function rowToJob(row: Record<string, unknown>): JobOpening | null {
  return parseJobs([
    {
      id: row.id,
      title: row.title,
      department: row.department,
      location: row.location,
      type: row.type,
      description: row.description,
      applyUrl: row.apply_url,
      status: row.status,
      createdAt: row.created_at instanceof Date ? row.created_at.toISOString() : row.created_at,
      updatedAt: row.updated_at instanceof Date ? row.updated_at.toISOString() : row.updated_at,
    },
  ])[0] ?? null;
}

async function ensureSchema(client: postgres.Sql) {
  if (schemaReady) return;
  await client`
    CREATE TABLE IF NOT EXISTS jobs (
      id TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      department TEXT NOT NULL,
      location TEXT NOT NULL,
      type TEXT NOT NULL,
      description TEXT NOT NULL DEFAULT '',
      apply_url TEXT NOT NULL DEFAULT '/contact-us',
      status TEXT NOT NULL DEFAULT 'open',
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `;
  const [countRow] = await client<{ count: number }[]>`SELECT COUNT(*)::int AS count FROM jobs`;
  if (!countRow?.count) {
    for (const job of DEFAULT_JOBS) {
      await client`
        INSERT INTO jobs (
          id, title, department, location, type, description, apply_url, status, created_at, updated_at
        ) VALUES (
          ${job.id}, ${job.title}, ${job.department}, ${job.location}, ${job.type},
          ${job.description}, ${job.applyUrl}, ${job.status}, ${job.createdAt}, ${job.updatedAt}
        )
        ON CONFLICT (id) DO NOTHING
      `;
    }
  }
  schemaReady = true;
}

export function hasPostgres() {
  return Boolean(databaseUrl());
}

export async function readJobsFromPostgres(): Promise<JobOpening[] | null> {
  const client = getSql();
  if (!client) return null;
  try {
    await ensureSchema(client);
    const rows = await client<Record<string, unknown>[]>`
      SELECT id, title, department, location, type, description, apply_url, status, created_at, updated_at
      FROM jobs
      ORDER BY created_at DESC
    `;
    const jobs = rows.map(rowToJob).filter((job): job is JobOpening => Boolean(job));
    return jobs;
  } catch (error) {
    console.error("PostgreSQL read failed", error);
    return null;
  }
}

export async function writeJobsToPostgres(jobs: JobOpening[]) {
  const client = getSql();
  if (!client) return false;
  try {
    await ensureSchema(client);
    await client.begin(async (trx) => {
      await trx`DELETE FROM jobs`;
      for (const job of jobs) {
        await trx`
          INSERT INTO jobs (
            id, title, department, location, type, description, apply_url, status, created_at, updated_at
          ) VALUES (
            ${job.id}, ${job.title}, ${job.department}, ${job.location}, ${job.type},
            ${job.description}, ${job.applyUrl}, ${job.status}, ${job.createdAt}, ${job.updatedAt}
          )
        `;
      }
    });
    return true;
  } catch (error) {
    console.error("PostgreSQL write failed", error);
    return false;
  }
}
