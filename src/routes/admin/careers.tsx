import { createFileRoute, redirect, useNavigate } from "@tanstack/react-router";
import { Pencil, Plus, Trash2 } from "lucide-react";
import { useMemo, useState } from "react";
import { toast } from "sonner";
import { AdminChrome } from "@/components/site/AdminChrome";
import { deleteJobFn, getCmsSessionFn, listAdminJobsFn, logoutCmsFn, upsertJobFn } from "@/lib/cms";
import {
  emptyJobInput,
  JOB_STATUSES,
  JOB_TYPES,
  type JobInput,
  type JobOpening,
  type JobStatus,
  type JobType,
} from "@/lib/jobs";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/admin/careers")({
  head: () =>
    pageHead({
      title: "Manage job openings | AWT Careers CMS",
      description: "Add, edit, and close AWT job openings.",
      path: "/admin/careers",
      index: false,
    }),
  beforeLoad: async () => {
    const session = await getCmsSessionFn();
    if (!session) throw redirect({ to: "/admin/login" });
    return { session };
  },
  loader: async () => {
    const [session, jobs] = await Promise.all([getCmsSessionFn(), listAdminJobsFn()]);
    return { session, jobs };
  },
  component: AdminCareersPage,
});

function AdminCareersPage() {
  const data = Route.useLoaderData();
  const navigate = useNavigate();
  const [jobs, setJobs] = useState<JobOpening[]>(data.jobs.jobs);
  const [note, setNote] = useState(data.jobs.note);
  const [editing, setEditing] = useState<JobInput | null>(null);
  const [pending, setPending] = useState(false);

  const openCount = useMemo(() => jobs.filter((job) => job.status === "open").length, [jobs]);

  async function onLogout() {
    await logoutCmsFn();
    await navigate({ to: "/admin/login" });
  }

  async function onSave(input: JobInput) {
    setPending(true);
    try {
      const result = await upsertJobFn({ data: input });
      setJobs(result.jobs);
      setNote(result.note);
      setEditing(null);
      toast.success(input.id ? "Opening updated" : "Opening added");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Could not save this opening");
    } finally {
      setPending(false);
    }
  }

  async function onDelete(id: string) {
    if (!window.confirm("Delete this job opening? This cannot be undone.")) return;
    setPending(true);
    try {
      const result = await deleteJobFn({ data: { id } });
      setJobs(result.jobs);
      setNote(result.note);
      toast.success("Opening deleted");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Could not delete this opening");
    } finally {
      setPending(false);
    }
  }

  async function onToggle(job: JobOpening) {
    await onSave({ ...job, status: job.status === "open" ? "closed" : "open" });
  }

  return (
    <AdminChrome username={data.session?.username} onLogout={onLogout} note={note}>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="eyebrow">Careers CMS</p>
          <h1 className="mt-2 text-3xl font-bold text-ink">Job openings</h1>
          <p className="mt-1 text-sm text-ink-soft">
            {openCount} open · {jobs.length} total. Changes appear on the public careers page.
          </p>
        </div>
        <button type="button" className="btn-primary" onClick={() => setEditing(emptyJobInput())}>
          <Plus className="size-4" /> Add opening
        </button>
      </div>

      <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-white">
        {jobs.length === 0 ? (
          <p className="p-8 text-center text-sm text-ink-soft">No openings yet. Add the first role to get started.</p>
        ) : (
          jobs.map((job, index) => (
            <div
              key={job.id}
              className={`grid gap-3 p-4 md:grid-cols-[minmax(0,2fr)_1fr_1fr_auto] md:items-center ${index ? "border-t border-border" : ""}`}
            >
              <div>
                <div className="font-semibold text-ink">{job.title}</div>
                <div className="mt-1 text-sm text-ink-soft">
                  {job.department} · {job.location} · {job.type}
                </div>
              </div>
              <span
                className={`w-fit rounded-full px-2.5 py-1 text-xs font-semibold ${
                  job.status === "open" ? "bg-brand-soft text-brand" : "bg-surface-2 text-ink-soft"
                }`}
              >
                {job.status === "open" ? "Open" : "Closed"}
              </span>
              <button
                type="button"
                className="justify-self-start text-sm font-semibold text-brand hover:text-brand-strong"
                onClick={() => onToggle(job)}
                disabled={pending}
              >
                {job.status === "open" ? "Close role" : "Reopen role"}
              </button>
              <div className="flex gap-2">
                <button
                  type="button"
                  className="inline-flex size-9 items-center justify-center rounded-lg border border-border text-ink hover:bg-surface"
                  onClick={() => setEditing(job)}
                  aria-label={`Edit ${job.title}`}
                >
                  <Pencil className="size-4" />
                </button>
                <button
                  type="button"
                  className="inline-flex size-9 items-center justify-center rounded-lg border border-border text-destructive hover:bg-surface"
                  onClick={() => onDelete(job.id)}
                  aria-label={`Delete ${job.title}`}
                >
                  <Trash2 className="size-4" />
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {editing ? (
        <JobForm
          value={editing}
          pending={pending}
          onCancel={() => setEditing(null)}
          onSave={onSave}
        />
      ) : null}
    </AdminChrome>
  );
}

function JobForm({
  value,
  pending,
  onCancel,
  onSave,
}: {
  value: JobInput;
  pending: boolean;
  onCancel: () => void;
  onSave: (value: JobInput) => Promise<void>;
}) {
  const [form, setForm] = useState<JobInput>(value);

  function update<K extends keyof JobInput>(key: K, next: JobInput[K]) {
    setForm((current) => ({ ...current, [key]: next }));
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 p-4 sm:items-center">
      <form
        className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl"
        onSubmit={(event) => {
          event.preventDefault();
          void onSave(form);
        }}
      >
        <h2 className="text-xl font-bold text-ink">{form.id ? "Edit opening" : "Add opening"}</h2>
        <div className="mt-4 grid gap-3">
          <Field label="Job title">
            <input
              required
              value={form.title}
              onChange={(event) => update("title", event.target.value)}
              className="field"
            />
          </Field>
          <div className="grid gap-3 sm:grid-cols-2">
            <Field label="Department">
              <input
                required
                value={form.department}
                onChange={(event) => update("department", event.target.value)}
                className="field"
              />
            </Field>
            <Field label="Location">
              <input
                required
                value={form.location}
                onChange={(event) => update("location", event.target.value)}
                className="field"
              />
            </Field>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <Field label="Type">
              <select
                value={form.type}
                onChange={(event) => update("type", event.target.value as JobType)}
                className="field"
              >
                {JOB_TYPES.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </Field>
            <Field label="Status">
              <select
                value={form.status}
                onChange={(event) => update("status", event.target.value as JobStatus)}
                className="field"
              >
                {JOB_STATUSES.map((status) => (
                  <option key={status} value={status}>
                    {status === "open" ? "Open" : "Closed"}
                  </option>
                ))}
              </select>
            </Field>
          </div>
          <Field label="Description">
            <textarea
              rows={4}
              value={form.description}
              onChange={(event) => update("description", event.target.value)}
              className="field min-h-24"
            />
          </Field>
          <Field label="Apply link">
            <input
              value={form.applyUrl}
              onChange={(event) => update("applyUrl", event.target.value)}
              placeholder="/contact-us"
              className="field"
            />
          </Field>
        </div>
        <div className="mt-6 flex justify-end gap-2">
          <button type="button" className="btn-outline" onClick={onCancel} disabled={pending}>
            Cancel
          </button>
          <button type="submit" className="btn-primary" disabled={pending}>
            {pending ? "Saving..." : "Save opening"}
          </button>
        </div>
      </form>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-ink">{label}</span>
      {children}
    </label>
  );
}
