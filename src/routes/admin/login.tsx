import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AdminChrome } from "@/components/site/AdminChrome";
import { getCmsSessionFn, loginCmsFn } from "@/lib/cms";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/admin/login")({
  head: () => pageHead({
    title: "Careers CMS login | AWT",
    description: "Sign in to manage AWT job openings.",
    path: "/admin/login",
    index: false,
  }),
  loader: async () => getCmsSessionFn(),
  component: AdminLoginPage,
});

function AdminLoginPage() {
  const session = Route.useLoaderData();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);

  useEffect(() => {
    if (session) {
      void navigate({ to: "/admin/careers" });
    }
  }, [session, navigate]);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPending(true);
    setError("");
    try {
      const result = await loginCmsFn({ data: { username, password } });
      if ("error" in result) {
        setError(result.error);
        return;
      }
      await navigate({ to: "/admin/careers" });
    } catch {
      setError("Could not sign in. Please try again.");
    } finally {
      setPending(false);
    }
  }

  return (
    <AdminChrome>
      <div className="mx-auto max-w-md">
        <p className="eyebrow">Careers CMS</p>
        <h1 className="mt-2 text-3xl font-bold text-ink">Manage job openings</h1>
        <p className="mt-2 text-sm text-ink-soft">Sign in to add, edit, or close roles on the careers page.</p>
        <form onSubmit={onSubmit} className="mt-8 space-y-4 rounded-2xl border border-border bg-white p-6">
          <label className="block">
            <span className="mb-1.5 block text-sm font-medium text-ink">Username</span>
            <input
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              autoComplete="username"
              required
              className="w-full rounded-lg border border-border bg-white px-4 py-3 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-brand/30"
            />
          </label>
          <label className="block">
            <span className="mb-1.5 block text-sm font-medium text-ink">Password</span>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              autoComplete="current-password"
              required
              className="w-full rounded-lg border border-border bg-white px-4 py-3 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-brand/30"
            />
          </label>
          {error ? <p className="text-sm font-medium text-destructive">{error}</p> : null}
          <button type="submit" disabled={pending} className="btn-primary w-full justify-center disabled:opacity-60">
            {pending ? "Signing in..." : "Sign in"}
          </button>
        </form>
      </div>
    </AdminChrome>
  );
}
