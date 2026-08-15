export const JOB_TYPES = ["Full-time", "Part-time", "Contract", "Internship"] as const;
export const JOB_STATUSES = ["open", "closed"] as const;

export type JobType = (typeof JOB_TYPES)[number];
export type JobStatus = (typeof JOB_STATUSES)[number];
export type JobPersistence = "postgres" | "file" | "memory";

export interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: JobType;
  description: string;
  applyUrl: string;
  status: JobStatus;
  createdAt: string;
  updatedAt: string;
}

export interface JobInput {
  id?: string;
  title: string;
  department: string;
  location: string;
  type: JobType;
  description: string;
  applyUrl: string;
  status: JobStatus;
}

const now = "2026-01-15T00:00:00.000Z";

export const DEFAULT_JOBS: JobOpening[] = [
  {
    id: "job-fullstack",
    title: "Senior Full Stack Developer",
    department: "Engineering",
    location: "Hyderabad, India",
    type: "Full-time",
    description: "Build and scale web products across the AWT platform stack.",
    applyUrl: "/contact-us",
    status: "open",
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "job-aiml",
    title: "AI/ML Engineer",
    department: "Engineering",
    location: "Bengaluru, India",
    type: "Full-time",
    description: "Design intelligent systems and automation that create measurable business value.",
    applyUrl: "/contact-us",
    status: "open",
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "job-devops",
    title: "Cloud DevOps Engineer",
    department: "Engineering",
    location: "Hyderabad, India",
    type: "Full-time",
    description: "Own cloud infrastructure, delivery pipelines, and operational reliability.",
    applyUrl: "/contact-us",
    status: "open",
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "job-pm",
    title: "Product Manager",
    department: "Product",
    location: "Hyderabad, India",
    type: "Full-time",
    description: "Shape product direction from discovery through delivery with engineering and design.",
    applyUrl: "/contact-us",
    status: "open",
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "job-design",
    title: "UI/UX Designer",
    department: "Design",
    location: "Bengaluru, India",
    type: "Full-time",
    description: "Craft clear, premium product experiences across AWT platforms and websites.",
    applyUrl: "/contact-us",
    status: "open",
    createdAt: now,
    updatedAt: now,
  },
];

export function isJobType(value: string): value is JobType {
  return (JOB_TYPES as readonly string[]).includes(value);
}

export function isJobStatus(value: string): value is JobStatus {
  return (JOB_STATUSES as readonly string[]).includes(value);
}

export function parseJobs(raw: unknown): JobOpening[] {
  if (!Array.isArray(raw)) return [];
  return raw
    .map((item) => normalizeJob(item))
    .filter((item): item is JobOpening => item !== null);
}

export function normalizeJob(raw: unknown): JobOpening | null {
  if (!raw || typeof raw !== "object") return null;
  const value = raw as Record<string, unknown>;
  const title = String(value.title ?? "").trim();
  if (!title) return null;
  const type = isJobType(String(value.type ?? "")) ? (value.type as JobType) : "Full-time";
  const status = isJobStatus(String(value.status ?? "")) ? (value.status as JobStatus) : "open";
  const createdAt = String(value.createdAt ?? new Date().toISOString());
  return {
    id: String(value.id ?? title.toLowerCase().replace(/[^a-z0-9]+/g, "-")),
    title,
    department: String(value.department ?? "General").trim() || "General",
    location: String(value.location ?? "India").trim() || "India",
    type,
    description: String(value.description ?? "").trim(),
    applyUrl: String(value.applyUrl ?? "/contact-us").trim() || "/contact-us",
    status,
    createdAt,
    updatedAt: String(value.updatedAt ?? createdAt),
  };
}

export function emptyJobInput(): JobInput {
  return {
    title: "",
    department: "",
    location: "",
    type: "Full-time",
    description: "",
    applyUrl: "/contact-us",
    status: "open",
  };
}
