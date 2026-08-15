"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  BarChart3,
  CircleDot,
  Cpu,
  Factory,
  GraduationCap,
  Heart,
  Home,
  LayoutGrid,
  Lightbulb,
  Shield,
  ShieldCheck,
  ShoppingBag,
  Sprout,
  Target,
  Truck,
  Users,
  Wallet,
} from "lucide-react";
import collaborationImage from "@/public/awt-brand/collaboration-idea.png";
import enterpriseTechImage from "@/public/awt-solutions/software-engineering-card.png";
import digitalTransformImage from "@/public/awt-solutions/digital-transformation-card.png";
import aiAutomationImage from "@/public/awt-solutions/ai-automation-card.png";
import cloudInfraImage from "@/public/awt-solutions/cloud-infrastructure-card.png";
import digitalExperienceImage from "@/public/awt-solutions/digital-growth-card.png";
import productInnovationImage from "@/public/awt-solutions/data-analytics-card.png";
import enterpriseStageImage from "@/public/awt-industries/manufacturing.png";
import smbStageImage from "@/public/awt-industries/retail.png";
import startupStageImage from "@/public/awt-industries/technology.png";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const trustedPartners = [
  { name: "Microsoft", logo: "/awt-brand/partners/microsoft.png", className: "h-10 md:h-11 max-w-[168px]" },
  { name: "AWS", logo: "/awt-brand/partners/aws.png", className: "h-10 md:h-11 max-w-[76px]" },
  { name: "Google Cloud", logo: "/awt-brand/partners/google-cloud.png", className: "h-11 md:h-12 max-w-[64px]" },
  { name: "Azure", logo: "/awt-brand/partners/azure.png", className: "h-10 md:h-11 max-w-[125px]" },
  { name: "Oracle", logo: "/awt-brand/partners/oracle.png", className: "h-9 md:h-10 max-w-[118px]" },
  { name: "SAP", logo: "/awt-brand/partners/sap.png", className: "h-10 md:h-11 max-w-[76px]" },
  { name: "Salesforce", logo: "/awt-brand/partners/salesforce.png", className: "h-11 md:h-12 max-w-[104px]" },
  { name: "MongoDB", logo: "/awt-brand/partners/mongodb.png", className: "h-10 md:h-11 max-w-[152px]" },
  { name: "React", logo: "/awt-brand/partners/react.png", className: "h-11 md:h-12 max-w-[132px]" },
  { name: "Node.js", logo: "/awt-brand/partners/nodejs.png", className: "h-10 md:h-11 max-w-[125px]" },
];

const transformationFeatures = [
  { icon: Target, title: "Strategic Thinking", text: "Vision-led technology roadmaps" },
  { icon: Lightbulb, title: "Engineering Excellence", text: "Scalable, secure delivery" },
  { icon: BarChart3, title: "Measurable Outcomes", text: "Results you can track" },
];

const transformationOverlayCards = [
  { title: "Product Strategy", text: "Turning ideas into impactful digital products." },
  { title: "MVP Development", text: "Building and validating solutions that accelerate growth." },
  { title: "Innovation Consulting", text: "Helping businesses innovate and stay ahead." },
];

const easeSmooth = [0.22, 1, 0.36, 1];

const imageReveal = {
  hidden: { opacity: 0, x: -48, scale: 0.96 },
  visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.75, ease: easeSmooth } },
};

const contentReveal = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.12 } },
};

const contentItem = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: easeSmooth } },
};

const overlayCardReveal = {
  hidden: { opacity: 0, x: -36, y: 16 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    y: 0,
    transition: { delay: 0.35 + i * 0.14, duration: 0.55, ease: easeSmooth },
  }),
};

const solutions = [
  {
    title: "Enterprise Technology Solutions",
    text: "Scalable enterprise applications, software platforms, portals, and digital ecosystems that support growth, efficiency, and long-term scalability.",
    image: enterpriseTechImage,
    href: "/Oursolution/Development/Softwaredev",
  },
  {
    title: "Digital Transformation Consulting",
    text: "Transformation roadmaps, modernization strategies, implementation frameworks, and measurable outcomes aligned to business objectives.",
    image: digitalTransformImage,
    href: "/Oursolution",
  },
  {
    title: "Artificial Intelligence & Automation",
    text: "Predictive analytics, intelligent workflows, process automation, and AI-powered decision support for smarter operations.",
    image: aiAutomationImage,
    href: "/angadi-ai",
  },
  {
    title: "Cloud & Infrastructure Modernization",
    text: "Secure, scalable, resilient, cloud-native environments that accelerate innovation while reducing operational complexity.",
    image: cloudInfraImage,
    href: "/Oursolution/Services/CloudConsultation",
  },
  {
    title: "Digital Experience Engineering",
    text: "Websites, mobile applications, customer engagement platforms, and commerce ecosystems designed around meaningful experiences.",
    image: digitalExperienceImage,
    href: "/Oursolution/Development/Websitedev",
  },
  {
    title: "Product Innovation & Engineering",
    text: "Product strategy, MVP development, platform engineering, launch support, and growth-focused product evolution.",
    image: productInnovationImage,
    href: "/Oursolution/Development/Softwaredev",
  },
];

const whyAwt = [
  {
    icon: LayoutGrid,
    title: "Experience That Evolves",
    text: "8+ years of delivering technology solutions across industries.",
  },
  {
    icon: CircleDot,
    title: "Partnership-Driven Approach",
    text: "We work as an extension of your team, aligned to your priorities.",
  },
  {
    icon: Lightbulb,
    title: "Innovation-Led Thinking",
    text: "Emerging technologies combined with practical execution.",
  },
  {
    icon: ShieldCheck,
    title: "End-to-End Execution",
    text: "Strategy, design, build, optimize, and support — we do it all.",
  },
  {
    icon: Sprout,
    title: "Continuous Improvement",
    text: "We evolve continuously to keep you ahead of what's next.",
  },
];

const stats = [
  { icon: Award, value: "8+", label: "Years of Experience" },
  { icon: Target, value: "120+", label: "Projects Delivered" },
  { icon: Users, value: "98%", label: "Client-Centric Focus" },
  { icon: Shield, value: "24/7", label: "Support & Delivery Operations" },
];

const stages = [
  {
    title: "Enterprise Organizations",
    text: "Digital transformation, enterprise modernization, AI adoption, cloud transformation, and intelligent automation.",
    href: "/Oursolution",
    image: enterpriseStageImage,
    imageLeft: true,
  },
  {
    title: "Small & Medium Businesses",
    text: "Technology enablement, digital presence, cloud adoption, process optimization, and growth-focused solutions.",
    href: "/Oursolution",
    image: smbStageImage,
    imageLeft: false,
  },
  {
    title: "Startups & Innovators",
    text: "Product strategy, MVP development, technology architecture, platform engineering, and innovation acceleration.",
    href: "/Products",
    image: startupStageImage,
    imageLeft: true,
  },
];

const industries = [
  { name: "Manufacturing", icon: Factory },
  { name: "Healthcare", icon: Heart },
  { name: "Education", icon: GraduationCap },
  { name: "Retail", icon: ShoppingBag },
  { name: "Financial Services", icon: Wallet },
  { name: "Real Estate", icon: Home },
  { name: "Logistics", icon: Truck },
  { name: "Technology", icon: Cpu },
];

const products = [
  {
    title: "SafeRide 360™",
    subtitle: "Workforce Safety Intelligence Platform",
    text: "Strengthen workforce safety, improve operational visibility, and support safer business operations.",
    href: "/Products/saferide-360",
    theme: "default",
  },
  {
    title: "Job Streamers™",
    subtitle: "AI Recruitment Intelligence Platform",
    text: "Transform talent acquisition through intelligent candidate matching and recruitment automation.",
    href: "/Products/job-streamers",
    theme: "purple",
  },
  {
    title: "VenueVo™",
    subtitle: "Intelligent Event Planning & Booking Platform",
    text: "Simplify venue discovery, vendor management, event planning, and bookings through smart automation.",
    href: "/Products/venuevo",
    theme: "default",
  },
];

const blogPosts = [
  {
    date: "May 12, 2025",
    title: "The Future of AI in Enterprise Transformation",
    image: aiAutomationImage,
    href: "/Blog",
  },
  {
    date: "May 08, 2025",
    title: "Cloud Modernization Strategies for Growing Businesses",
    image: cloudInfraImage,
    href: "/Blog",
  },
  {
    date: "April 24, 2025",
    title: "Building Secure Digital Experiences at Scale",
    image: digitalTransformImage,
    href: "/Blog",
  },
];

const certifications = [
  { type: "msme", title: "MSME", subtitle: "Registered" },
  { type: "gst", title: "GST", subtitle: "Registered" },
  { type: "startup", title: "Startup", subtitle: "India" },
  { type: "iso", title: "ISO", subtitle: "27001:2013" },
  { type: "cloud", title: "Cloud", subtitle: "Ready" },
  { type: "ssl", title: "SSL", subtitle: "Secured" },
  { type: "data", title: "Data Protection", subtitle: "Compliant" },
  { type: "enterprise", title: "Enterprise", subtitle: "Grade Security" },
];

function SectionEyebrow({ children, className = "" }) {
  return (
    <p className={`mb-2 text-xs font-extrabold uppercase tracking-[0.24em] text-[#ff7143] ${className}`}>
      {children}
    </p>
  );
}

function CertBadgeIcon({ type }) {
  const stroke = "#1a2b49";
  const common = { fill: "none", stroke, strokeWidth: 1.4, strokeLinecap: "round", strokeLinejoin: "round" };

  if (type === "msme") {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6 shrink-0" aria-hidden="true">
        <path {...common} d="M12 3 15 8h4l-3.5 3 1.5 5L12 14l-5 2 1.5-5L5 8h4z" />
        <path {...common} d="M9 11h6M10 14h4" />
      </svg>
    );
  }
  if (type === "gst") {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6 shrink-0" aria-hidden="true">
        <circle {...common} cx="12" cy="12" r="8" />
        <path {...common} d="M12 8v8M9.5 10.5h3a2 2 0 1 1 0 4h-3" />
      </svg>
    );
  }
  if (type === "startup") {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6 shrink-0" aria-hidden="true">
        <path {...common} d="M12 4 20 18H4z" />
        <path {...common} d="M12 9v5M10 13h4" />
      </svg>
    );
  }
  if (type === "iso") {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6 shrink-0" aria-hidden="true">
        <circle {...common} cx="12" cy="12" r="8" />
        <path {...common} d="M12 7v10M8.5 9.5 12 7l3.5 2.5M8.5 14.5 12 17l3.5-2.5" />
      </svg>
    );
  }
  if (type === "cloud") {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6 shrink-0" aria-hidden="true">
        <path {...common} d="M8 17h8a4 4 0 0 0 .5-8 5 5 0 0 0-9.3-1.5A3.5 3.5 0 0 0 8 17z" />
        <path {...common} d="M12 12v3M11 14h2" />
      </svg>
    );
  }
  if (type === "ssl") {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6 shrink-0" aria-hidden="true">
        <path {...common} d="M12 3 7 5v5c0 3 2.5 5.5 5 6 2.5-.5 5-3 5-6V5z" />
        <path {...common} d="M10 12h4M12 10v4" />
      </svg>
    );
  }
  if (type === "data") {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6 shrink-0" aria-hidden="true">
        <path {...common} d="M12 3 7 5v5c0 3 2.5 5.5 5 6 2.5-.5 5-3 5-6V5z" />
        <rect {...common} x="10" y="10" width="4" height="5" rx="0.5" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 shrink-0" aria-hidden="true">
      <path {...common} d="M12 3 7 5v5c0 3 2.5 5.5 5 6 2.5-.5 5-3 5-6V5z" />
      <rect {...common} x="10.5" y="11" width="3" height="4" rx="0.5" />
      <path {...common} d="M12 11v-1.5" />
    </svg>
  );
}

function LearnMoreLink({ href, children = "Learn More" }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-2 text-sm font-extrabold text-[#ff7143] transition hover:gap-3"
    >
      {children}
      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
    </Link>
  );
}

function OrangeButton({ href, children }) {
  return (
    <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.98 }} transition={{ type: "spring", stiffness: 400, damping: 22 }}>
      <Link
        href={href}
        className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#ff7143] px-6 py-3 text-xs font-extrabold uppercase tracking-wide text-white shadow-lg shadow-orange-200 transition-colors duration-300 hover:bg-[#f15d2e]"
      >
        {children}
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </Link>
    </motion.div>
  );
}

function SectionBlockHeader({ eyebrow, title, href, linkLabel }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55 }}
      className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
    >
      <div>
        <SectionEyebrow>{eyebrow}</SectionEyebrow>
        {title ? <h2 className="text-3xl font-semibold leading-tight md:text-4xl">{title}</h2> : null}
      </div>
      {href ? <LearnMoreLink href={href}>{linkLabel}</LearnMoreLink> : null}
    </motion.div>
  );
}

function WhyAboutButton({ href, children }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 rounded-lg border border-[#ff7143] bg-white px-5 py-2.5 text-sm font-semibold text-neutral-950 transition hover:bg-[#fff3ed]"
    >
      {children}
      <ArrowRight className="h-4 w-4 text-[#ff7143]" />
    </Link>
  );
}

export default function HomeEnterpriseContent() {
  return (
    <div className="bg-white text-neutral-950">
      {/* Trusted By */}
      <section className="py-4 md:py-5">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
          className="mx-auto max-w-7xl px-4 md:px-8"
        >
          <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.2em] text-neutral-800">
            Trusted By Businesses Worldwide
          </p>
          <div className="overflow-x-auto rounded-full border border-neutral-100 bg-[#f3f3f3] px-6 py-6 md:px-10 md:py-7">
            <div className="flex min-w-max items-center justify-center gap-8 md:min-w-0 md:justify-between md:gap-5 lg:gap-7">
              {trustedPartners.map((partner) => (
                <motion.div
                  key={partner.name}
                  whileHover={{ scale: 1.03 }}
                  className="flex h-11 shrink-0 items-center justify-center md:h-12"
                >
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={220}
                    height={56}
                    className={`w-auto object-contain object-center ${partner.className}`}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Toward Transformation */}
      <section className="overflow-hidden bg-[#f7f7f7] py-6 md:py-8">
        <div className="mx-auto grid max-w-7xl items-center gap-6 px-4 md:px-8 lg:grid-cols-2 lg:gap-8">
          <motion.div
            variants={imageReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="relative overflow-hidden rounded-[1.75rem] shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
          >
            <motion.div
              className="relative aspect-[4/3] w-full"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.6, ease: easeSmooth }}
            >
              <Image
                src={collaborationImage}
                alt="Business transformation meeting"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-transparent to-transparent" />
            </motion.div>

            <div className="absolute inset-y-0 left-0 z-10 hidden w-[58%] flex-col justify-center gap-2.5 p-4 sm:flex md:gap-3 md:p-5 lg:w-[52%]">
              {transformationOverlayCards.map((card, index) => (
                <motion.div
                  key={card.title}
                  custom={index}
                  variants={overlayCardReveal}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  whileHover={{ x: 6, scale: 1.02, transition: { duration: 0.25 } }}
                >
                  <motion.div
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 3.8 + index * 0.6, repeat: Infinity, ease: "easeInOut", delay: 1.2 + index * 0.4 }}
                    className="rounded-xl border border-white/70 bg-white/95 px-3.5 py-3 shadow-[0_8px_30px_rgba(0,0,0,0.12)] backdrop-blur-sm md:px-4 md:py-3.5"
                  >
                    <p className="text-xs font-extrabold text-neutral-950 md:text-sm">{card.title}</p>
                    <p className="mt-0.5 text-[10px] font-medium leading-5 text-neutral-500 md:text-xs md:leading-5">{card.text}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={contentReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <motion.div variants={contentItem}>
              <SectionEyebrow>Beyond Technology</SectionEyebrow>
            </motion.div>
            <motion.h2
              variants={contentItem}
              className="text-3xl font-semibold leading-tight text-neutral-950 md:text-5xl"
            >
              Toward{" "}
              <motion.span
                className="inline-block text-[#ff7143]"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.35, duration: 0.55, ease: easeSmooth }}
              >
                Transformation.
              </motion.span>
            </motion.h2>
            <motion.p variants={contentItem} className="mt-5 text-sm font-medium leading-8 text-neutral-600 md:text-base">
              Technology alone does not transform organizations. Vision does. At Angadi World Technologies, we combine
              strategic thinking, engineering excellence, and innovation-led execution to help organizations navigate
              complexity and unlock new opportunities for growth.
            </motion.p>
            <motion.p variants={contentItem} className="mt-4 text-sm font-medium leading-8 text-neutral-600 md:text-base">
              Creating technology that delivers measurable business outcomes.
            </motion.p>

            <div className="mt-4 flex flex-col gap-2 sm:hidden">
              {transformationOverlayCards.map((card, index) => (
                <motion.div
                  key={card.title}
                  custom={index}
                  variants={overlayCardReveal}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="rounded-xl border border-neutral-100 bg-white px-4 py-3 shadow-sm"
                >
                  <p className="text-sm font-extrabold text-neutral-950">{card.title}</p>
                  <p className="mt-0.5 text-xs font-medium leading-5 text-neutral-500">{card.text}</p>
                </motion.div>
              ))}
            </div>

            <motion.div variants={contentItem} className="mt-8 grid gap-5 sm:grid-cols-3">
              {transformationFeatures.map(({ icon: Icon, title, text }, index) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.45 + index * 0.1, duration: 0.5, ease: easeSmooth }}
                  whileHover={{ y: -4 }}
                  className="text-center sm:text-left"
                >
                  <motion.div
                    whileHover={{ scale: 1.08, rotate: 3 }}
                    transition={{ type: "spring", stiffness: 320, damping: 18 }}
                    className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-xl border border-orange-100 bg-white text-[#ff7143] shadow-sm sm:mx-0"
                  >
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </motion.div>
                  <p className="text-sm font-extrabold text-neutral-950">{title}</p>
                  <p className="mt-1 text-xs font-medium leading-6 text-neutral-500">{text}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={contentItem} className="mt-6">
              <OrangeButton href="/Oursolution">Explore Our Solutions</OrangeButton>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Technology Solutions */}
      <section className="py-6 md:py-8">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between"
          >
            <div>
              <SectionEyebrow>What We Deliver</SectionEyebrow>
              <h2 className="text-3xl font-semibold leading-tight md:text-4xl lg:text-5xl">
                Technology Solutions Designed for Growth.
              </h2>
            </div>
            <LearnMoreLink href="/Oursolution">View All Solutions</LearnMoreLink>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
          >
            {solutions.map((item) => (
              <motion.article
                key={item.title}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                className="group overflow-hidden rounded-2xl border border-neutral-100 bg-white shadow-[0_12px_40px_rgba(0,0,0,0.05)]"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-extrabold text-neutral-950">{item.title}</h3>
                  <p className="mt-3 text-sm font-medium leading-7 text-neutral-600">{item.text}</p>
                  <div className="mt-5">
                    <LearnMoreLink href={item.href} />
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Partner With AWT */}
      <section className="py-6 md:py-8">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid items-center gap-6 xl:grid-cols-[minmax(260px,30%)_1fr]">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55 }}
            >
              <SectionEyebrow>Why Organizations Partner With AWT</SectionEyebrow>
              <h2 className="text-2xl font-semibold leading-tight text-neutral-950 md:text-3xl lg:text-[2rem] lg:leading-[1.2]">
                Experience. Partnership. Innovation. Results.
              </h2>
              <p className="mt-4 text-sm font-medium leading-7 text-neutral-700 md:text-[0.95rem]">
                We partner with organizations to simplify complexity, accelerate innovation, and create lasting business
                impact.
              </p>
              <div className="mt-5">
                <WhyAboutButton href="/Aboutus">More About Us</WhyAboutButton>
              </div>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
            >
              {whyAwt.map(({ icon: Icon, title, text }) => (
                <motion.div
                  key={title}
                  variants={fadeUp}
                  whileHover={{ y: -3 }}
                  className="flex min-h-[190px] flex-col items-center rounded-xl bg-[#f5f5f5] px-3 py-5 text-center transition hover:shadow-sm"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center text-[#ff7143]">
                    <Icon className="h-7 w-7" strokeWidth={1.5} />
                  </div>
                  <p className="text-sm font-extrabold leading-5 text-neutral-950">{title}</p>
                  <p className="mt-2 text-xs font-medium leading-5 text-neutral-600">{text}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-6 grid gap-3 rounded-[1.75rem] bg-neutral-950 p-5 sm:grid-cols-2 lg:grid-cols-4 md:p-6"
          >
            {stats.map(({ icon: Icon, value, label }) => (
              <motion.div key={label} variants={fadeUp} className="flex items-center gap-4 text-white">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#ff7143]">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <div>
                  <p className="text-2xl font-black text-[#ff7143] md:text-3xl">{value}</p>
                  <p className="text-sm font-semibold text-white/80">{label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Solutions for Every Stage of Growth */}
      <section className="bg-[#fafafa] py-6 md:py-8">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            className="mb-6 text-center"
          >
            <SectionEyebrow>Solutions Designed for Every Stage of Growth</SectionEyebrow>
            <h2 className="mx-auto max-w-3xl text-3xl font-semibold leading-tight md:text-4xl">
              Flexible engagement models tailored to your business objectives.
            </h2>
          </motion.div>

          <div className="space-y-4">
            {stages.map((stage, index) => (
              <motion.div
                key={stage.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.06 }}
                whileHover={{ y: -4 }}
                className="overflow-hidden rounded-[1.75rem] border border-neutral-100 bg-white shadow-[0_12px_40px_rgba(0,0,0,0.05)]"
              >
                <div
                  className={`grid items-center lg:grid-cols-2 ${
                    stage.imageLeft ? "" : "lg:[&>*:first-child]:order-2"
                  }`}
                >
                  <div className="relative aspect-[16/11] min-h-[220px] lg:aspect-auto lg:min-h-[280px]">
                    <Image
                      src={stage.image}
                      alt={stage.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center p-6 md:p-8 lg:p-10">
                    <h3 className="text-2xl font-extrabold text-neutral-950">{stage.title}</h3>
                    <p className="mt-4 text-sm font-medium leading-8 text-neutral-600 md:text-base">{stage.text}</p>
                    <div className="mt-6">
                      <LearnMoreLink href={stage.href}>Explore Solutions</LearnMoreLink>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-6 md:py-8">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <SectionBlockHeader
            eyebrow="Industries We Serve"
            href="/Portfolio"
            linkLabel="View All Industries"
          />

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8"
          >
            {industries.map(({ name, icon: Icon }) => (
              <motion.div
                key={name}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                className="flex flex-col items-center rounded-2xl border border-neutral-100 bg-white px-2 py-5 text-center shadow-[0_12px_40px_rgba(0,0,0,0.05)] transition"
              >
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#fff3ed] text-[#ff7143]">
                  <Icon className="h-5 w-5" strokeWidth={1.6} />
                </div>
                <p className="text-xs font-extrabold leading-5 text-neutral-900">{name}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Innovation Platforms */}
      <section className="py-6 md:py-8">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <SectionBlockHeader
            eyebrow="Our Innovation Platforms"
            href="/Products"
            linkLabel="View All Products"
          />

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 gap-5 md:grid-cols-3"
          >
            {products.map((product) => (
              <motion.div
                key={product.title}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="flex h-full flex-col rounded-2xl border border-neutral-100 bg-white p-6 shadow-[0_12px_40px_rgba(0,0,0,0.05)]"
              >
                <h3
                  className={`text-lg font-extrabold leading-tight ${
                    product.theme === "purple" ? "text-[#2b285f]" : "text-neutral-950"
                  }`}
                >
                  {product.title}
                </h3>
                <p
                  className={`mt-2 text-sm font-extrabold ${
                    product.theme === "purple" ? "text-[#4a458a]" : "text-[#ff7143]"
                  }`}
                >
                  {product.subtitle}
                </p>
                <p
                  className={`mt-3 flex-1 text-sm font-medium leading-7 ${
                    product.theme === "purple" ? "text-[#4a458a]/90" : "text-neutral-600"
                  }`}
                >
                  {product.text}
                </p>
                <div className="mt-5">
                  <LearnMoreLink href={product.href} />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Latest Perspectives */}
      <section className="py-6 md:py-8">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <SectionBlockHeader
            eyebrow="Latest Perspectives"
            title="Latest Perspectives on Technology & Innovation"
            href="/Blog"
            linkLabel="View All Insights"
          />

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 gap-5 md:grid-cols-3"
          >
            {blogPosts.map((post) => (
              <motion.article
                key={post.title}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-100 bg-white shadow-[0_12px_40px_rgba(0,0,0,0.05)]"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-medium text-neutral-400">{post.date}</p>
                  <h3 className="mt-2 flex-1 text-lg font-extrabold leading-7 text-neutral-950">{post.title}</h3>
                  <div className="mt-4">
                    <LearnMoreLink href={post.href}>Read More</LearnMoreLink>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Describe Your Challenge */}
      <section className="py-6 md:py-8">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-[1.75rem] border border-[#ffd4bc]/40 bg-gradient-to-br from-[#fff3ed] via-[#fffaf7] to-white shadow-[0_12px_40px_rgba(255,113,67,0.08)]"
          >
            <div className="grid lg:grid-cols-[1fr_280px] lg:items-stretch">
              <div className="flex flex-col justify-center p-6 md:p-8 lg:p-10">
                <SectionEyebrow>Describe Your Challenge</SectionEyebrow>
                <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
                  Describe Your Challenge. Discover The Possibilities.
                </h2>
                <p className="mt-4 max-w-2xl text-sm font-medium leading-8 text-neutral-600 md:text-base">
                  Share your business challenge and our experts will help you explore the right technology path
                  forward.
                </p>
                <div className="mt-6">
                  <OrangeButton href="/Contactus">Get an Instant Solution</OrangeButton>
                </div>
                <div className="mt-6 flex items-center gap-2" aria-hidden="true">
                  <span className="h-2 w-2 rounded-full bg-[#ff7143]" />
                  <span className="h-2 w-2 rounded-full bg-neutral-300" />
                  <span className="h-2 w-2 rounded-full bg-neutral-300" />
                </div>
              </div>
              <div className="relative min-h-[240px] lg:min-h-full">
                <Image
                  src={collaborationImage}
                  alt="Professional consultant ready to help"
                  fill
                  sizes="280px"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certifications Bar */}
      <section className="py-4 md:py-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="mx-auto max-w-7xl px-4 md:px-8"
        >
          <div className="rounded-2xl bg-[#f5f6f8] px-4 py-4 md:px-6 md:py-5">
            <p className="mb-4 text-[0.65rem] font-extrabold uppercase tracking-[0.22em] text-[#ff7143]">
              Trusted, Certified, Compliant
            </p>
            <div className="flex flex-wrap items-center gap-y-4 md:flex-nowrap md:justify-between">
              {certifications.map((item, index) => (
                <div key={item.title} className="flex w-1/2 items-center pr-2 md:w-auto md:pr-0">
                  {index > 0 ? (
                    <span className="mx-3 hidden h-8 w-px shrink-0 bg-neutral-300 md:inline-block" aria-hidden="true" />
                  ) : null}
                  <CertBadgeIcon type={item.type} />
                  <div className="ml-2 min-w-0">
                    <p className="text-sm font-extrabold leading-tight text-[#1a2b49]">{item.title}</p>
                    <p className="text-xs font-medium leading-tight text-[#1a2b49]/75">{item.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
