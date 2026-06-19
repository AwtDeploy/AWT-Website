import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { AnimatedWords } from "@/components/site/AnimatedWords";
import { AnimatedSection } from "@/components/site/AnimatedSection";
import { FEATURED_SERIES, INSIGHT_TOPICS, ROUTE_META } from "@/lib/site-content";
import heroInsightsBanner from "@/assets/hero-insights-banner.png";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: ROUTE_META.insights.title },
      { name: "description", content: ROUTE_META.insights.description },
      { property: "og:title", content: ROUTE_META.insights.title },
      { property: "og:description", content: ROUTE_META.insights.description },
    ],
  }),
  component: InsightsPage,
});

function InsightsPage() {
  return (
    <SiteLayout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white">
        <div className="container-page grid items-center gap-8 py-8 lg:grid-cols-2 lg:py-12">
          <div>
            <p className="eyebrow text-brand">Insights</p>
            <h1 className="mt-3 text-4xl font-bold leading-tight text-ink md:text-5xl lg:text-[3.4rem]">
              <AnimatedWords text="Where" className="text-ink" startDelay={0.2} />{" "}
              <AnimatedWords text="Innovation" className="text-ink" startDelay={0.2} />{" "}
              <AnimatedWords text="Meets" className="text-ink" startDelay={0.2} />{" "}
              <AnimatedWords text="Perspective." className="text-brand" startDelay={0.6} />
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-soft">
              <AnimatedWords
                text="Innovation is not just about technology. It is about how you think about the future."
                startDelay={0.8}
              />
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link to="/insights" className="btn-primary">
                Explore Insights <ArrowRight className="size-4" />
              </Link>
              <Link to="/contact-us" className="btn-outline">
                Subscribe to Insights <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <img
              src={heroInsightsBanner}
              alt="Insights - Globe with magnifying glass and analytics icons"
              className="w-full max-w-[550px] object-contain animate-scale-in mix-blend-multiply"
            />
          </div>
        </div>
      </section>

      <AnimatedSection delay={0}>
        <section className="section">
          <div className="container-page">
            <SectionHeader align="center" eyebrow="What You'll Find Here" title="Insights That Inspire Action." />
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {INSIGHT_TOPICS.map((t) => (
                <div key={t.title} className="card-soft p-6">
                  <span className="icon-chip"><t.icon className="size-5" /></span>
                  <h3 className="mt-4 font-semibold text-ink">{t.title}</h3>
                  <p className="mt-1 text-sm text-ink-soft">{t.description}</p>
                  <ul className="mt-4 space-y-1.5 text-sm">
                    {t.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-ink"><ArrowRight className="mt-1 size-3 text-brand" />{b}</li>
                    ))}
                  </ul>
                  <Link to="/insights" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand">
                    Explore Articles <ArrowRight className="size-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection delay={100}>
        <section className="section bg-surface">
          <div className="container-page">
            <SectionHeader align="center" eyebrow="Why Our Voice Matters" title="Trusted Insights. Real Impact." />
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["Real Implementation Case Studies", "Insights backed by real-world implementations and outcomes."],
                ["Emerging Technology Analysis", "Deep analysis of technologies shaping tomorrow."],
                ["Data-Driven Conclusions", "Research-backed insights with measurable impact."],
                ["Practical Adoption Frameworks", "Actionable frameworks to help you adopt with confidence."],
              ].map(([t, d]) => (
                <div key={t} className="rounded-xl border border-border bg-white p-5 shadow-sm">
                  <CheckCircle2 className="size-5 text-brand" />
                  <div className="mt-3 font-semibold text-ink">{t}</div>
                  <p className="mt-1 text-sm text-ink-soft">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection delay={100}>
        <section className="section">
          <div className="container-page">
            <SectionHeader align="center" eyebrow="Featured Series" title="Deep Dives. Curated for Leaders." />
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {FEATURED_SERIES.map((s) => (
                <article key={s.title} className="rounded-2xl border border-border bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-ink">{s.title}</h3>
                  <ul className="mt-4 space-y-1.5 text-sm">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-ink-soft"><ArrowRight className="mt-1 size-3 text-brand" />{b}</li>
                    ))}
                  </ul>
                  <Link to="/insights" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand">
                    Explore Series <ArrowRight className="size-4" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      <section className="bg-gradient-to-r from-brand to-brand-strong py-10 text-white">
        <div className="container-page flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-2xl font-bold">Stay Ahead of Digital Disruption.</h3>
            <p className="mt-1 text-white/85">Monthly insights on AI, cloud, transformation, and innovation strategies.</p>
          </div>
          <form className="flex w-full max-w-md gap-2">
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="w-full rounded-lg border border-white/30 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-white/60"
            />
            <button type="submit" className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-brand">
              Subscribe <ArrowRight className="size-4" />
            </button>
          </form>
        </div>
      </section>
    </SiteLayout>
  );
}
