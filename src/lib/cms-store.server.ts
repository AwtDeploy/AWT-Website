import { createHmac, randomUUID, timingSafeEqual } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { getCookie, getRequestHeader, setResponseHeader } from "@tanstack/react-start/server";
import {
  DEFAULT_JOBS,
  parseJobs,
  type JobInput,
  type JobOpening,
  type JobPersistence,
} from "./jobs";
import { hasPostgres, readJobsFromPostgres, writeJobsToPostgres } from "./jobs-db.server";

const SESSION_COOKIE = "awt_cms_session";
const SESSION_DAYS = 7;
const JOBS_RELATIVE_PATH = "data/jobs.json";

const DEFAULT_USERNAME = "awtadmin";
const DEFAULT_PASSWORD = "AWT#Careers2026";

let memoryJobs: JobOpening[] | null = null;
let lastPersistence: JobPersistence = "memory";

function cmsUsername() {
  return process.env.CMS_USERNAME?.trim() || DEFAULT_USERNAME;
}

function cmsPassword() {
  return process.env.CMS_PASSWORD?.trim() || DEFAULT_PASSWORD;
}

function sessionSecret() {
  return process.env.CMS_SESSION_SECRET?.trim() || cmsPassword() || "awt-cms-local-secret";
}

function jobsFilePath() {
  return path.join(process.cwd(), JOBS_RELATIVE_PATH);
}

function safeEqual(left: string, right: string) {
  const a = Buffer.from(left);
  const b = Buffer.from(right);
  if (a.length !== b.length) return false;
  return timingSafeEqual(a, b);
}

function sign(value: string) {
  return createHmac("sha256", sessionSecret()).update(value).digest("base64url");
}

function setSessionCookie(token: string, maxAgeSeconds: number) {
  const secure = process.env.NODE_ENV === "production" ? "; Secure" : "";
  setResponseHeader(
    "Set-Cookie",
    `${SESSION_COOKIE}=${token}; HttpOnly; SameSite=Lax; Path=/; Max-Age=${maxAgeSeconds}${secure}`,
  );
}

export type CmsSession = { username: string };

export function readSession(): CmsSession | null {
  const token = getCookie(SESSION_COOKIE) ?? readSessionFromHeader();
  if (!token) return null;
  const [payload, signature] = token.split(".");
  if (!payload || !signature) return null;
  if (!safeEqual(sign(payload), signature)) return null;
  try {
    const data = JSON.parse(Buffer.from(payload, "base64url").toString("utf8")) as {
      u?: string;
      exp?: number;
    };
    if (!data.u || !data.exp || Date.now() > data.exp) return null;
    return { username: data.u };
  } catch {
    return null;
  }
}

function readSessionFromHeader() {
  const header = getRequestHeader("cookie");
  if (!header) return null;
  for (const part of header.split(/;\s*/)) {
    const eq = part.indexOf("=");
    if (eq === -1) continue;
    if (part.slice(0, eq) === SESSION_COOKIE) return part.slice(eq + 1);
  }
  return null;
}

export function requireSession() {
  const session = readSession();
  if (!session) throw new Error("Unauthorized");
  return session;
}

export function login(username: string, password: string): { ok: true } | { error: string } {
  const userOk = safeEqual(username.trim(), cmsUsername());
  const passOk = safeEqual(password, cmsPassword());
  if (!userOk || !passOk) return { error: "Invalid username or password" };

  const payload = Buffer.from(
    JSON.stringify({ u: cmsUsername(), exp: Date.now() + SESSION_DAYS * 24 * 60 * 60 * 1000 }),
  ).toString("base64url");
  setSessionCookie(`${payload}.${sign(payload)}`, SESSION_DAYS * 24 * 60 * 60);
  return { ok: true };
}

export function logout() {
  setSessionCookie("", 0);
}

async function readFromFile(): Promise<JobOpening[] | null> {
  try {
    const raw = await readFile(jobsFilePath(), "utf8");
    const jobs = parseJobs(JSON.parse(raw));
    return jobs.length ? jobs : null;
  } catch {
    return null;
  }
}

async function writeToFile(jobs: JobOpening[]) {
  const filePath = jobsFilePath();
  await mkdir(path.dirname(filePath), { recursive: true });
  await writeFile(filePath, `${JSON.stringify(jobs, null, 2)}\n`, "utf8");
}

export async function listJobs(): Promise<{ jobs: JobOpening[]; persistence: JobPersistence }> {
  if (memoryJobs && lastPersistence === "postgres") {
    return { jobs: memoryJobs, persistence: lastPersistence };
  }

  if (hasPostgres()) {
    const fromPostgres = await readJobsFromPostgres();
    if (fromPostgres) {
      memoryJobs = fromPostgres;
      lastPersistence = "postgres";
      return { jobs: fromPostgres, persistence: "postgres" };
    }
  }

  if (memoryJobs) return { jobs: memoryJobs, persistence: lastPersistence };

  const fromFile = await readFromFile();
  if (fromFile) {
    memoryJobs = fromFile;
    lastPersistence = "file";
    return { jobs: fromFile, persistence: "file" };
  }

  memoryJobs = DEFAULT_JOBS;
  lastPersistence = "memory";
  return { jobs: DEFAULT_JOBS, persistence: "memory" };
}

export async function persistJobs(jobs: JobOpening[]): Promise<JobPersistence> {
  memoryJobs = jobs;
  let persistence: JobPersistence = "memory";

  try {
    await writeToFile(jobs);
    persistence = "file";
  } catch {
    // Serverless hosts cannot keep filesystem writes.
  }

  if (hasPostgres() && (await writeJobsToPostgres(jobs))) {
    persistence = "postgres";
  }

  lastPersistence = persistence;
  return persistence;
}

export async function upsertJob(input: JobInput) {
  requireSession();
  const { jobs } = await listJobs();
  const timestamp = new Date().toISOString();
  const existing = input.id ? jobs.find((job) => job.id === input.id) : undefined;
  const next: JobOpening = {
    id: existing?.id ?? randomUUID(),
    title: input.title.trim(),
    department: input.department.trim(),
    location: input.location.trim(),
    type: input.type,
    description: input.description.trim(),
    applyUrl: input.applyUrl.trim() || "/contact-us",
    status: input.status,
    createdAt: existing?.createdAt ?? timestamp,
    updatedAt: timestamp,
  };
  const nextJobs = existing
    ? jobs.map((job) => (job.id === existing.id ? next : job))
    : [next, ...jobs];
  const persistence = await persistJobs(nextJobs);
  return { jobs: nextJobs, persistence, job: next };
}

export async function deleteJob(id: string) {
  requireSession();
  const { jobs } = await listJobs();
  const nextJobs = jobs.filter((job) => job.id !== id);
  const persistence = await persistJobs(nextJobs);
  return { jobs: nextJobs, persistence };
}

export async function listPublicJobs() {
  const { jobs } = await listJobs();
  return jobs.filter((job) => job.status === "open");
}

export function persistenceNote(persistence: JobPersistence) {
  if (persistence === "postgres") {
    return "Changes are saved to PostgreSQL and will appear on the live careers page.";
  }
  if (persistence === "file") {
    return "Changes are saved to data/jobs.json on this computer (zero-cost local mode). Set DATABASE_URL to a free Postgres database for the live website.";
  }
  return "Changes are held in memory only and may reset when the server restarts. Set DATABASE_URL to PostgreSQL for lasting storage.";
}
