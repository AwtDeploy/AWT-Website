import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Globe2, Headphones, Rocket, ShieldCheck } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { AnimatedWords } from "@/components/site/AnimatedWords";
import { AnimatedSection } from "@/components/site/AnimatedSection";
import {
  ABOUT_PRINCIPLES,
  ABOUT_TIMELINE,
  FOUNDER,
  METRICS,
  PRODUCTS,
  ROUTE_META,
  VALUES,
} from "@/lib/site-content";
import heroAbout from "@/assets/hero-about.jpg";
import founderImg from "@/assets/Sravan.jpg";

export const Route = createFileRoute("/about-us")({
  head: () => ({
    meta: [
      { title: ROUTE_META.about.title },
      { name: "description", content: ROUTE_META.about.description },
      { property: "og:title", content: ROUTE_META.about.title },
      { property: "og:description", content: ROUTE_META.about.description },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <PageHero
        dark
        eyebrow="About Us"
        title={<>
          <AnimatedWords text="Beyond" className="text-white" startDelay={0.2} />{" "}
          <AnimatedWords text="Technology." className="text-white" startDelay={0.2} />{" "}
          <AnimatedWords text="Toward" className="text-brand" startDelay={0.6} />{" "}
          <AnimatedWords text="Transformation." className="text-brand" startDelay={0.6} />
        </>}
        subtitle=""
        image={heroAbout}
        primary={{ label: "Partner With AWT", to: "/contact-us" }}
        secondary={{ label: "Explore Our Solutions", to: "/solutions" }}
      >
        <p className="mt-4 max-w-xl text-base leading-relaxed text-white/70">
          <AnimatedWords
            text="Since 2018, Angadi World Technologies has been helping organizations transform through intelligent software, cloud, AI, and enterprise engineering excellence."
            startDelay={1.0}
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

      {/* Story + timeline */}
      <AnimatedSection delay={100}>
        <section className="section">
          <div className="container-page grid gap-10 lg:grid-cols-2">
            <div>
              <SectionHeader eyebrow="Our Story" title="Our Journey of Innovation." />
              <div className="mt-4 space-y-3 text-ink-soft">
                <p>Founded in 2018 by Sravan Kumar Angadi, AWT began with a vision to build technology that connects intelligence with purpose.</p>
                <p>Over the years, AWT has evolved into a global innovation-driven enterprise helping organizations modernize, automate, and scale through intelligent solutions.</p>
                <p>Today we serve clients across industries while continuously investing in product innovation, AI, cloud technologies, and enterprise platforms.</p>
              </div>
            </div>
            <ol className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {ABOUT_TIMELINE.map((t) => (
                <li key={t.year} className="rounded-xl border border-border bg-white p-4">
                  <div className="text-brand text-sm font-bold">{t.year}</div>
                  <div className="mt-1 text-sm font-medium text-ink">{t.title}</div>
                </li>
              ))}
            </ol>
          </div>
        </section>
      </AnimatedSection>

      {/* Vision / Mission / Values */}
      <AnimatedSection delay={100}>
        <section className="bg-surface py-14">
          <div className="container-page grid gap-5 md:grid-cols-3">
            <Card title="Our Vision" body="Empower organizations worldwide with technology that inspires innovation and accelerates growth." />
            <Card title="Our Mission" body="Deliver intelligent, scalable, and future-ready digital solutions that help businesses transform with confidence." />
            <div className="card-soft p-6">
              <h3 className="text-lg font-semibold text-ink">Our Values</h3>
              <ul className="mt-3 grid grid-cols-2 gap-y-2 text-sm">
                {VALUES.map((v) => (
                  <li key={v} className="flex items-center gap-2 text-ink"><CheckCircle2 className="size-4 text-brand" />{v}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Founder */}
      <AnimatedSection delay={100}>
        <section className="section bg-surface">
          <div className="container-page grid gap-10 lg:grid-cols-[auto_1fr] lg:items-center">
            <div className="mx-auto w-full max-w-[260px] overflow-hidden rounded-2xl border border-border shadow-sm">
              <img src={founderImg} alt={FOUNDER.name} className="aspect-square w-full object-cover" />
            </div>
            <div>
              <p className="eyebrow">Meet Our Founder & CEO</p>
              <h2 className="mt-2 text-3xl font-bold text-ink">{FOUNDER.name}</h2>
              <p className="mt-1 font-semibold text-brand">{FOUNDER.role}</p>
              <p className="mt-4 text-ink-soft">{FOUNDER.summary}</p>
              <blockquote className="mt-5 rounded-xl border-l-4 border-brand bg-white p-5 text-ink shadow-sm">
                "{FOUNDER.quote}"
              </blockquote>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* People */}
      <AnimatedSection delay={100}>
        <section className="section">
          <div className="container-page grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="eyebrow">Building Teams. Building Vision.</p>
              <h2 className="mt-2 text-3xl font-bold text-ink">At AWT, innovation begins with <span className="text-brand">people.</span></h2>
              <p className="mt-3 text-ink-soft">We foster a culture where ownership, continuous learning, collaboration, and creativity drive every solution.</p>
              <p className="mt-2 text-ink-soft">Our teams combine technical expertise, strategic thinking, and customer focus to create measurable business impact.</p>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {ABOUT_PRINCIPLES.map((p) => (
                <li key={p} className="flex items-center gap-3 rounded-xl border border-border bg-white p-4">
                  <CheckCircle2 className="size-5 text-brand" />
                  <span className="font-medium text-ink">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </AnimatedSection>

      {/* Global Delivery */}
      <AnimatedSection delay={100}>
        <section className="bg-surface py-14">
          <div className="container-page grid gap-8 lg:grid-cols-2 lg:items-center">
            <SectionHeader eyebrow="Where We Operate" title="Global Delivery Excellence." description="From India to global markets, AWT delivers enterprise-grade solutions through a flexible and scalable delivery model across North America, Europe, the Middle East, and Asia-Pacific." />
            <div className="grid grid-cols-2 gap-3">
              {[
                { t: "24/7 Support", i: Headphones },
                { t: "Global Collaboration", i: Globe2 },
                { t: "Rapid Delivery", i: Rocket },
                { t: "Enterprise Governance", i: ShieldCheck },
              ].map((c) => (
                <div key={c.t} className="rounded-xl border border-border bg-white p-4">
                  <span className="icon-chip"><c.i className="size-5" /></span>
                  <div className="mt-3 font-semibold text-ink">{c.t}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Platforms */}
      <AnimatedSection delay={100}>
        <section className="section">
          <div className="container-page">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="eyebrow">Innovation Ecosystem</p>
                <h2 className="mt-2 text-3xl font-bold text-ink">Building Platforms for Tomorrow.</h2>
              </div>
              <Link to="/products" className="btn-primary">Explore Our Platforms <ArrowRight className="size-4" /></Link>
            </div>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {PRODUCTS.map((p) => (
                <div key={p.name} className="rounded-2xl border border-border bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-ink">{p.name}</h3>
                  <p className="mt-1 text-sm text-ink-soft">{p.tagline}</p>
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

      {/* Vision / Mission / Values */}
      <section className="bg-surface py-14">
        <div className="container-page grid gap-5 md:grid-cols-3">
          <Card title="Our Vision" body="Empower organizations worldwide with technology that inspires innovation and accelerates growth." />
          <Card title="Our Mission" body="Deliver intelligent, scalable, and future-ready digital solutions that help businesses transform with confidence." />
          <div className="card-soft p-6">
            <h3 className="text-lg font-semibold text-ink">Our Values</h3>
            <ul className="mt-3 grid grid-cols-2 gap-y-2 text-sm">
              {VALUES.map((v) => (
                <li key={v} className="flex items-center gap-2 text-ink"><CheckCircle2 className="size-4 text-brand" />{v}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="section bg-surface">
        <div className="container-page grid gap-10 lg:grid-cols-[auto_1fr] lg:items-center">
          <div className="mx-auto w-full max-w-[260px] overflow-hidden rounded-2xl border border-border shadow-sm">
            <img src={founderImg} alt={FOUNDER.name} className="aspect-square w-full object-cover" />
          </div>
          <div>
            <p className="eyebrow">Meet Our Founder & CEO</p>
            <h2 className="mt-2 text-3xl font-bold text-ink">{FOUNDER.name}</h2>
            <p className="mt-1 font-semibold text-brand">{FOUNDER.role}</p>
            <p className="mt-4 text-ink-soft">{FOUNDER.summary}</p>
            <blockquote className="mt-5 rounded-xl border-l-4 border-brand bg-white p-5 text-ink shadow-sm">
              “{FOUNDER.quote}”
            </blockquote>
          </div>
        </div>
      </section>

      {/* People */}
      <section className="section">
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow">Building Teams. Building Vision.</p>
            <h2 className="mt-2 text-3xl font-bold text-ink">At AWT, innovation begins with <span className="text-brand">people.</span></h2>
            <p className="mt-3 text-ink-soft">We foster a culture where ownership, continuous learning, collaboration, and creativity drive every solution.</p>
            <p className="mt-2 text-ink-soft">Our teams combine technical expertise, strategic thinking, and customer focus to create measurable business impact.</p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {ABOUT_PRINCIPLES.map((p) => (
              <li key={p} className="flex items-center gap-3 rounded-xl border border-border bg-white p-4">
                <CheckCircle2 className="size-5 text-brand" />
                <span className="font-medium text-ink">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Global Delivery */}
      <section className="bg-surface py-14">
        <div className="container-page grid gap-8 lg:grid-cols-2 lg:items-center">
          <SectionHeader eyebrow="Where We Operate" title="Global Delivery Excellence." description="From India to global markets, AWT delivers enterprise-grade solutions through a flexible and scalable delivery model across North America, Europe, the Middle East, and Asia-Pacific." />
          <div className="grid grid-cols-2 gap-3">
            {[
              { t: "24/7 Support", i: Headphones },
              { t: "Global Collaboration", i: Globe2 },
              { t: "Rapid Delivery", i: Rocket },
              { t: "Enterprise Governance", i: ShieldCheck },
            ].map((c) => (
              <div key={c.t} className="rounded-xl border border-border bg-white p-4">
                <span className="icon-chip"><c.i className="size-5" /></span>
                <div className="mt-3 font-semibold text-ink">{c.t}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="section">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Innovation Ecosystem</p>
              <h2 className="mt-2 text-3xl font-bold text-ink">Building Platforms for Tomorrow.</h2>
            </div>
            <Link to="/products" className="btn-primary">Explore Our Platforms <ArrowRight className="size-4" /></Link>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {PRODUCTS.map((p) => (
              <div key={p.name} className="rounded-2xl border border-border bg-white p-6 shadow-sm">
                <h3 className="text-lg font-bold text-ink">{p.name}</h3>
                <p className="mt-1 text-sm text-ink-soft">{p.tagline}</p>
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
    </SiteLayout>
  );
}

function Card({ title, body }: { title: string; body: string }) {
  return (
    <div className="card-soft p-6">
      <h3 className="text-lg font-semibold text-ink">{title}</h3>
      <p className="mt-2 text-sm text-ink-soft">{body}</p>
    </div>
  );
}
