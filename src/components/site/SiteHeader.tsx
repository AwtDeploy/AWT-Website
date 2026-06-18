import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { COMPANY, NAV_ITEMS } from "@/lib/site-content";
import { Logo } from "./Logo";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-white/95 backdrop-blur">
      <div className="container-page flex h-20 items-center justify-between gap-4">
        <Link to="/" className="flex items-center" aria-label={COMPANY.name}>
          <Logo />
        </Link>
        <nav className="hidden xl:flex items-center gap-7">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="whitespace-nowrap text-base font-medium text-ink-soft transition-colors hover:text-brand relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-brand after:transition-all after:duration-300 hover:after:w-full"
              activeProps={{ className: "text-brand font-semibold after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-brand" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden xl:flex items-center">
          <Link
            to="/contact-us"
            className="group inline-flex items-center gap-2 rounded-md bg-brand px-5 py-2.5 text-base font-semibold text-white transition hover:bg-brand-strong"
          >
            Get a Consultation
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
        <button
          aria-label="Toggle menu"
          className="xl:hidden inline-flex items-center justify-center rounded-md border border-border p-2 text-ink"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      {open && (
        <div className="xl:hidden border-t border-border bg-white">
          <nav className="container-page flex flex-col py-3">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="py-2 text-sm font-medium text-ink-soft hover:text-ink"
                activeProps={{ className: "text-brand font-semibold" }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact-us"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-brand px-4 py-2 text-sm font-semibold text-white"
            >
              Get a Consultation <ArrowRight className="size-4" />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
