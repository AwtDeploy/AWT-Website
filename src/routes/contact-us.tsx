import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { AnimatedWords } from "@/components/site/AnimatedWords";
import { COMPANY, CONTACT_CARDS, OFFICES, ROUTE_META } from "@/lib/site-content";
import heroContact from "@/assets/hero-contact.jpg";

export const Route = createFileRoute("/contact-us")({
  head: () => ({
    meta: [
      { title: ROUTE_META.contact.title },
      { name: "description", content: ROUTE_META.contact.description },
      { property: "og:title", content: ROUTE_META.contact.title },
      { property: "og:description", content: ROUTE_META.contact.description },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <SiteLayout>
      <PageHero
        dark
        eyebrow="Contact Us"
        title={<>
          <AnimatedWords text="Let's" className="text-white" startDelay={0.2} />{" "}
          <AnimatedWords text="Build" className="text-white" startDelay={0.2} /><br />
          <AnimatedWords text="What's" className="text-brand" startDelay={0.5} />{" "}
          <AnimatedWords text="Next." className="text-brand" startDelay={0.5} />
        </>}
        subtitle=""
        image={heroContact}
      >
        <p className="mt-4 max-w-xl text-base leading-relaxed text-white/70">
          <AnimatedWords
            text="Have a question, an idea, or a challenge? We're here to listen and help you turn possibilities into impact."
            startDelay={0.8}
          />
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {CONTACT_CARDS.map((c) => (
            <a key={c.title} href={c.title === "Call us" ? COMPANY.phoneHref : COMPANY.emailHref} className="flex items-center gap-3 rounded-xl border border-white/15 bg-white/10 p-4">
              <span className="icon-chip shrink-0"><c.icon className="size-5" /></span>
              <div className="min-w-0">
                <div className="text-xs font-semibold uppercase tracking-wider text-white/60">{c.title}</div>
                <div className="text-sm font-semibold text-white">{c.value}</div>
              </div>
            </a>
          ))}
        </div>
      </PageHero>

      <section className="section">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-ink">Send Us a Message</h2>
            <p className="mt-1 text-sm text-ink-soft">Fill out the form and our team will get back to you shortly.</p>
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="mt-6 grid gap-4 sm:grid-cols-2"
            >
              <Field label="Full Name" required />
              <Field label="Work Email" type="email" required />
              <Field label="Company Name" />
              <Field label="Phone Number" />
              <div className="sm:col-span-2">
                <label className="text-xs font-semibold text-ink-soft">How can we help you?</label>
                <select className="mt-1 w-full rounded-lg border border-border bg-white px-3 py-2.5 text-sm">
                  <option>Solutions and services</option>
                  <option>Product enquiry</option>
                  <option>Innovation partnership</option>
                  <option>Careers</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="text-xs font-semibold text-ink-soft">Tell us more about your requirement</label>
                <textarea rows={4} className="mt-1 w-full rounded-lg border border-border bg-white px-3 py-2.5 text-sm" />
              </div>
              <div className="sm:col-span-2">
                <button className="btn-primary" type="submit">
                  {sent ? "Message Sent" : "Send Message"} <ArrowRight className="size-4" />
                </button>
              </div>
            </form>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-ink">Connect With Us</h2>
            <p className="mt-1 text-sm text-ink-soft">Ready to start your transformation journey? Let’s discuss how AWT can help your business grow.</p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {OFFICES.slice(0, 2).map((o) => (
                <div key={o.city} className="rounded-xl border border-border bg-white p-5">
                  <div className="flex items-center gap-2 text-brand"><MapPin className="size-4" /><span className="text-xs font-semibold uppercase tracking-wider">{o.city}</span></div>
                  <p className="mt-2 text-sm text-ink-soft">{o.address}</p>
                </div>
              ))}
              <a href={COMPANY.emailHref} className="rounded-xl border border-border bg-white p-5">
                <div className="flex items-center gap-2 text-brand"><Mail className="size-4" /><span className="text-xs font-semibold uppercase tracking-wider">Email us</span></div>
                <p className="mt-2 text-sm font-semibold text-ink">{COMPANY.email}</p>
              </a>
              <a href={COMPANY.phoneHref} className="rounded-xl border border-border bg-white p-5">
                <div className="flex items-center gap-2 text-brand"><Phone className="size-4" /><span className="text-xs font-semibold uppercase tracking-wider">Call us</span></div>
                <p className="mt-2 text-sm font-semibold text-ink">{COMPANY.phoneDisplay}</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-14">
        <div className="container-page">
          <SectionHeader align="center" eyebrow="Our Offices" title={<>Across Cities. <span className="text-brand">Closer to You.</span></>} />
          <div className="mx-auto mt-8 grid max-w-4xl gap-5 sm:grid-cols-2">
            {OFFICES.map((o) => (
              <div key={o.city} className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
                <div className="aspect-[16/9] bg-gradient-to-br from-[#1a1a1f] via-brand-strong to-brand" />
                <div className="p-5">
                  <div className="text-brand text-sm font-semibold">{o.city}</div>
                  <div className="text-xs font-medium text-ink-soft">{o.country}</div>
                  <p className="mt-2 text-sm text-ink-soft">{o.address}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({ label, type = "text", required }: { label: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-xs font-semibold text-ink-soft">{label}{required && " *"}</label>
      <input
        type={type}
        required={required}
        className="mt-1 w-full rounded-lg border border-border bg-white px-3 py-2.5 text-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"
      />
    </div>
  );
}
