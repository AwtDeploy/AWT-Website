import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { AnimatedWords } from "@/components/site/AnimatedWords";
import { AnimatedSection } from "@/components/site/AnimatedSection";
import {
  INNOVATION_MODELS,
  INNOVATION_REASONS,
  METRICS,
  PRODUCTS,
  ROUTE_META,
} from "@/lib/site-content";
import heroInnovation from "@/assets/hero-innovation.jpg";

export const Route = createFileRoute("/innovation-partners")({
  head: () => ({
    meta: [
      { title: ROUTE_META.partners.title },
      { name: "description", content: ROUTE_META.partners.description },
      { property: "og:title", content: ROUTE_META.partners.title },
      { property: "og:description", content: ROUTE_META.partners.description },
    ],
  }),
  component: InnovationPartnersPage,
});

function InnovationPartnersPage() {
  return (
    <SiteLayout>
      <PageHero
        dark
        eyebrow="Innovation Partners"
        title={<>
          <AnimatedWords text="Co-Building" className="text-white" startDelay={0.2} />{" "}
          <AnimatedWords text="the" className="text-white" startDelay={0.2} />{" "}
          <AnimatedWords text="Future" className="text-white" startDelay={0.2} />{" "}
          <AnimatedWords text="of" className="text-white" startDelay={0.2} />{" "}
          <AnimatedWords text="Enterprise" className="text-brand" startDelay={0.6} />{" "}
          <AnimatedWords text="Intelligence." className="text-brand" startDelay={0.6} />
        </>}
        subtitle=""
        image={heroInnovation}
        primary={{ label: "Become a Partner", to: "/contact-us" }}
        secondary={{ label: "Request the Portfolio", to: "/contact-us" }}
      >
        <p className="mt-4 max-w-xl text-base leading-relaxed text-white/70">
          <AnimatedWords
            text="Investing in innovation. Partnering for scale. Creating lasting impact. We invite visionary investors, strategic partners, and technology leaders to shape the next generation of intelligent enterprise platforms."
            startDelay={1.2}
          />
        </p>
      </PageHero>

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

      <AnimatedSection delay={100}>
        <section className="section">
          <div className="container-page grid gap-10 lg:grid-cols-2">
            <div>
              <SectionHeader eyebrow="Why Partner with AWT" title="A Proven Foundation for Growth" />
              <p className="mt-3 text-ink-soft">
                Unlike traditional startups that begin with an idea and seek validation, AWT has built a strong foundation through years of successful project execution, industry expertise, and trusted client relationships.
              </p>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {[
                "8+ years of innovation since 2018",
                "120+ projects delivered globally",
                "Global presence across India, USA, UK",
                "AI-first product strategy",
                "Product + services ecosystem",
                "Long-term sustainable vision",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2 rounded-xl border border-border bg-white p-4 text-sm text-ink">
                  <CheckCircle2 className="mt-0.5 size-4 text-brand" />{t}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection delay={100}>
        <section className="bg-surface py-14">
          <div className="container-page">
            <SectionHeader align="center" eyebrow="The AWT Innovation Portfolio" title="Building Platforms for Tomorrow." description="Our innovation initiatives focus on solving high-impact business challenges through scalable SaaS platforms, intelligent automation, and enterprise-grade solutions." />
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {PRODUCTS.map((p) => (
                <div key={p.name} className="card-soft p-6">
                  <div className="text-xs font-semibold uppercase tracking-wider text-brand">Platform</div>
                  <h3 className="mt-1 text-xl font-bold text-ink">{p.name}</h3>
                  <p className="mt-1.5 text-sm text-ink-soft">{p.tagline}</p>
                  <ul className="mt-4 space-y-1.5 text-sm">
                    {p.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-ink"><CheckCircle2 className="mt-0.5 size-4 text-brand" />{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection delay={100}>
        <section className="section bg-surface">
          <div className="container-page grid gap-8 lg:grid-cols-2">
            <div>
              <p className="eyebrow">Partnership Models</p>
              <h2 className="mt-2 text-3xl font-bold text-ink">Choose How We Build Together.</h2>
              <p className="mt-3 text-ink-soft">Flexible engagement models for investors, alliances, distribution partners, and white label collaborators.</p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {INNOVATION_MODELS.map((m, i) => (
                <div key={m} className="rounded-xl border border-border bg-white p-4 shadow-sm">
                  <span className="text-sm font-semibold text-brand">0{i + 1}</span>
                  <div className="mt-1 font-semibold text-ink">{m}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection delay={100}>
        <section className="section">
          <div className="container-page grid gap-10 lg:grid-cols-2">
            <SectionHeader eyebrow="Why AWT is Different" title="Strategy and Execution, Built In." />
            <ul className="grid gap-3">
              {INNOVATION_REASONS.map((r) => (
                <li key={r} className="flex items-start gap-3 rounded-xl border border-border bg-white p-4">
                  <CheckCircle2 className="mt-0.5 size-5 text-brand" />
                  <span className="font-medium text-ink">{r}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </AnimatedSection>

      <section className="bg-gradient-to-r from-brand to-brand-strong py-10 text-white">
        <div className="container-page flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h3 className="text-2xl font-bold">Become an Innovation Partner</h3>
            <p className="mt-1 text-white/85">Schedule an executive discussion or explore strategic partnership opportunities.</p>
          </div>
          <Link to="/contact-us" className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 font-semibold text-brand">
            Schedule a Discussion <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
