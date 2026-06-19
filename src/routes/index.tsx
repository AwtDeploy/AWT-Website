import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeader } from "@/components/site/SectionHeader";
import { AnimatedWords } from "@/components/site/AnimatedWords";
import { AnimatedSection } from "@/components/site/AnimatedSection";
import {
  APPROACH_STEPS,
  ARTICLES,
  HOME_SOLUTIONS,
  INDUSTRIES,
  METRICS,
  PRODUCTS,
  ROUTE_META,
} from "@/lib/site-content";
import heroHomeBanner from "@/assets/hero-home-banner.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: ROUTE_META.home.title },
      { name: "description", content: ROUTE_META.home.description },
      { property: "og:title", content: ROUTE_META.home.title },
      { property: "og:description", content: ROUTE_META.home.description },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <SiteLayout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white">
        <div className="container-page grid items-center gap-8 py-12 lg:grid-cols-2 lg:py-16">
          <div>
            <p className="eyebrow">Innovations for the New Gen</p>
            <h1 className="mt-3 text-4xl font-bold leading-tight text-ink md:text-5xl lg:text-[3.4rem]">
              <AnimatedWords text="Engineering" className="text-ink" startDelay={0.2} />{" "}
              <AnimatedWords text="Intelligent" className="text-ink" startDelay={0.2} />{" "}
              <AnimatedWords text="Enterprises." className="text-brand" startDelay={0.2} />
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-soft">
              <AnimatedWords
                text="Helping organizations transform through AI, Cloud, Software Engineering, Automation, and Enterprise Innovation."
                startDelay={1.0}
              />
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link to="/contact-us" className="btn-primary">
                Describe Your Challenge <ArrowRight className="size-4" />
              </Link>
              <Link to="/solutions" className="btn-outline">
                Explore Solutions <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <img
              src={heroHomeBanner}
              alt="AWT Services - Cloud & DevOps, Cyber Security, AI & Automation, Data & Analytics, Software Engineering"
              className="w-full max-w-[550px] object-contain animate-scale-in mix-blend-multiply"
            />
          </div>
        </div>
      </section>

      {/* Metrics */}
      <AnimatedSection delay={0}>
        <section className="border-y border-border bg-white">
          <div className="container-page grid grid-cols-2 gap-6 py-8 md:grid-cols-5">
            {METRICS.map((m) => (
              <div key={m.label} className="flex items-start gap-3">
                <span className="icon-chip shrink-0"><m.icon className="size-5" /></span>
                <div>
                  <div className="text-xl font-bold text-ink">{m.value}</div>
                  <div className="text-xs font-medium text-ink-soft">{m.label}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </AnimatedSection>

      {/* Solutions */}
      <AnimatedSection delay={100}>
        <section className="section">
          <div className="container-page">
            <div className="grid items-end gap-6 lg:grid-cols-2">
              <SectionHeader
                eyebrow="Our Solutions"
                title={<>End-to-End Solutions <br />for Modern Enterprises</>}
              />
              <div className="lg:text-right">
                <p className="text-ink-soft">From strategy to execution, we deliver solutions that drive efficiency, agility, and growth.</p>
                <Link to="/solutions" className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-brand">
                  Explore All Solutions <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {HOME_SOLUTIONS.map((s) => (
                <div key={s.title} className="card-soft p-6">
                  <span className="icon-chip"><s.icon className="size-5" /></span>
                  <h3 className="mt-4 text-lg font-semibold text-ink">{s.title}</h3>
                  <p className="mt-1.5 text-sm text-ink-soft">{s.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Industries */}
      <AnimatedSection delay={100}>
        <section className="section bg-surface">
          <div className="container-page grid gap-8 lg:grid-cols-[1fr_2fr]">
            <div>
              <p className="eyebrow">Industries We Serve</p>
              <h2 className="mt-2 text-3xl font-bold text-ink">Domain Expertise. <br />Real Impact.</h2>
              <Link to="/solutions" className="btn-primary mt-5">View All Industries <ArrowRight className="size-4" /></Link>
            </div>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
              {INDUSTRIES.map((i) => (
                <div key={i.title} className="flex items-center gap-3 rounded-xl border border-border bg-white px-4 py-3 shadow-sm">
                  <span className="icon-chip size-10"><i.icon className="size-4" /></span>
                  <span className="text-sm font-medium text-ink">{i.title}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Approach */}
      <AnimatedSection delay={100}>
        <section className="section">
          <div className="container-page grid gap-10 lg:grid-cols-[1fr_2.2fr]">
            <SectionHeader eyebrow="Our Approach" title={<>A Proven Approach <br />for Transformation</>} />
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
              {APPROACH_STEPS.map((s, idx) => (
                <div key={s.title} className="text-center">
                  <div className="relative mx-auto flex size-16 items-center justify-center rounded-full border border-brand/30 bg-brand-soft text-brand-strong">
                    <s.icon className="size-6" />
                    <span className="absolute -bottom-1 -right-1 size-6 rounded-full bg-brand text-xs font-bold text-white grid place-items-center">{idx + 1}</span>
                  </div>
                  <h3 className="mt-3 font-semibold text-ink">{s.title}</h3>
                  <p className="mt-1 text-xs text-ink-soft">{s.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Innovation Platforms */}
      <AnimatedSection delay={100}>
        <section className="section bg-surface">
          <div className="container-page">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <SectionHeader eyebrow="Our Innovation Platforms" title={<>Built for Today. <br />Designed for Tomorrow.</>} />
              <Link to="/products" className="inline-flex items-center gap-2 text-sm font-semibold text-brand">
                Explore All Products <ArrowRight className="size-4" />
              </Link>
            </div>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {PRODUCTS.map((p) => (
                <div key={p.name} className="card-soft p-6">
                  <div className="text-xs font-semibold uppercase tracking-wider text-brand">Platform</div>
                  <h3 className="mt-1 text-xl font-bold text-ink">{p.name}</h3>
                  <p className="mt-2 text-sm text-ink-soft">{p.tagline}</p>
                  <ul className="mt-4 space-y-1.5">
                    {p.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-ink"><CheckCircle2 className="mt-0.5 size-4 text-brand" />{b}</li>
                    ))}
                  </ul>
                  <Link to="/products" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand">
                    Know More <ArrowRight className="size-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Innovation Partners CTA band */}
      <AnimatedSection delay={100}>
        <section className="section">
          <div className="container-page grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="eyebrow">Innovation Partners</p>
              <h2 className="mt-2 text-3xl font-bold text-ink">Stronger Together. <br />Building the Future.</h2>
              <p className="mt-3 max-w-md text-ink-soft">
                Collaborate with AWT through strategic investments, technology alliances, and white label partnerships that scale.
              </p>
              <Link to="/innovation-partners" className="btn-primary mt-5">Explore Partnerships <ArrowRight className="size-4" /></Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {["Strategic Investments", "Technology Alliances", "Go-To-Market Partnerships", "White Label Opportunities"].map((t, i) => (
                <div key={t} className="rounded-xl border border-border bg-white p-5 shadow-sm">
                  <span className="text-sm font-semibold text-brand">0{i + 1}</span>
                  <h3 className="mt-1 font-semibold text-ink">{t}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Insights */}
      <AnimatedSection delay={100}>
        <section className="section">
          <div className="container-page">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <SectionHeader eyebrow="Insights" title="Latest Perspectives" />
              <Link to="/insights" className="inline-flex items-center gap-2 text-sm font-semibold text-brand">
                Explore All Insights <ArrowRight className="size-4" />
              </Link>
            </div>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {ARTICLES.map((a) => (
                <article key={a.title} className="card-soft overflow-hidden">
                  {a.image && (
                    <img src={a.image} alt={a.title} className="aspect-[16/9] w-full object-cover" />
                  )}
                  {!a.image && <div className="aspect-[16/9] bg-gradient-to-br from-brand-soft to-surface-2" />}
                  <div className="p-5">
                    <div className="text-xs text-ink-soft">{a.date} · {a.category}</div>
                    <h3 className="mt-2 font-semibold text-ink">{a.title}</h3>
                    <p className="mt-1.5 text-sm text-ink-soft">{a.summary}</p>
                    <Link to="/insights" className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-brand">
                      Read More <ArrowRight className="size-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>
    </SiteLayout>
  );
}
