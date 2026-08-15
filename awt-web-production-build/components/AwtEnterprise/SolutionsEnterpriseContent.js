"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import digitalTransformationImage from "@/public/awt-solutions/digital-transformation-card.png";
import softwareEngineeringImage from "@/public/awt-solutions/software-engineering-card.png";
import aiAutomationImage from "@/public/awt-solutions/ai-automation-card.png";
import cloudInfrastructureImage from "@/public/awt-solutions/cloud-infrastructure-card.png";
import cyberSecurityImage from "@/public/awt-solutions/cyber-security-card.png";
import dataAnalyticsImage from "@/public/awt-solutions/data-analytics-card.png";
import managedServicesImage from "@/public/awt-solutions/managed-services-card.png";
import digitalGrowthImage from "@/public/awt-solutions/digital-growth-card.png";
import saferideImage from "@/public/awt-platforms/saferide-360.png";
import jobStreamersImage from "@/public/awt-platforms/job-streamers.png";
import venueVoImage from "@/public/awt-platforms/venuevo.png";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const wordReveal = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

const solutionAreas = [
  {
    title: "Digital Transformation",
    tag: "DX",
    text: "Modernize organizations through digital strategy, enterprise modernization, customer experience transformation, and innovation programs.",
    points: ["Business Process Modernization", "Enterprise Digitization", "Legacy System Transformation", "Workflow Optimization", "Customer Experience", "Change Enablement"],
    theme: "from-cyan-500/30",
    image: digitalTransformationImage,
  },
  {
    title: "Software Engineering",
    tag: "SE",
    text: "Build intelligent digital foundations through enterprise applications, custom software, SaaS platforms, portals, APIs, and integrations.",
    points: ["Custom Software Development", "SaaS Platforms", "Mobile Applications", "Enterprise Applications", "Web Applications", "API Development"],
    theme: "from-blue-500/30",
    image: softwareEngineeringImage,
  },
  {
    title: "AI & Automation",
    tag: "AI",
    text: "Bring intelligence into operations through machine learning, intelligent workflows, predictive analytics, and generative AI applications.",
    points: ["AI Solutions", "Predictive Analytics", "AI Assistants", "Intelligent Automation", "Generative AI Integration", "Machine Learning Models"],
    theme: "from-violet-500/30",
    image: aiAutomationImage,
  },
  {
    title: "Cloud & Infrastructure",
    tag: "CL",
    text: "Create secure, resilient, and scalable cloud ecosystems that support innovation, speed, reliability, and long-term growth.",
    points: ["Cloud Migration", "DevOps", "Containerization", "Cloud Architecture", "Infrastructure Optimization", "Monitoring & Reliability"],
    theme: "from-sky-500/30",
    image: cloudInfrastructureImage,
  },
  {
    title: "Cyber Security",
    tag: "CS",
    text: "Protect data, systems, and business operations through proactive security strategy, governance, compliance, and resilience frameworks.",
    points: ["Security Assessments", "Compliance Support", "Identity Management", "Threat Monitoring", "Vulnerability Management", "Security Best Practices"],
    theme: "from-slate-500/30",
    image: cyberSecurityImage,
  },
  {
    title: "Data & Analytics",
    tag: "DA",
    text: "Turn data into strategic intelligence through BI dashboards, predictive insights, reporting systems, and analytics platforms.",
    points: ["Business Intelligence", "Dashboard Development", "Predictive Insights", "Data Engineering", "Reporting Systems", "Performance Analytics"],
    theme: "from-purple-500/30",
    image: dataAnalyticsImage,
  },
  {
    title: "Managed Services",
    tag: "MS",
    text: "Support technology beyond deployment through application support, cloud operations, monitoring, optimization, and continuous improvement.",
    points: ["Application Support", "Monitoring Services", "Performance Optimization", "Infrastructure Management", "Incident Response", "Continuous Improvement"],
    theme: "from-emerald-500/30",
    image: managedServicesImage,
  },
  {
    title: "Digital Marketing & Growth",
    tag: "DG",
    text: "Accelerate visibility, engagement, lead generation, and growth through SEO, performance marketing, content, and analytics.",
    points: ["SEO", "Social Media Marketing", "Lead Generation", "Performance Marketing", "Content Strategy", "Conversion Optimization"],
    theme: "from-orange-500/30",
    image: digitalGrowthImage,
  },
];

const framework = [
  ["Discover", "Understand business objectives, challenges, opportunities, and transformation priorities."],
  ["Design", "Create solution architectures, transformation roadmaps, and implementation strategies."],
  ["Develop", "Build secure, scalable, and future-ready technology solutions."],
  ["Deploy", "Implement, integrate, test, and launch solutions with confidence."],
  ["Drive", "Continuously optimize, improve, and scale technology investments."],
];

const industries = [
  "Manufacturing",
  "Healthcare",
  "Retail & Ecommerce",
  "Education",
  "Financial Services",
  "Technology & SaaS",
  "Logistics & Transportation",
  "Real Estate & Construction",
  "Government & Public Sector",
];

const outcomes = [
  "Improved Operational Efficiency",
  "Enhanced Customer Experiences",
  "Greater Business Agility",
  "Better Decision-Making",
  "Reduced Manual Processes",
  "Increased Scalability",
  "Lower Operational Complexity",
  "Long-Term Competitive Advantage",
];

const products = [
  {
    title: "SafeRide 360™",
    text: "Workforce safety intelligence platform supporting visibility, compliance, and emergency response.",
    image: saferideImage,
  },
  {
    title: "Job Streamers™",
    text: "AI recruitment intelligence platform for smarter hiring, matching, analytics, and engagement.",
    image: jobStreamersImage,
  },
  {
    title: "VenueVo™",
    text: "Intelligent event planning and booking platform for venue discovery, vendors, budgets, and bookings.",
    image: venueVoImage,
  },
];

const impactStats = [
  ["120+", "Projects Delivered"],
  ["98%", "Client-Centric Delivery"],
  ["10+", "Industries Served"],
  ["50+", "Happy Clients"],
  ["24/7", "Support Availability"],
];

const solutionsHeroWords = ["Advantage", "Growth", "Momentum", "Edge", "Success"];

function SectionTitle({ eyebrow, title, text, light = false }) {
  const words = title.split(" ");

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55 }}
      className="mx-auto mb-8 max-w-3xl text-center"
    >
      <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.24em] text-[#ff7143]">{eyebrow}</p>
      <motion.h2
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.65 }}
        className={`text-3xl font-semibold leading-tight md:text-5xl ${light ? "text-white" : "text-neutral-950"}`}
      >
        {words.map((word, index) => (
          <motion.span key={`${word}-${index}`} variants={wordReveal} transition={{ duration: 0.45 }} className="mr-2 inline-block">
            {word}
          </motion.span>
        ))}
      </motion.h2>
      {text ? <p className={`mt-4 text-sm font-medium leading-7 md:text-base ${light ? "text-white/70" : "text-neutral-600"}`}>{text}</p> : null}
    </motion.div>
  );
}

function OrangeButton({ href, children, outline = false }) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-xs font-extrabold uppercase tracking-wide transition duration-300 ${
        outline
          ? "border border-neutral-300 bg-white text-neutral-950 hover:border-[#ff7143] hover:text-[#ff7143]"
          : "bg-[#ff7143] text-white shadow-lg shadow-orange-200 hover:-translate-y-1 hover:bg-[#f15d2e]"
      }`}
    >
      {children}
      <span aria-hidden="true">-&gt;</span>
    </Link>
  );
}

function SolutionIllustration({ item }) {
  return (
    <div className="relative h-44 overflow-hidden rounded-3xl bg-neutral-950 text-white">
      <Image
        src={item.image}
        alt={`${item.title} illustration`}
        fill
        sizes="(max-width: 768px) 100vw, 25vw"
        className="object-cover object-center transition duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
      <motion.div
        animate={{ y: [0, -10, 0], opacity: [0.65, 0.95, 0.65] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className={`absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gradient-to-br ${item.theme} to-transparent blur-xl`}
      />
      <div className="relative z-10 flex h-full flex-col justify-between p-5">
        <div className="flex items-center justify-between">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-sm font-black text-[#ff7143]">{item.tag}</span>
          <motion.span
            animate={{ rotate: [0, 12, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="h-3 w-3 rounded-full bg-[#ff7143]"
          />
        </div>
      </div>
    </div>
  );
}

function SolutionCard({ item, index }) {
  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: index * 0.04 }}
      whileHover={{ y: -8, scale: 1.01 }}
      className="group overflow-hidden rounded-[2rem] border border-neutral-100 bg-white shadow-[0_18px_50px_rgba(0,0,0,0.06)]"
    >
      <SolutionIllustration item={item} />
      <div className="p-6">
        <p className="mb-2 text-xs font-extrabold uppercase tracking-[0.2em] text-[#ff7143]">
          {String(index + 1).padStart(2, "0")}
        </p>
        <h3 className="text-xl font-black text-neutral-950">{item.title}</h3>
        <p className="mt-3 text-sm font-medium leading-7 text-neutral-600">{item.text}</p>
        <div className="mt-5 grid gap-2">
          {item.points.map((point) => (
            <p key={point} className="flex items-center gap-2 text-sm font-semibold text-neutral-700">
              <span className="text-[#ff7143]">✓</span>
              {point}
            </p>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export default function SolutionsEnterpriseContent() {
  const [currentHeroWord, setCurrentHeroWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroWord((prevIndex) => (prevIndex + 1) % solutionsHeroWords.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="w-full bg-[#fafafa] text-neutral-950">
      <section className="mx-auto max-w-7xl px-4 py-10 md:px-8 md:py-14">
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_1fr]">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.24em] text-[#ff7143]">Enterprise Technology Solutions</p>
            <h1 className="text-3xl font-semibold leading-tight md:text-5xl lg:text-5xl">
              Transforming challenges into <br />
              Competitive{" "}
              <span className="relative inline-flex min-w-[8rem] text-[#ff7143] md:min-w-[14rem]">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={solutionsHeroWords[currentHeroWord]}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.55 }}
                    className="inline-block"
                  >
                    {solutionsHeroWords[currentHeroWord]}.
                  </motion.span>
                </AnimatePresence>
              </span>
            </h1>
            <p className="mt-5 max-w-2xl text-sm font-semibold leading-8 text-neutral-600 md:text-base">
              Technology has become the foundation of growth, innovation, customer experience, operational efficiency, and
              long-term competitiveness. AWT helps organizations navigate complexity and create measurable business value.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <OrangeButton href="/Contactus">Talk to a Consultant</OrangeButton>
              <OrangeButton href="/Contactus" outline>Describe Your Challenge</OrangeButton>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="relative overflow-hidden rounded-[2rem] border border-neutral-100 bg-white p-6 shadow-[0_18px_50px_rgba(0,0,0,0.06)] md:p-8"
          >
            <motion.div
              animate={{ scale: [1, 1.08, 1], opacity: [0.55, 0.9, 0.55] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-orange-100"
            />
            <p className="text-lg font-black">Technology That Creates Business Value</p>
            <p className="mt-4 text-sm font-medium leading-8 text-neutral-600">
              Our solutions help organizations improve efficiency, strengthen decision-making, accelerate innovation,
              enhance customer experiences, and create sustainable growth.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {["Accelerate Transformation", "Modernize Systems", "Leverage AI", "Strengthen Security", "Improve Experiences", "Enable Data Decisions"].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                  className="rounded-2xl bg-orange-50 px-4 py-3 text-sm font-extrabold"
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 md:px-8">
        <SectionTitle
          eyebrow="Our Approach"
          title="Our Approach To Successful Outcomes"
          text="A proven methodology that connects clarity, strategy, engineering, launch discipline, and continuous optimization."
        />
        <div className="grid gap-4 md:grid-cols-5">
          {framework.map(([title, text], index) => (
            <motion.div
              key={title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="rounded-3xl border border-neutral-100 bg-white p-5 shadow-sm"
            >
              <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 2.4 + index * 0.15, repeat: Infinity, ease: "easeInOut" }} className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-neutral-950 text-sm font-black text-[#ff7143]">
                {index + 1}
              </motion.div>
              <h3 className="font-black">{title}</h3>
              <p className="mt-2 text-xs font-medium leading-6 text-neutral-600">{text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 md:px-8">
        <SectionTitle
          eyebrow="Solution Ecosystem"
          title="Comprehensive Technology Solutions for Modern Organizations"
          text="Eight focused solution areas designed to help enterprises, growing businesses, startups, and institutions create future-ready digital ecosystems."
        />
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-6 grid gap-3 md:grid-cols-4 lg:grid-cols-8"
        >
          {solutionAreas.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-orange-100 bg-white p-4 text-center shadow-sm"
            >
              <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-xs font-black text-[#ff7143]">
                {item.tag}
              </span>
              <p className="mt-3 text-xs font-extrabold leading-5">{item.title}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {solutionAreas.map((item, index) => (
            <SolutionCard key={item.title} item={item} index={index} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 md:px-8">
        <div className="overflow-hidden rounded-[2rem] bg-neutral-950 p-7 text-white md:p-10">
          <SectionTitle
            eyebrow="Why AWT"
            title="Technology Excellence. Business Outcomes."
            text="The real value comes from combining strategy, innovation, execution, and long-term partnership."
            light
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {["Business-First Thinking", "Technology Expertise", "Innovation-Led Approach", "Outcome-Oriented Execution"].map((item, index) => (
              <motion.div key={item} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.45, delay: index * 0.05 }} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <span className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#ff7143] text-xs font-black">✓</span>
                <p className="font-extrabold">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 md:px-8">
        <SectionTitle
          eyebrow="Enterprise Outcomes"
          title="Technology Excellence. Business Outcomes."
          text="Our solutions are designed to create outcomes leaders can measure and teams can sustain."
        />
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4"
        >
          {outcomes.map((item) => (
            <motion.div
              key={item}
              variants={fadeUp}
              whileHover={{ x: 5 }}
              className="flex items-center gap-3 rounded-2xl border border-neutral-100 bg-white p-4 text-sm font-extrabold shadow-sm"
            >
              <span className="text-[#ff7143]">✓</span>
              {item}
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 md:px-8">
        <SectionTitle
          eyebrow="Industries We Support"
          title="Solutions Designed Around Industry Challenges"
          text="Every industry faces unique challenges. Our solutions are designed to address industry-specific opportunities while supporting long-term growth."
        />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, index) => (
            <motion.div
              key={industry}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.38, delay: index * 0.03 }}
              whileHover={{ x: 5 }}
              className="flex items-center gap-3 rounded-2xl border border-neutral-100 bg-white p-4 text-sm font-extrabold shadow-sm"
            >
              <span className="text-[#ff7143]">✓</span>
              {industry}
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 md:px-8">
        <SectionTitle
          eyebrow="Innovation Beyond Services"
          title="Building The Future Through Innovation"
          text="Alongside enterprise solutions, AWT is actively building innovation platforms designed to solve emerging business challenges."
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {products.map((product, index) => (
            <motion.article
              key={product.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              whileHover={{ y: -8, scale: 1.01 }}
              className="group overflow-hidden rounded-[2rem] border border-neutral-100 bg-white shadow-[0_18px_50px_rgba(0,0,0,0.06)]"
            >
              <div className="relative h-40 overflow-hidden bg-neutral-950">
                <Image
                  src={product.image}
                  alt={`${product.title} platform preview`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <h3 className="absolute bottom-4 left-5 text-2xl font-black text-white">{product.title}</h3>
              </div>
              <div className="p-5">
                <p className="text-sm font-medium leading-7 text-neutral-600">{product.text}</p>
                <Link href="/Products" className="mt-4 inline-flex text-xs font-extrabold uppercase tracking-wide text-[#ff7143]">
                  Explore Platform -&gt;
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 md:px-8">
        <div className="rounded-[2rem] border border-orange-100 bg-orange-50/70 p-6 md:p-8">
          <p className="mb-5 text-xs font-extrabold uppercase tracking-[0.24em] text-[#ff7143]">Customer Impact</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {impactStats.map(([value, label], index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="rounded-3xl bg-white p-5 text-center shadow-sm"
              >
                <p className="text-3xl font-black text-[#ff7143]">{value}</p>
                <p className="mt-2 text-xs font-extrabold uppercase tracking-wide text-neutral-600">{label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
