import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { AnimatedWords } from "@/components/site/AnimatedWords";
import { AnimatedSection } from "@/components/site/AnimatedSection";
import { PRODUCTS, PRODUCT_BENEFITS, ROUTE_META, TECHNOLOGIES } from "@/lib/site-content";
import heroProductsBanner from "@/assets/hero-products-banner.png";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: ROUTE_META.products.title },
      { name: "description", content: ROUTE_META.products.description },
      { property: "og:title", content: ROUTE_META.products.title },
      { property: "og:description", content: ROUTE_META.products.description },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  return (
    <SiteLayout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white">
        <div className="container-page grid items-center gap-8 py-12 lg:grid-cols-2 lg:py-16">
          <div>
            <p className="eyebrow text-brand">Our Products</p>
            <h1 className="mt-3 text-4xl font-bold leading-tight text-ink md:text-5xl lg:text-[3.4rem]">
              <AnimatedWords text="Innovation" className="text-ink" startDelay={0.2} />{" "}
              <AnimatedWords text="in" className="text-ink" startDelay={0.2} />{" "}
              <AnimatedWords text="Every" className="text-ink" startDelay={0.2} />{" "}
              <AnimatedWords text="Solution." className="text-brand" startDelay={0.6} />
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-soft">
              <AnimatedWords
                text="Our proprietary products are built to solve real-world business challenges and drive efficiency, safety, and exceptional experiences."
                startDelay={0.8}
              />
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link to="/products" className="btn-primary">
                Explore Our Products <ArrowRight className="size-4" />
              </Link>
              <Link to="/contact-us" className="btn-outline">
                Talk to Our Experts <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <img
              src={heroProductsBanner}
              alt="AWT Products - Globe with connected devices and platforms"
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
              eyebrow="Our Innovation Products"
              title={<>Purpose-Built. Future-Ready. <span className="text-brand">Impact-Driven.</span></>}
              description="Our proprietary platforms empower organizations with intelligence, automation, safety, and seamless experiences."
            />
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {PRODUCTS.map((p) => (
                <article key={p.name} className="card-soft flex flex-col p-6">
                  <div className="text-xs font-semibold uppercase tracking-wider text-brand">Platform</div>
                  <h3 className="mt-1 text-2xl font-bold text-ink">{p.name}</h3>
                  <p className="mt-1 text-sm text-ink-soft">{p.tagline}</p>
                  <ul className="mt-5 space-y-2 text-sm text-ink">
                    {p.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 size-4 text-brand" />{b}</li>
                    ))}
                  </ul>
                  <Link to="/contact-us" className="mt-6 inline-flex items-center gap-2 rounded-lg border border-brand px-4 py-2 text-sm font-semibold text-brand transition hover:bg-brand hover:text-white">
                    Explore {p.name} <ArrowRight className="size-4" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection delay={100}>
        <section className="section bg-surface">
          <div className="container-page grid gap-6 lg:grid-cols-[1fr_2fr] lg:items-center">
            <h2 className="text-3xl font-bold text-ink">Products That <br />Deliver <span className="text-brand">Real Value.</span></h2>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
              {PRODUCT_BENEFITS.map((b) => (
                <div key={b.title} className="rounded-xl border border-border bg-white p-4 text-center shadow-sm">
                  <span className="icon-chip mx-auto"><b.icon className="size-5" /></span>
                  <div className="mt-3 text-sm font-semibold text-ink">{b.title}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection delay={100}>
        <section className="section bg-surface">
          <div className="container-page">
            <SectionHeader align="center" eyebrow="Built With Modern Technologies" title="A Modern Engineering Foundation" />
            <div className="mt-8 grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6">
              {TECHNOLOGIES.map((t) => (
                <div key={t} className="rounded-xl border border-border bg-white px-3 py-4 text-center text-sm font-semibold text-ink">{t}</div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      <section className="bg-gradient-to-r from-brand to-brand-strong py-10 text-white">
        <div className="container-page flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h3 className="text-2xl font-bold">Have an Idea for the Next Big Thing? Let’s Build It Together.</h3>
            <p className="mt-1 text-white/85">Partner with AWT to turn your vision into a powerful product.</p>
          </div>
          <Link to="/contact-us" className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 font-semibold text-brand">
            Talk to Our Experts <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
