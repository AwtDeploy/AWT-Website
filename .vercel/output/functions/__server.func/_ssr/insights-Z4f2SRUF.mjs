import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { N as CircleCheck, z as ArrowRight } from "../_libs/lucide-react.mjs";
import { E as hero_insights_default, c as FEATURED_SERIES, m as INSIGHT_TOPICS } from "./site-content-DsHU6E2-.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as SiteLayout, n as PageHero, r as SectionHeader, t as AnimatedWords } from "./AnimatedWords-DMZZW0wH.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/insights-Z4f2SRUF.js
var import_jsx_runtime = require_jsx_runtime();
function InsightsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			dark: true,
			eyebrow: "Insights",
			title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedWords, {
					text: "Where",
					className: "text-white",
					startDelay: .2
				}),
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedWords, {
					text: "Innovation",
					className: "text-white",
					startDelay: .2
				}),
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedWords, {
					text: "Meets",
					className: "text-white",
					startDelay: .2
				}),
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedWords, {
					text: "Perspective.",
					className: "text-brand",
					startDelay: .6
				})
			] }),
			subtitle: "",
			image: hero_insights_default,
			primary: {
				label: "Explore Insights",
				to: "/insights"
			},
			secondary: {
				label: "Subscribe to Insights",
				to: "/contact-us"
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-xl text-base leading-relaxed text-white/70",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedWords, {
					text: "Innovation is not just about technology. It is about how you think about the future.",
					startDelay: .8
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
					align: "center",
					eyebrow: "What You’ll Find Here",
					title: "Insights That Inspire Action."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
					children: INSIGHT_TOPICS.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "card-soft p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "icon-chip",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(t.icon, { className: "size-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-4 font-semibold text-ink",
								children: t.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-ink-soft",
								children: t.description
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-4 space-y-1.5 text-sm",
								children: t.bullets.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-2 text-ink",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "mt-1 size-3 text-brand" }), b]
								}, b))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/insights",
								className: "mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand",
								children: ["Explore Articles ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
							})
						]
					}, t.title))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section bg-surface",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
					align: "center",
					eyebrow: "Why Our Voice Matters",
					title: "Trusted Insights. Real Impact."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
					children: [
						["Real Implementation Case Studies", "Insights backed by real-world implementations and outcomes."],
						["Emerging Technology Analysis", "Deep analysis of technologies shaping tomorrow."],
						["Data-Driven Conclusions", "Research-backed insights with measurable impact."],
						["Practical Adoption Frameworks", "Actionable frameworks to help you adopt with confidence."]
					].map(([t, d]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl border border-border bg-white p-5 shadow-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-5 text-brand" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3 font-semibold text-ink",
								children: t
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-ink-soft",
								children: d
							})
						]
					}, t))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
					align: "center",
					eyebrow: "Featured Series",
					title: "Deep Dives. Curated for Leaders."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid gap-5 md:grid-cols-3",
					children: FEATURED_SERIES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-2xl border border-border bg-white p-6 shadow-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-lg font-bold text-ink",
								children: s.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-4 space-y-1.5 text-sm",
								children: s.bullets.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-2 text-ink-soft",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "mt-1 size-3 text-brand" }), b]
								}, b))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/insights",
								className: "mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand",
								children: ["Explore Series ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
							})
						]
					}, s.title))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-gradient-to-r from-brand to-brand-strong py-10 text-white",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page flex flex-col gap-4 md:flex-row md:items-center md:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-2xl font-bold",
					children: "Stay Ahead of Digital Disruption."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-white/85",
					children: "Monthly insights on AI, cloud, transformation, and innovation strategies."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "flex w-full max-w-md gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "email",
						required: true,
						placeholder: "Enter your email",
						className: "w-full rounded-lg border border-white/30 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-white/60"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "submit",
						className: "inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-brand",
						children: ["Subscribe ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
					})]
				})]
			})
		})
	] });
}
//#endregion
export { InsightsPage as component };
