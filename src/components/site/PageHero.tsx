import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  subtitle: string;
  image: string;
  primary?: { label: string; helper?: string; to: string };
  secondary?: { label: string; to: string };
  children?: ReactNode;
  dark?: boolean;
}

export function PageHero({ eyebrow, title, subtitle, image, primary, secondary, children, dark }: PageHeroProps) {
  return (
    <section className={`relative overflow-hidden ${dark ? "bg-black" : "bg-gradient-to-br from-surface to-white"}`}>
      <div className="container-page grid items-center gap-10 py-12 lg:grid-cols-2 lg:py-16">
        <div>
          <p className={`eyebrow ${dark ? "text-brand" : ""}`}>{eyebrow}</p>
          <h1 className={`mt-3 text-4xl font-bold leading-tight md:text-5xl lg:text-[3.4rem] ${dark ? "text-white" : "text-ink"}`}>
            {title}
          </h1>
          {subtitle && <p className={`mt-4 max-w-xl text-base leading-relaxed ${dark ? "text-white/70" : "text-ink-soft"}`}>{subtitle}</p>}
          {(primary || secondary) && (
            <div className="mt-6 flex flex-wrap items-center gap-3">
              {primary && (
                <Link to={primary.to} className="btn-primary">
                  {primary.label} <ArrowRight className="size-4" />
                </Link>
              )}
              {secondary && (
                <Link to={secondary.to} className={dark ? "inline-flex items-center gap-2 rounded-lg border border-white/20 bg-transparent px-5 py-3 text-[0.95rem] font-semibold text-white transition hover:bg-white/10" : "btn-outline"}>
                  {secondary.label} <ArrowRight className="size-4" />
                </Link>
              )}
            </div>
          )}
          {children}
        </div>
        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-brand/10 blur-2xl animate-pulse-glow" aria-hidden="true" />
          <img
            src={image}
            alt=""
            className="relative w-full rounded-2xl border border-border object-cover shadow-xl animate-scale-in"
          />
        </div>
      </div>
    </section>
  );
}
