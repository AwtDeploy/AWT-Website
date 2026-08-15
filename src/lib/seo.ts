import { COMPANY } from "./site-content";
import type { JobOpening } from "./jobs";

export const SITE_URL = "https://angadiworldtech.com";
export const SITE_NAME = COMPANY.name;

export function absoluteUrl(path: string) {
  if (path.startsWith("http")) return path;
  if (path === "/") return `${SITE_URL}/`;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function pageHead({
  title,
  description,
  path,
  index = true,
}: {
  title: string;
  description: string;
  path: string;
  index?: boolean;
}) {
  const url = absoluteUrl(path);
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { name: "author", content: SITE_NAME },
      { name: "robots", content: index ? "index,follow" : "noindex,nofollow" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:locale", content: "en_IN" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:site", content: "@angadiworldtech" },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    legalName: COMPANY.legalName,
    url: SITE_URL,
    logo: `${SITE_URL}/assets/Angadi-world-New-logo.jpg`,
    email: COMPANY.email,
    telephone: COMPANY.phoneDisplay,
    sameAs: [
      "https://www.linkedin.com/company/awt-technology/",
      "https://x.com/angadiworldtech",
      "https://www.facebook.com/angadiworldtechnology",
      "https://www.instagram.com/angadiworldtech/",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      addressCountry: "IN",
    },
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    publisher: { "@id": `${SITE_URL}/#organization` },
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/insights?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function aboutPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Angadi World Technologies",
    url: absoluteUrl("/about-us"),
    mainEntity: organizationJsonLd(),
  };
}

export function contactPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact AWT",
    url: absoluteUrl("/contact-us"),
    mainEntity: organizationJsonLd(),
  };
}

export function serviceJsonLd(name: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: absoluteUrl(path),
    provider: organizationJsonLd(),
    areaServed: ["IN", "US", "GB"],
    serviceType: name,
  };
}

export function jobPostingJsonLd(job: JobOpening) {
  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description: job.description || `${job.title} at ${SITE_NAME}`,
    datePosted: job.createdAt,
    employmentType:
      job.type === "Full-time"
        ? "FULL_TIME"
        : job.type === "Part-time"
          ? "PART_TIME"
          : job.type === "Internship"
            ? "INTERN"
            : "CONTRACTOR",
    hiringOrganization: organizationJsonLd(),
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: job.location,
        addressCountry: "IN",
      },
    },
    directApply: true,
    url: absoluteUrl("/careers"),
  };
}
