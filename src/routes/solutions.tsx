import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { AnimatedWords } from "@/components/site/AnimatedWords";
import { AnimatedSection } from "@/components/site/AnimatedSection";
import { APPROACH_STEPS, ROUTE_META, SOLUTION_PILLARS, TECHNOLOGIES } from "@/lib/site-content";
import heroSolutionsBanner from "@/assets/hero-solutions-banner.png";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: ROUTE_META.solutions.title },
      { name: "description", content: ROUTE_META.solutions.description },
      { property: "og:title", content: ROUTE_META.solutions.title },
      { property: "og:description", content: ROUTE_META.solutions.description },
    ],
  }),
  component: SolutionsPage,
});

function SolutionsPage() {
  return (
    <SiteLayout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white">
        <div className="container-page grid items-center gap-8 py-12 lg:grid-cols-2 lg:py-16">
          <div>
            <p className="eyebrow text-brand">Our Solutions</p>
            <h1 className="mt-3 text-4xl font-bold leading-tight text-ink md:text-5xl lg:text-[3.4rem]">
              <AnimatedWords text="Solutions" className="text-ink" startDelay={0.2} />{" "}
              <AnimatedWords text="that" className="text-ink" startDelay={0.2} />{" "}
              <AnimatedWords text="Power" className="text-ink" startDelay={0.2} />{" "}
              <AnimatedWords text="Intelligent" className="text-brand" startDelay={0.6} />{" "}
              <AnimatedWords text="Enterprises." className="text-brand" startDelay={0.6} />
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-soft">
              <AnimatedWords
                text="End-to-end technology solutions that help businesses modernize, automate, and scale with confidence. From strategy to execution, we engineer solutions that create real business impact."
                startDelay={1.0}
              />
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link to="/contact-us" className="btn-primary">
                Talk to Our Experts <ArrowRight className="size-4" />
              </Link>
              <Link to="/solutions" className="btn-outline">
                Explore All Solutions <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <img
              src={heroSolutionsBanner}
              alt="AWT Solutions - Cloud, Security, AI, Data, Analytics"
              className="w-full max-w-[550px] object-contain animate-scale-in mix-blend-multiply"
            />
          </div>
        </div>
      </section>

      <AnimatedSection delay={0}>
        <section className="section">
          <div className="container-page">
            <SectionHeader
              align="center"
              eyebrow="Our Solutions"
              title="Comprehensive. Scalable. Future-Ready."
              description="We combine deep technical expertise with industry knowledge to deliver solutions that solve today's challenges and prepare for tomorrow's opportunities."
            />
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {SOLUTION_PILLARS.map((s) => (
                <div key={s.title} className="card-soft p-6">
                  <span className="icon-chip"><s.icon className="size-5" /></span>
                  <h3 className="mt-4 font-semibold text-ink">{s.title}</h3>
                  <p className="mt-1.5 text-sm text-ink-soft">{s.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection delay={100}>
        <section className="section bg-surface">
          <div className="container-page grid gap-8 lg:grid-cols-[1fr_2fr]">
            <div>
              <p className="eyebrow">Our Approach</p>
              <h2 className="mt-2 text-3xl font-bold text-ink">A Proven Framework <br />for Enterprise Success</h2>
              <p className="mt-3 text-ink-soft">We follow a collaborative and agile approach to deliver solutions aligned with your business goals.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {APPROACH_STEPS.map((s, i) => (
                <div key={s.title} className="rounded-xl border border-border bg-white p-4 text-center shadow-sm">
                  <span className="icon-chip mx-auto"><s.icon className="size-5" /></span>
                  <div className="mt-3 text-xs font-semibold text-brand">0{i + 1}</div>
                  <div className="font-semibold text-ink">{s.title}</div>
                  <p className="mt-1 text-xs text-ink-soft">{s.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection delay={100}>
        <section className="section">
          <div className="container-page grid gap-10 lg:grid-cols-[1fr_2fr] lg:items-center">
            <SectionHeader eyebrow="Technologies We Work With" title={<>Modern Technologies. <br />Maximum Impact.</>} />
            <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6">
              {TECHNOLOGIES.map((t) => (
                <div key={t} className="rounded-xl border border-border bg-white px-3 py-4 text-center text-sm font-semibold text-ink">{t}</div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      <CTAStrip />
    </SiteLayout>
  );
}

function CTAStrip() {
  return (
    <section className="bg-gradient-to-r from-brand to-brand-strong py-10 text-white">
      <div className="container-page flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h3 className="text-2xl font-bold">Let’s Build Solutions That Drive Your Business Forward.</h3>
          <p className="mt-1 text-white/85">Share your challenge with us and our experts will craft a solution tailored to your needs.</p>
        </div>
        <Link to="/contact-us" className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 font-semibold text-brand">
          Describe Your Problem <ArrowRight className="size-4" />
        </Link>
      </div>
    </section>
  );
}
