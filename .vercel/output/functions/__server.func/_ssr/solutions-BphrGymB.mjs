import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { z as ArrowRight } from "../_libs/lucide-react.mjs";
import { C as TECHNOLOGIES, D as hero_solutions_default, S as SOLUTION_PILLARS, r as APPROACH_STEPS } from "./site-content-DsHU6E2-.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as SiteLayout, n as PageHero, r as SectionHeader, t as AnimatedWords } from "./AnimatedWords-DMZZW0wH.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/solutions-BphrGymB.js
var import_jsx_runtime = require_jsx_runtime();
function SolutionsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			dark: true,
			eyebrow: "Our Solutions",
			title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedWords, {
					text: "Solutions",
					className: "text-white",
					startDelay: .2
				}),
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedWords, {
					text: "that",
					className: "text-white",
					startDelay: .2
				}),
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedWords, {
					text: "Power",
					className: "text-white",
					startDelay: .2
				}),
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedWords, {
					text: "Intelligent",
					className: "text-brand",
					startDelay: .6
				}),
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedWords, {
					text: "Enterprises.",
					className: "text-brand",
					startDelay: .6
				})
			] }),
			subtitle: "",
			image: hero_solutions_default,
			primary: {
				label: "Talk to Our Experts",
				to: "/contact-us"
			},
			secondary: {
				label: "Explore All Solutions",
				to: "/solutions"
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-xl text-base leading-relaxed text-white/70",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedWords, {
					text: "End-to-end technology solutions that help businesses modernize, automate, and scale with confidence. From strategy to execution, we engineer solutions that create real business impact.",
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
					eyebrow: "Our Solutions",
					title: "Comprehensive. Scalable. Future-Ready.",
					description: "We combine deep technical expertise with industry knowledge to deliver solutions that solve today’s challenges and prepare for tomorrow’s opportunities."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
					children: SOLUTION_PILLARS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "card-soft p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "icon-chip",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "size-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-4 font-semibold text-ink",
								children: s.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1.5 text-sm text-ink-soft",
								children: s.description
							})
						]
					}, s.title))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section bg-surface",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page grid gap-8 lg:grid-cols-[1fr_2fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "Our Approach"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-2 text-3xl font-bold text-ink",
						children: [
							"A Proven Framework ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"for Enterprise Success"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-ink-soft",
						children: "We follow a collaborative and agile approach to deliver solutions aligned with your business goals."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-5",
					children: APPROACH_STEPS.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl border border-border bg-white p-4 text-center shadow-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "icon-chip mx-auto",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "size-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-3 text-xs font-semibold text-brand",
								children: ["0", i + 1]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-semibold text-ink",
								children: s.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-ink-soft",
								children: s.description
							})
						]
					}, s.title))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page grid gap-10 lg:grid-cols-[1fr_2fr] lg:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
					eyebrow: "Technologies We Work With",
					title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						"Modern Technologies. ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"Maximum Impact."
					] })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6",
					children: TECHNOLOGIES.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "rounded-xl border border-border bg-white px-3 py-4 text-center text-sm font-semibold text-ink",
						children: t
					}, t))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTAStrip, {})
	] });
}
function CTAStrip() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-gradient-to-r from-brand to-brand-strong py-10 text-white",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page flex flex-col items-start justify-between gap-4 md:flex-row md:items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "text-2xl font-bold",
				children: "Let’s Build Solutions That Drive Your Business Forward."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-white/85",
				children: "Share your challenge with us and our experts will craft a solution tailored to your needs."
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/contact-us",
				className: "inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 font-semibold text-brand",
				children: ["Describe Your Problem ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
			})]
		})
	});
}
//#endregion
export { SolutionsPage as component };
