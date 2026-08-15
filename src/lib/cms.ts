import { createServerFn } from "@tanstack/react-start";
import { isJobStatus, isJobType, type JobInput } from "./jobs";

function asJobInput(data: JobInput): JobInput {
  if (!data.title?.trim() || !data.department?.trim() || !data.location?.trim()) {
    throw new Error("Title, department, and location are required");
  }
  if (!isJobType(data.type) || !isJobStatus(data.status)) {
    throw new Error("Invalid job type or status");
  }
  return {
    id: data.id,
    title: data.title,
    department: data.department,
    location: data.location,
    type: data.type,
    description: data.description ?? "",
    applyUrl: data.applyUrl ?? "/contact-us",
    status: data.status,
  };
}

export const getPublicJobsFn = createServerFn({ method: "GET" }).handler(async () => {
  const { listPublicJobs } = await import("./cms-store.server");
  return listPublicJobs();
});

export const getCmsSessionFn = createServerFn({ method: "GET" }).handler(async () => {
  const { readSession } = await import("./cms-store.server");
  return readSession();
});

export const loginCmsFn = createServerFn({ method: "POST" })
  .validator((data: { username: string; password: string }) => data)
  .handler(async ({ data }) => {
    const { login } = await import("./cms-store.server");
    return login(data.username ?? "", data.password ?? "");
  });

export const logoutCmsFn = createServerFn({ method: "POST" }).handler(async () => {
  const { logout } = await import("./cms-store.server");
  logout();
  return { ok: true as const };
});

export const listAdminJobsFn = createServerFn({ method: "GET" }).handler(async () => {
  const store = await import("./cms-store.server");
  store.requireSession();
  const result = await store.listJobs();
  return { ...result, note: store.persistenceNote(result.persistence) };
});

export const upsertJobFn = createServerFn({ method: "POST" })
  .validator((data: JobInput) => asJobInput(data))
  .handler(async ({ data }) => {
    const store = await import("./cms-store.server");
    const result = await store.upsertJob(data);
    return { ...result, note: store.persistenceNote(result.persistence) };
  });

export const deleteJobFn = createServerFn({ method: "POST" })
  .validator((data: { id: string }) => data)
  .handler(async ({ data }) => {
    const store = await import("./cms-store.server");
    const result = await store.deleteJob(data.id);
    return { ...result, note: store.persistenceNote(result.persistence) };
  });
