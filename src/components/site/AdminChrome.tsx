import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Logo } from "@/components/site/Logo";
import { COMPANY } from "@/lib/site-content";

export function AdminChrome({
  children,
  username,
  onLogout,
  note,
}: {
  children: ReactNode;
  username?: string;
  onLogout?: () => void;
  note?: string;
}) {
  return (
    <div className="min-h-screen bg-surface">
      <header className="border-b border-border bg-white">
        <div className="container-page flex h-20 items-center justify-between gap-4">
          <Link to="/" className="flex items-center" aria-label={COMPANY.name}>
            <Logo />
          </Link>
          <div className="flex items-center gap-3 text-sm">
            <span className="hidden text-ink-soft sm:inline">Careers CMS</span>
            {username ? <span className="rounded-md bg-brand-soft px-2 py-1 font-medium text-brand">{username}</span> : null}
            <Link to="/careers" className="font-medium text-ink-soft hover:text-brand">
              View careers
            </Link>
            {onLogout ? (
              <button type="button" onClick={onLogout} className="font-semibold text-brand hover:text-brand-strong">
                Log out
              </button>
            ) : null}
          </div>
        </div>
      </header>
      {note ? (
        <div className="border-b border-border bg-brand-soft/60">
          <p className="container-page py-2 text-sm text-ink">{note}</p>
        </div>
      ) : null}
      <main className="container-page py-8">{children}</main>
    </div>
  );
}
