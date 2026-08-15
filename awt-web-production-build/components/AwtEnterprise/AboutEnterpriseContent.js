"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import TechnologiesWeWorkWithSection from "./TechnologiesWeWorkWithSection";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const wordReveal = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

const softPulse = {
  scale: [1, 1.08, 1],
  opacity: [0.5, 0.85, 0.5],
};

const beliefs = [
  ["Innovation with Purpose", "Innovation should solve meaningful problems and create measurable value.", "IP"],
  ["Customer-Centric Thinking", "Success begins with understanding the people we serve.", "CC"],
  ["Excellence Through Execution", "Ideas become impactful only when executed effectively.", "EX"],
  ["Collaboration Creates Growth", "The best outcomes emerge when diverse expertise comes together.", "CG"],
  ["Continuous Learning", "Technology changes rapidly, and so must we.", "CL"],
  ["Long-Term Relationships", "Trust is built through consistency, transparency, and results.", "LR"],
];

const milestones = [
  ["2018", "Foundation of Angadi World Technologies"],
  ["2019", "Expanding digital capabilities"],
  ["2020", "Accelerating innovation"],
  ["2021", "Scaling technology solutions"],
  ["2022", "Building stronger partnerships"],
  ["2023", "Enterprise transformation focus"],
  ["2024", "Innovation platform development"],
  ["2025+", "Building the future"],
];

const missionItems = [
  "Strategic Consulting",
  "Technology Innovation",
  "Software Engineering",
  "Digital Transformation",
  "AI & Automation",
  "Product Development",
  "Collaborative Partnerships",
  "Continuous Learning",
];

const platforms = [
  {
    name: "SafeRide 360™",
    title: "Workforce Safety Intelligence Platform",
    text: "Helping organizations improve workforce safety, compliance, and operational visibility.",
  },
  {
    name: "Job Streamers™",
    title: "AI Recruitment Intelligence Platform",
    text: "Transforming hiring through intelligent matching, recruitment automation, and workforce analytics.",
  },
  {
    name: "VenueVo™",
    title: "Intelligent Event Planning & Booking Platform",
    text: "Simplifying venue discovery, planning, vendor management, and bookings through intelligent technology.",
  },
  {
    name: "Innovation Labs",
    title: "Future Opportunity Exploration",
    text: "Exploring AI, automation, enterprise platforms, analytics, and digital experience opportunities.",
  },
];

const clientValues = [
  "Strategic Thinking",
  "Technology Expertise",
  "Execution Excellence",
  "Collaborative Partnerships",
  "Business Understanding",
  "Innovation-Led Approach",
  "Long-Term Support",
  "Scalable Solutions",
];

const facts = [
  ["Established", "2018"],
  ["Core Focus", "Enterprise Technology & Digital Transformation"],
  ["Headquarters", "Hyderabad & Bangalore"],
  ["Innovation Platforms", "SafeRide 360™, Job Streamers™, VenueVo™"],
];

const expertise = [
  ["Software Engineering", "SE"],
  ["Artificial Intelligence", "AI"],
  ["Cloud Solutions", "CL"],
  ["Digital Transformation", "DX"],
  ["Product Innovation", "PI"],
  ["Technology Consulting", "TC"],
];

const aboutHeroWords = ["Impact", "Value", "Growth", "Progress", "Change"];

function OrangeButton({ href, children, outline = false, className = "" }) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full px-5 py-3 text-xs font-extrabold uppercase tracking-wide transition duration-300 ${
        outline
          ? "border border-neutral-300 bg-white text-neutral-900 hover:border-[#ff7143] hover:text-[#ff7143]"
          : "bg-[#ff7143] text-white shadow-lg shadow-orange-200 hover:-translate-y-1 hover:bg-[#f15d2e]"
      } ${className}`}
    >
      {children}
      <span className="shrink-0" aria-hidden="true">-&gt;</span>
    </Link>
  );
}

function SectionHeading({ eyebrow, title, text, light = false, align = "center" }) {
  const words = title.split(" ");

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55 }}
      className={`${align === "center" ? "mx-auto text-center" : ""} mb-8 max-w-3xl`}
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
      {text ? (
        <p className={`mt-4 text-sm font-medium leading-8 md:text-base ${light ? "text-white/70" : "text-neutral-600"}`}>
          {text}
        </p>
      ) : null}
    </motion.div>
  );
}

export default function AboutEnterpriseContent() {
  const [currentHeroWord, setCurrentHeroWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroWord((prevIndex) => (prevIndex + 1) % aboutHeroWords.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-[#fafafa] text-neutral-950">
      <section className="mx-auto max-w-7xl px-4 py-10 md:px-8 md:py-14">
        <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.24em] text-[#ff7143]">About AWT</p>
            <h1 className="text-3xl font-semibold leading-tight md:text-5xl lg:text-5xl">
              Building technology that creates <br />
              Meaningful{" "}
              <span className="relative inline-flex min-w-[8rem] text-[#ff7143] md:min-w-[13rem]">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={aboutHeroWords[currentHeroWord]}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.55 }}
                    className="inline-block"
                  >
                    {aboutHeroWords[currentHeroWord]}.
                  </motion.span>
                </AnimatePresence>
              </span>
            </h1>
            <p className="mt-5 text-base font-bold leading-8 text-neutral-800">
              Engineering Innovation. Enabling Transformation. Empowering Growth.
            </p>
            <motion.div
              animate={{ x: [0, 18, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="mt-7 h-2 w-44 rounded-full bg-gradient-to-r from-[#ff7143] via-orange-200 to-transparent"
            />
          </motion.div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative overflow-hidden rounded-[2rem] border border-neutral-100 bg-white p-6 shadow-[0_18px_50px_rgba(0,0,0,0.06)] md:p-10"
          >
            <motion.div
              animate={softPulse}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-orange-100"
            />
            <p className="text-sm font-medium leading-8 text-neutral-600 md:text-base">
              Since 2018, Angadi World Technologies has worked with businesses, startups, institutions, and enterprises to
              design, build, and scale digital solutions that drive transformation, improve efficiency, and create long-term value.
            </p>
            <p className="mt-4 text-sm font-medium leading-8 text-neutral-600 md:text-base">
              Today, AWT continues to evolve as an innovation-led technology company focused on helping organizations
              navigate an increasingly digital future.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <OrangeButton href="/Oursolution">Explore Our Solutions</OrangeButton>
              <OrangeButton href="/Contactus" outline>
                Talk to Our Team
              </OrangeButton>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 md:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[2rem] bg-neutral-950 p-7 text-white md:p-9 lg:col-span-1"
          >
            <motion.div
              animate={{ x: ["-30%", "120%"] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 h-full w-20 bg-gradient-to-r from-transparent via-white/10 to-transparent"
            />
            <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.24em] text-[#ff7143]">Our Story</p>
            <h2 className="text-3xl font-semibold leading-tight">Technology should be accessible, impactful, and aligned.</h2>
            <p className="mt-5 text-sm font-medium leading-8 text-white/70">
              What started as a technology services initiative has evolved into a growing ecosystem focused on enterprise
              technology, digital transformation, software engineering, artificial intelligence, and innovation platforms.
            </p>
          </motion.div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="rounded-[2rem] border border-neutral-100 bg-white p-7 shadow-[0_18px_45px_rgba(0,0,0,0.05)] md:p-9 lg:col-span-2"
          >
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <motion.span whileHover={{ rotate: 6, scale: 1.08 }} className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-sm font-black text-[#ff7143]">
                  VI
                </motion.span>
                <h3 className="text-2xl font-semibold">Our Vision</h3>
                <p className="mt-3 text-sm font-medium leading-7 text-neutral-600">
                  To become a trusted technology partner for organizations building the future, empowering them to
                  innovate faster, operate smarter, and create greater value.
                </p>
              </div>
              <div>
                <motion.span whileHover={{ rotate: -6, scale: 1.08 }} className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-sm font-black text-[#ff7143]">
                  MI
                </motion.span>
                <h3 className="text-2xl font-semibold">Our Mission</h3>
                <p className="mt-3 text-sm font-medium leading-7 text-neutral-600">
                  Transform ideas into intelligent digital solutions that support growth, innovation, efficiency, and
                  long-term success.
                </p>
              </div>
            </div>
            <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {missionItems.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.04 }}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-2 rounded-full bg-orange-50 px-4 py-3 text-xs font-extrabold text-neutral-800"
                >
                  <motion.span whileHover={{ scale: 1.25 }} className="text-[#ff7143]">✓</motion.span>
                  {item}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 md:px-8">
        <SectionHeading
          eyebrow="What We Believe"
          title="Technology Evolves. Principles Endure."
          text="The way we build, collaborate, and innovate is guided by beliefs that keep our work practical, purposeful, and outcome-focused."
        />
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-5 md:grid-cols-2 xl:grid-cols-3"
        >
          {beliefs.map(([title, text, icon]) => (
            <motion.div
              key={title}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              className="rounded-3xl border border-neutral-100 bg-white p-6 shadow-[0_18px_45px_rgba(0,0,0,0.05)]"
            >
              <motion.div whileHover={{ rotate: 6, scale: 1.08 }} className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-sm font-black text-[#ff7143]">
                {icon}
              </motion.div>
              <motion.h3 variants={wordReveal} className="text-lg font-black">{title}</motion.h3>
              <motion.p variants={wordReveal} className="mt-3 text-sm font-medium leading-7 text-neutral-600">{text}</motion.p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="bg-white py-10 md:py-14">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <SectionHeading
            eyebrow="The AWT Journey"
            title="Key Milestones"
            text="Our journey continues to be guided by curiosity, execution excellence, and a commitment to creating meaningful value through technology."
          />
          <div className="relative">
            <div className="absolute left-6 top-0 hidden h-full w-px bg-orange-100 md:left-1/2 md:block" />
            <div className="grid gap-5">
              {milestones.map(([year, title], index) => (
                <motion.div
                  key={year}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: index * 0.06, ease: "easeOut" }}
                  className={`relative flex ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"}`}
                >
                  <motion.div whileHover={{ y: -4 }} className="w-full rounded-3xl border border-neutral-100 bg-[#fafafa] p-5 shadow-sm md:w-[46%]">
                    <p className="text-3xl font-black text-[#ff7143]">{year}</p>
                    <p className="mt-2 font-extrabold text-neutral-950">{title}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 md:px-8">
        <div className="overflow-hidden rounded-[2rem] bg-[radial-gradient(circle_at_20%_20%,rgba(255,113,67,0.35),transparent_28%),linear-gradient(135deg,#0b0b0b,#191919)] p-7 text-white md:p-12">
          <div className="grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <SectionHeading
              eyebrow="Leadership Philosophy"
              title="Leadership Through Vision, Innovation & Execution."
              text="Strong organizations are built on clear vision, disciplined execution, and a willingness to embrace change. At AWT, leadership creates an environment where innovation thrives and technology serves meaningful objectives."
              light
              align="left"
            />
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid auto-rows-auto grid-cols-1 items-start gap-3 sm:grid-cols-2 sm:gap-3.5"
            >
              {["Clear Vision", "Disciplined Execution", "Collaborative Teams", "Meaningful Business Objectives"].map((item) => (
                <motion.div
                  key={item}
                  variants={fadeUp}
                  whileHover={{ y: -2, borderColor: "rgba(255,255,255,0.2)" }}
                  className="flex w-full items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 sm:px-4 sm:py-4"
                >
                  <motion.span
                    whileHover={{ scale: 1.12, rotate: 8 }}
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#ff7143] text-xs font-black text-white"
                  >
                    ✓
                  </motion.span>
                  <p className="text-sm font-extrabold leading-snug text-white sm:text-[0.95rem]">{item}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <TechnologiesWeWorkWithSection />

      <section className="mx-auto max-w-7xl px-4 py-10 md:px-8">
        <SectionHeading
          eyebrow="Innovation Beyond Services"
          title="Building Intelligent Platforms"
          text="Technology services remain a critical part of our business. Innovation remains a core pillar of our future."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {platforms.map((platform, index) => (
            <motion.div
              key={platform.name}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="relative overflow-hidden rounded-[2rem] border border-neutral-100 bg-white p-6 shadow-[0_18px_45px_rgba(0,0,0,0.05)]"
            >
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3 + index * 0.2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute right-5 top-5 h-10 w-10 rounded-full bg-orange-50"
              />
              <p className="text-xl font-black text-neutral-950">{platform.name}</p>
              <p className="mt-2 text-sm font-extrabold text-[#ff7143]">{platform.title}</p>
              <p className="mt-4 text-sm font-medium leading-7 text-neutral-600">{platform.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 md:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-[2rem] border border-neutral-100 bg-white p-7 shadow-[0_18px_45px_rgba(0,0,0,0.05)] md:p-9"
          >
            <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.24em] text-[#ff7143]">Why Organizations Choose AWT</p>
            <h2 className="text-3xl font-semibold leading-tight">A partner for challenges, solutions, and outcomes.</h2>
            <p className="mt-4 text-sm font-medium leading-8 text-neutral-600">
              Organizations choose AWT because they require more than implementation support. They need a partner capable
              of understanding challenges, designing solutions, and delivering measurable outcomes.
            </p>
          </motion.div>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-3 sm:grid-cols-2"
          >
            {clientValues.map((item) => (
              <motion.div key={item} variants={fadeUp} className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm">
                <motion.span whileHover={{ scale: 1.25 }} className="text-[#ff7143]">✓</motion.span>
                <p className="text-sm font-extrabold">{item}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-10 md:py-14">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <SectionHeading
            eyebrow="Looking Ahead"
            title="Build Meaningful Solutions. Create Lasting Value."
            text="The future will be shaped by intelligent technologies, connected ecosystems, and organizations willing to embrace change."
          />
          <div className="grid gap-5 lg:grid-cols-2 lg:items-start">
            <div className="flex h-fit flex-col rounded-[2rem] bg-neutral-950 p-6 text-white md:p-8">
              <h3 className="text-2xl font-semibold leading-tight md:text-3xl">Let&apos;s Build What&apos;s Next.</h3>
              <p className="mt-4 text-sm font-medium leading-7 text-white/70">
                Whether you are modernizing operations, developing digital products, exploring AI opportunities, or
                seeking a strategic technology partner, AWT is ready to support your journey.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <OrangeButton href="/Oursolution" className="w-full px-4 py-3 text-[11px] sm:text-xs">
                  Explore Our Solutions
                </OrangeButton>
                <OrangeButton href="/ScheduleConsultation" outline className="w-full px-4 py-3 text-[11px] sm:text-xs">
                  Schedule a Consultation
                </OrangeButton>
              </div>
            </div>
            <div className="rounded-[2rem] border border-orange-100 bg-orange-50 p-7 md:p-10">
              <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#ff7143]">Company Facts</p>
              <div className="mt-5 grid gap-3">
                {facts.map(([label, value]) => (
                  <motion.div key={label} whileHover={{ x: 4 }} className="rounded-2xl bg-white p-4">
                    <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-neutral-400">{label}</p>
                    <p className="mt-1 font-black text-neutral-950">{value}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {expertise.map(([item, icon]) => (
              <motion.div key={item} whileHover={{ y: -4 }} className="flex items-center gap-3 rounded-2xl border border-neutral-100 bg-[#fafafa] p-4">
                <motion.span whileHover={{ rotate: 8 }} className="flex h-8 w-8 items-center justify-center rounded-xl bg-orange-50 text-xs font-black text-[#ff7143]">
                  {icon}
                </motion.span>
                <p className="text-sm font-extrabold">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 md:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="rounded-[2rem] border border-neutral-100 bg-white p-8 text-center shadow-[0_18px_50px_rgba(0,0,0,0.06)] md:p-12"
        >
          <p className="mx-auto max-w-4xl text-2xl font-black leading-snug md:text-4xl">
            &quot;Technology is most powerful when it enables people, accelerates innovation, and creates meaningful impact.&quot;
          </p>
          <p className="mt-5 text-sm font-extrabold uppercase tracking-[0.2em] text-[#ff7143]">Angadi World Technologies</p>
        </motion.div>
      </section>
    </div>
  );
}
