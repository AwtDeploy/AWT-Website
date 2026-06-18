import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { z as ArrowRight } from "../_libs/lucide-react.mjs";
import { a as CAREER_BENEFITS, h as JOBS } from "./site-content-DsHU6E2-.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as SiteLayout, n as PageHero, r as SectionHeader, t as AnimatedWords } from "./AnimatedWords-DMZZW0wH.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/careers-D0vyv8W4.js
var import_jsx_runtime = require_jsx_runtime();
var hero_careers_default = "/assets/hero-careers-jlYeVnee.jpg";
function CareersPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			dark: true,
			eyebrow: "Careers",
			title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedWords, {
					text: "Build",
					className: "text-white",
					startDelay: .2
				}),
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedWords, {
					text: "Your",
					className: "text-white",
					startDelay: .2
				}),
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedWords, {
					text: "Future.",
					className: "text-white",
					startDelay: .2
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedWords, {
					text: "Build",
					className: "text-brand",
					startDelay: .6
				}),
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedWords, {
					text: "What",
					className: "text-brand",
					startDelay: .6
				}),
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedWords, {
					text: "Matters.",
					className: "text-brand",
					startDelay: .6
				})
			] }),
			subtitle: "",
			image: hero_careers_default,
			primary: {
				label: "Explore Opportunities",
				to: "/careers"
			},
			secondary: {
				label: "Life at AWT",
				to: "/about-us"
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-xl text-base leading-relaxed text-white/70",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedWords, {
					text: "At AWT, we build people, ideas, and the future. Be part of a team that is innovating today for a better tomorrow.",
					startDelay: 1
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
					align: "center",
					eyebrow: "Why AWT",
					title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Why Build Your ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-brand",
						children: "Career at AWT?"
					})] })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
					children: CAREER_BENEFITS.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "card-soft p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "icon-chip",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(b.icon, { className: "size-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-4 font-semibold text-ink",
								children: b.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1.5 text-sm text-ink-soft",
								children: b.description
							})
						]
					}, b.title))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-surface py-14",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
					align: "center",
					eyebrow: "Explore Opportunities",
					title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Find the Role That ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-brand",
						children: "Fits You."
					})] })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 overflow-hidden rounded-2xl border border-border bg-white",
					children: JOBS.map((j, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `grid items-center gap-3 p-4 md:grid-cols-5 ${i ? "border-t border-border" : ""}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-semibold text-ink md:col-span-2",
								children: j.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-sm text-ink-soft",
								children: j.department
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-sm text-ink-soft",
								children: j.location
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/contact-us",
								className: "inline-flex items-center gap-2 text-sm font-semibold text-brand",
								children: ["Apply Now ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
							})
						]
					}, j.title))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section bg-surface",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page grid gap-6 lg:grid-cols-[2fr_1fr] lg:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "Don’t see the right role?"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-2 text-3xl font-bold text-ink",
						children: ["We’re Always Looking for ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-brand",
							children: "Great Minds."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-ink-soft",
						children: "Share your profile with us and we will reach out when the right opportunity comes along."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "flex flex-col gap-2 sm:flex-row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "email",
						placeholder: "Enter your email",
						className: "w-full rounded-lg border border-border bg-white px-4 py-3 text-sm text-ink placeholder:text-ink-soft focus:outline-none focus:ring-2 focus:ring-brand/30"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						className: "inline-flex items-center gap-2 rounded-lg bg-brand px-5 py-3 text-sm font-semibold text-white hover:bg-brand-strong",
						children: ["Submit Profile ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
					})]
				})]
			})
		})
	] });
}
//#endregion
export { CareersPage as component };
