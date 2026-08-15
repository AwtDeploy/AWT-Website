import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeader } from "@/components/site/SectionHeader";
import { AnimatedWords } from "@/components/site/AnimatedWords";
import { AnimatedSection } from "@/components/site/AnimatedSection";
import { CAREER_BENEFITS, ROUTE_META } from "@/lib/site-content";
import { getPublicJobsFn } from "@/lib/cms";
import type { JobOpening } from "@/lib/jobs";
import { pageHead, jobPostingJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/site/JsonLd";
import heroCareersBanner from "@/assets/hero-careers-banner.png";

export const Route = createFileRoute("/careers")({
  head: () => pageHead({ title: ROUTE_META.careers.title, description: ROUTE_META.careers.description, path: "/careers" }),
  loader: () => getPublicJobsFn(),
  component: CareersPage,
});

function ApplyLink({ job }: { job: JobOpening }) {
  const href = job.applyUrl || "/contact-us";
  const external = /^https?:/i.test(href);
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 text-sm font-semibold text-brand"
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      Apply Now <ArrowRight className="size-4" />
    </a>
  );
}

function CareersPage() {
  const jobs = Route.useLoaderData();

  return (
    <SiteLayout>
      {jobs.length ? <JsonLd data={jobs.map(jobPostingJsonLd)} /> : null}
      <section className="relative overflow-hidden bg-white">
        <div className="container-page grid items-center gap-8 py-8 lg:grid-cols-2 lg:py-12">
          <div>
            <p className="eyebrow text-brand">Careers</p>
            <h1 className="mt-3 text-4xl font-bold leading-tight text-ink md:text-5xl lg:text-[3.4rem]">
              <AnimatedWords text="Build" className="text-ink" startDelay={0.2} />{" "}
              <AnimatedWords text="Your" className="text-ink" startDelay={0.2} />{" "}
              <AnimatedWords text="Future." className="text-ink" startDelay={0.2} /><br />
              <AnimatedWords text="Build" className="text-brand" startDelay={0.6} />{" "}
              <AnimatedWords text="What" className="text-brand" startDelay={0.6} />{" "}
              <AnimatedWords text="Matters." className="text-brand" startDelay={0.6} />
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-soft">
              <AnimatedWords
                text="At AWT, we build people, ideas, and the future. Be part of a team that is innovating today for a better tomorrow."
                startDelay={1.0}
              />
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#openings" className="btn-primary">
                Explore Opportunities <ArrowRight className="size-4" />
              </a>
              <Link to="/about-us" className="btn-outline">
                Life at AWT <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <img
              src={heroCareersBanner}
              alt="Careers at AWT - Grow, Learn, Succeed"
              className="w-full max-w-[550px] object-contain animate-scale-in mix-blend-multiply"
            />
          </div>
        </div>
      </section>

      <AnimatedSection delay={0}>
        <section className="section">
          <div className="container-page">
            <SectionHeader align="center" eyebrow="Why AWT" title={<>Why Build Your <span className="text-brand">Career at AWT?</span></>} />
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {CAREER_BENEFITS.map((b) => (
                <div key={b.title} className="card-soft p-6">
                  <span className="icon-chip"><b.icon className="size-5" /></span>
                  <h3 className="mt-4 font-semibold text-ink">{b.title}</h3>
                  <p className="mt-1.5 text-sm text-ink-soft">{b.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection delay={100}>
        <section id="openings" className="bg-surface py-14">
          <div className="container-page">
            <SectionHeader align="center" eyebrow="Explore Opportunities" title={<>Find the Role That <span className="text-brand">Fits You.</span></>} />
            <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-white">
              {jobs.length === 0 ? (
                <p className="p-8 text-center text-sm text-ink-soft">
                  There are no open roles right now. Share your profile below and we will reach out when a match comes up.
                </p>
              ) : (
                jobs.map((job, index) => (
                  <div key={job.id} className={`grid items-center gap-3 p-4 md:grid-cols-6 ${index ? "border-t border-border" : ""}`}>
                    <div className="md:col-span-2">
                      <div className="font-semibold text-ink">{job.title}</div>
                      {job.description ? <p className="mt-1 text-sm text-ink-soft">{job.description}</p> : null}
                    </div>
                    <div className="text-sm text-ink-soft">{job.department}</div>
                    <div className="text-sm text-ink-soft">{job.location}</div>
                    <div className="text-sm text-ink-soft">{job.type}</div>
                    <ApplyLink job={job} />
                  </div>
                ))
              )}
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection delay={100}>
        <section className="section bg-surface">
          <div className="container-page grid gap-6 lg:grid-cols-[2fr_1fr] lg:items-center">
            <div>
              <p className="eyebrow">Don't see the right role?</p>
              <h2 className="mt-2 text-3xl font-bold text-ink">We're Always Looking for <span className="text-brand">Great Minds.</span></h2>
              <p className="mt-2 text-ink-soft">Share your profile with us and we will reach out when the right opportunity comes along.</p>
            </div>
            <form
              className="flex flex-col gap-2 sm:flex-row"
              onSubmit={(event) => {
                event.preventDefault();
                const email = new FormData(event.currentTarget).get("email");
                window.location.href = `mailto:hello@angadiworldtech.com?subject=${encodeURIComponent("Open profile")}&body=${encodeURIComponent(`Email: ${email}`)}`;
              }}
            >
              <input
                type="email"
                name="email"
                required
                placeholder="Enter your email"
                className="w-full rounded-lg border border-border bg-white px-4 py-3 text-sm text-ink placeholder:text-ink-soft focus:outline-none focus:ring-2 focus:ring-brand/30"
              />
              <button type="submit" className="inline-flex items-center gap-2 rounded-lg bg-brand px-5 py-3 text-sm font-semibold text-white hover:bg-brand-strong">
                Submit Profile <ArrowRight className="size-4" />
              </button>
            </form>
          </div>
        </section>
      </AnimatedSection>
    </SiteLayout>
  );
}
