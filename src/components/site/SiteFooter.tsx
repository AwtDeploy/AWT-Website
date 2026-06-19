import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";
import { COMPANY } from "@/lib/site-content";
import awtLogo from "@/assets/Angadi-world-New-logo.jpg";

const COMPANY_LINKS = [
  { label: "About Us", to: "/about-us" },
  { label: "Careers", to: "/careers" },
  { label: "News & Media", to: "/insights" },
  { label: "Contact Us", to: "/contact-us" },
];

const SOLUTION_LINKS = [
  { label: "Digital Transformation", to: "/solutions" },
  { label: "Software Engineering", to: "/solutions" },
  { label: "AI & Automation", to: "/solutions" },
  { label: "Cloud & DevOps", to: "/solutions" },
];

const PRODUCT_LINKS = [
  { label: "SafeRide 360™", to: "/products" },
  { label: "Job Streamers™", to: "/products" },
  { label: "Venuvo™", to: "/products" },
  { label: "Innovation Partners", to: "/innovation-partners" },
];

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-black text-white/80">
      <div className="container-page py-14">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="inline-flex items-center justify-center rounded-md bg-white px-3 py-2">
              <img src={awtLogo} alt="AWT" className="h-12 w-auto" />
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
              AWT is a global technology company delivering digital transformation, enterprise IT
              solutions, and innovative products for a smarter tomorrow.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { Icon: Linkedin, href: "https://www.linkedin.com/company/awt-technology/" },
                { Icon: Twitter, href: "https://x.com/angadiworldtech" },
                { Icon: Facebook, href: "https://www.facebook.com/angadiworldtechnology" },
                { Icon: Instagram, href: "https://www.instagram.com/angadiworldtech/" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="social"
                  className="social-icon inline-flex size-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition hover:border-brand hover:text-brand"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <FooterCol title="Company" items={COMPANY_LINKS} />
          <FooterCol title="Solutions" items={SOLUTION_LINKS} />
          <FooterCol title="Products" items={PRODUCT_LINKS} />

          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Contact Us</h4>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex items-center gap-2">
                <MapPin className="shrink-0 size-4 text-brand" />
                <span className="text-white/80">{COMPANY.countries.join(" | ")}</span>
              </li>
              <li>
                <a href={COMPANY.phoneHref} className="flex items-center gap-2 text-white/80 hover:text-white">
                  <Phone className="mt-0 shrink-0 size-4 text-brand" />
                  {COMPANY.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={COMPANY.emailHref} className="flex items-center gap-2 whitespace-nowrap text-white/80 hover:text-white">
                  <Mail className="mt-0 shrink-0 size-4 text-brand" />
                  {COMPANY.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-2 py-5 text-xs text-white/60 md:flex-row md:items-center md:justify-between">
          <span>© {year} {COMPANY.legalName} All Rights Reserved.</span>
          <span className="italic">{COMPANY.tagline}</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: { label: string; to: string }[] }) {
  return (
    <div className="lg:col-span-2">
      <h4 className="text-sm font-semibold uppercase tracking-wider text-white">{title}</h4>
      <ul className="mt-5 space-y-3">
        {items.map((i) => (
          <li key={i.label}>
            <Link to={i.to} className="text-sm text-white/70 transition hover:text-brand">
              {i.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
