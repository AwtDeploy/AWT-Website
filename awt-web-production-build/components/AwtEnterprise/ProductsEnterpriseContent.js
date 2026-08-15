"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import saferideImage from "@/public/awt-platforms/saferide-360.png";
import jobStreamersImage from "@/public/awt-platforms/job-streamers.png";
import venueVoImage from "@/public/awt-platforms/venuevo.png";
import collaborationImage from "@/public/awt-brand/collaboration-idea.png";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const platformProducts = [
  {
    title: "SafeRide 360°",
    subtitle: "Workforce Safety Intelligence Platform",
    text: "Strengthen workforce safety, improve operational visibility, accelerate emergency response, and support safer business operations.",
    features: [
      "Real-Time Safety Monitoring",
      "Incident Detection & Alerts",
      "Compliance & Audit Management",
      "Analytics & Risk Insights",
    ],
    checkColor: "text-emerald-500",
    image: saferideImage,
    href: "/Products/saferide-360",
  },
  {
    title: "Job Streamers™",
    subtitle: "AI Recruitment Intelligence Platform",
    text: "Transform talent acquisition through intelligent candidate matching, recruitment automation, workforce analytics, and hiring intelligence.",
    features: [
      "AI-Powered Candidate Matching",
      "Talent Pipeline Tracking",
      "Recruitment Analytics",
      "Workforce Intelligence",
    ],
    checkColor: "text-violet-500",
    image: jobStreamersImage,
    href: "/Products/job-streamers",
  },
  {
    title: "VenueVo™",
    subtitle: "Intelligent Event Planning & Booking Platform",
    text: "Simplify venue discovery, vendor management, event planning, budgeting, and bookings through smart automation.",
    features: [
      "Event Planning & Management",
      "Attendee Engagement Tools",
      "Real-Time Event Updates",
      "Vendor & Venue Coordination",
    ],
    checkColor: "text-neutral-900",
    image: venueVoImage,
    href: "/Products/venuevo",
  },
];

const innovationStats = [
  ["3", "Powerful Platforms", "Built for enterprise-grade safety, hiring, and event intelligence."],
  ["10K+", "Users Empowered", "Supporting safer operations and smarter business decisions."],
  ["500+", "Enterprises Trust Us", "Organizations rely on AWT platforms for measurable outcomes."],
  ["99.9%", "Platform Reliability", "Secure, scalable, and always-on product infrastructure."],
];

const standOutFeatures = [
  ["BS", "Built for Scalability", "Designed to grow with your organization and evolving operational needs."],
  ["AI", "AI-Driven Intelligence", "Leveraging AI to deliver smarter insights, automation, and decision support."],
  ["SC", "Secure & Compliant", "Enterprise-grade security, governance, and compliance built into every platform."],
  ["SI", "Seamless Integration", "Connects with existing systems, workflows, and enterprise ecosystems."],
  ["CI", "Continuous Innovation", "Regular updates, new capabilities, and long-term product evolution."],
];

const roadmapMilestones = [
  ["Q2 2025", "Advanced AI Models Integration", "AI"],
  ["Q3 2025", "Global Expansion & Partnerships", "GL"],
  ["Q4 2025", "Enhanced Analytics & Automation", "AN"],
  ["2026+", "New Platforms In Development", "NP"],
];

const offerItems = [
  "Product Strategy & Consulting",
  "UI/UX Design & Prototyping",
  "Engineering & Development",
  "Deployment & Support",
  "Growth & Continuous Improvement",
];

function SectionIntro({ eyebrow, title, text, light = false }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55 }}
      className="mx-auto mb-8 max-w-3xl text-center"
    >
      <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.24em] text-[#ff7143]">{eyebrow}</p>
      <h2 className={`text-3xl font-semibold leading-tight md:text-5xl ${light ? "text-white" : "text-neutral-950"}`}>
        {title}
      </h2>
      {text ? (
        <p className={`mx-auto mt-4 text-sm font-medium leading-7 md:text-base ${light ? "text-white/75" : "text-neutral-600"}`}>
          {text}
        </p>
      ) : null}
    </motion.div>
  );
}

function ProductCard({ product, index }) {
  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, delay: index * 0.06 }}
      whileHover={{ y: -8 }}
      className="group overflow-hidden rounded-[2rem] border border-neutral-100 bg-white shadow-[0_18px_50px_rgba(0,0,0,0.06)]"
    >
      <div className="relative h-52 overflow-hidden bg-neutral-950">
        <Image
          src={product.image}
          alt={product.title}
          fill
          sizes="(max-width: 1024px) 100vw, 33vw"
          className="object-cover object-center transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-4 left-5">
          <h3 className="text-2xl font-black text-white">{product.title}</h3>
        </div>
      </div>
      <div className="p-6">
        <p className="text-sm font-extrabold text-[#ff7143]">{product.subtitle}</p>
        <p className="mt-3 text-sm font-medium leading-7 text-neutral-600">{product.text}</p>
        <ul className="mt-5 space-y-2">
          {product.features.map((feature) => (
            <li key={feature} className="flex items-center gap-2 text-sm font-semibold text-neutral-700">
              <span className={`${product.checkColor} text-base`}>✓</span>
              {feature}
            </li>
          ))}
        </ul>
        <Link
          href={product.href}
          prefetch
          className="mt-6 inline-flex text-xs font-extrabold uppercase tracking-wide text-[#ff7143] transition hover:translate-x-1"
        >
          Learn More -&gt;
        </Link>
      </div>
    </motion.article>
  );
}

export default function ProductsEnterpriseContent() {
  return (
    <main className="w-full bg-[#fafafa] text-neutral-950">
      <section className="mx-auto max-w-7xl px-4 py-8 md:px-8 md:py-10">
        <SectionIntro
          eyebrow="Product Portfolio"
          title={
            <>
              Platforms Built For The <span className="text-[#ff7143]">Future.</span>
            </>
          }
          text="Intelligent solutions designed to solve real business challenges, drive automation, and unlock new growth opportunities."
        />
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          className="grid gap-6 lg:grid-cols-3"
        >
          {platformProducts.map((product, index) => (
            <ProductCard key={product.title} product={product} index={index} />
          ))}
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 md:px-8">
        <SectionIntro
          eyebrow="Product Innovation"
          title="Solving Real Problems. Creating Real Value."
          text="Our products are built with a deep understanding of industry challenges and a relentless focus on delivering tangible business outcomes."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {innovationStats.map(([value, label, text], index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              whileHover={{ y: -4 }}
              className="rounded-3xl border border-neutral-100 bg-white p-6 shadow-[0_14px_40px_rgba(0,0,0,0.05)]"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-sm font-black text-[#ff7143]">
                {index + 1}
              </div>
              <p className="text-4xl font-semibold text-neutral-950">{value}</p>
              <p className="mt-2 text-sm font-extrabold uppercase tracking-wide text-neutral-800">{label}</p>
              <p className="mt-2 text-xs font-medium leading-6 text-neutral-500">{text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 md:px-8">
        <div className="overflow-hidden rounded-[2rem] bg-neutral-950 px-5 py-10 text-white md:px-8 md:py-12">
          <SectionIntro
            eyebrow="Why Our Products Stand Out"
            title={
              <>
                Technology + Innovation + <span className="text-[#ff7143]">Impact.</span>
              </>
            }
            text="We combine cutting-edge technology with strategic innovation to deliver products that make a measurable difference."
            light
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {standOutFeatures.map(([icon, title, text], index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-[#ff7143] text-xs font-black text-[#ff7143]">
                  {icon}
                </div>
                <p className="text-sm font-extrabold">{title}</p>
                <p className="mt-2 text-xs font-medium leading-6 text-white/70">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-8 md:py-10">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <SectionIntro
            eyebrow="Product Roadmap"
            title="What's Next?"
            text="We are continuously innovating to expand our product ecosystem and deliver more value to our customers."
          />
          <div className="relative mt-4">
            <div className="absolute left-0 right-0 top-8 hidden h-px border-t border-dashed border-neutral-200 md:block" />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {roadmapMilestones.map(([period, title, icon], index) => (
                <motion.div
                  key={period}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  className="relative text-center"
                >
                  <div className="relative z-10 mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-orange-100 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
                    <span className="text-xs font-extrabold text-[#ff7143]">{icon}</span>
                  </div>
                  <p className="text-sm font-extrabold uppercase tracking-wide text-[#ff7143]">{period}</p>
                  <p className="mt-2 text-sm font-semibold leading-6 text-neutral-700">{title}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 md:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="overflow-hidden rounded-[2rem] border border-neutral-100 bg-[#f3f3f3] shadow-[0_18px_50px_rgba(0,0,0,0.05)]"
        >
          <div className="grid lg:grid-cols-2 lg:items-stretch">
            <div className="relative min-h-[260px] overflow-hidden lg:min-h-[480px]">
              <Image
                src={collaborationImage}
                alt="Professional working on product strategy"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
            <div className="flex flex-col justify-center p-6 md:p-8 lg:p-10">
              <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.24em] text-[#ff7143]">Collaboration</p>
              <h2 className="text-3xl font-semibold leading-tight md:text-4xl">Have An Idea For The Next Big Thing?</h2>
              <p className="mt-4 max-w-xl text-sm font-medium leading-7 text-neutral-600 md:text-base">
                Let&apos;s turn your vision into a powerful product. Our team is ready to collaborate and build solutions
                that drive real impact.
              </p>
              <Link
                href="/Contactus"
                className="mt-6 inline-flex w-fit items-center justify-center gap-2 rounded-full bg-[#ff7143] px-5 py-3 text-xs font-extrabold uppercase tracking-wide text-white transition hover:bg-[#f15d2e]"
              >
                Discuss Your Idea -&gt;
              </Link>
              <div className="mt-8 border-t border-neutral-200 pt-6">
                <p className="mb-4 text-sm font-extrabold text-neutral-950">What We Offer</p>
                <div className="grid gap-2 sm:grid-cols-2">
                  {offerItems.map((item) => (
                    <p key={item} className="flex items-center gap-2 text-sm font-semibold text-neutral-700">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#ff7143] text-[0.6rem] text-[#ff7143]">
                        ✓
                      </span>
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
