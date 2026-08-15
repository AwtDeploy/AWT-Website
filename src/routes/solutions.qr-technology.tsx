import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeader } from "@/components/site/SectionHeader";
import { AnimatedWords } from "@/components/site/AnimatedWords";
import { AnimatedSection } from "@/components/site/AnimatedSection";
import { JsonLd } from "@/components/site/JsonLd";
import { QR_SERVICE } from "@/lib/qr-content";
import { pageHead, serviceJsonLd } from "@/lib/seo";
import heroSolutionsBanner from "@/assets/hero-solutions-banner.png";

const META = {
  title: "QR Technology Customized Services | Industry-Specific QR Systems | AWT",
  description:
    "AWT builds industry-specific QR programs for manufacturing, healthcare, retail, logistics, government, and education—codes that update the systems you already run.",
};

export const Route = createFileRoute("/solutions/qr-technology")({
  head: () => pageHead({ title: META.title, description: META.description, path: QR_SERVICE.slug }),
  component: QrTechnologyPage,
});

function QrTechnologyPage() {
  return (
    <SiteLayout>
      <JsonLd data={serviceJsonLd(QR_SERVICE.name, META.description, QR_SERVICE.slug)} />
      <section className="relative overflow-hidden bg-white">
        <div className="container-page grid items-center gap-8 py-12 lg:grid-cols-2 lg:py-16">
          <div>
            <p className="eyebrow text-brand">{QR_SERVICE.eyebrow}</p>
            <h1 className="mt-3 text-4xl font-bold leading-tight text-ink md:text-5xl lg:text-[3.4rem]">
              <AnimatedWords text="QR" className="text-ink" startDelay={0.2} />{" "}
              <AnimatedWords text="built" className="text-ink" startDelay={0.2} />{" "}
              <AnimatedWords text="for" className="text-ink" startDelay={0.2} />{" "}
              <AnimatedWords text="your" className="text-brand" startDelay={0.6} />{" "}
              <AnimatedWords text="industry." className="text-brand" startDelay={0.6} />
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-soft">
              {QR_SERVICE.description}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link to="/contact-us" className="btn-primary">
                Discuss a QR program <ArrowRight className="size-4" />
              </Link>
              <Link to="/solutions" className="btn-outline">
                All solutions <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <img
              src={heroSolutionsBanner}
              alt="AWT QR technology services connecting scans to enterprise systems across industries"
              className="w-full max-w-[550px] object-contain animate-scale-in mix-blend-multiply"
            />
          </div>
        </div>
      </section>

      <AnimatedSection delay={0}>
        <section className="section">
          <div className="container-page max-w-3xl">
            <SectionHeader
              eyebrow="The problem we solve"
              title={<>A scan should change a record, not open a brochure.</>}
            />
            <p className="mt-6 text-base leading-relaxed text-ink-soft">{QR_SERVICE.intro}</p>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection delay={100}>
        <section className="section bg-surface">
          <div className="container-page">
            <SectionHeader
              align="center"
              eyebrow="What AWT customizes"
              title={<>Capabilities fitted to the workflow, not a template.</>}
            />
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {QR_SERVICE.capabilities.map((item) => (
                <div key={item.title} className="card-soft p-6">
                  <h3 className="font-semibold text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm text-ink-soft">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection delay={100}>
        <section className="section">
          <div className="container-page">
            <SectionHeader
              align="center"
              eyebrow="Industries we digitize"
              title={<>The same QR idea. A different operational contract.</>}
            />
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {QR_SERVICE.industries.map((item) => (
                <div key={item.title} className="rounded-2xl border border-border bg-white p-6">
                  <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection delay={100}>
        <section className="section bg-surface">
          <div className="container-page grid gap-10 lg:grid-cols-[1fr_2fr]">
            <div>
              <p className="eyebrow">How it works</p>
              <h2 className="mt-2 text-3xl font-bold text-ink">From floor walk to scaled print run.</h2>
              <p className="mt-3 text-ink-soft">
                We do not start with a label vendor. We start with the moment a person needs a trustworthy identity in their hand.
              </p>
            </div>
            <ol className="grid gap-4 sm:grid-cols-2">
              {QR_SERVICE.process.map((step, index) => (
                <li key={step.title} className="rounded-xl border border-border bg-white p-5">
                  <div className="text-xs font-semibold text-brand">0{index + 1}</div>
                  <h3 className="mt-1 font-semibold text-ink">{step.title}</h3>
                  <p className="mt-2 text-sm text-ink-soft">{step.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection delay={100}>
        <section className="section">
          <div className="container-page">
            <SectionHeader eyebrow="Outcomes" title={<>What teams measure after the codes go live.</>} />
            <ul className="mt-8 grid gap-3 md:grid-cols-2">
              {QR_SERVICE.outcomes.map((item) => (
                <li key={item} className="flex items-start gap-3 rounded-xl border border-border bg-white p-4 text-sm text-ink">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-brand" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </AnimatedSection>

      <section className="bg-gradient-to-r from-brand to-brand-strong py-10 text-white">
        <div className="container-page flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-bold">Tell us the scan that currently fails.</h2>
            <p className="mt-1 text-white/85">We will map it to an identifier, a system of record, and a pilot you can run on one line or one route.</p>
          </div>
          <Link to="/contact-us" className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 font-semibold text-brand">
            Start a QR conversation <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
