import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { N as CircleCheck, z as ArrowRight } from "../_libs/lucide-react.mjs";
import { T as hero_home_default, d as INDUSTRIES, g as METRICS, i as ARTICLES, r as APPROACH_STEPS, u as HOME_SOLUTIONS, y as PRODUCTS } from "./site-content-DsHU6E2-.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as SiteLayout, n as PageHero, r as SectionHeader, t as AnimatedWords } from "./AnimatedWords-DMZZW0wH.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DldSwlj7.js
var import_jsx_runtime = require_jsx_runtime();
function HomePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			dark: true,
			eyebrow: "Innovations for the New Gen",
			title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedWords, {
					text: "Engineering",
					className: "text-white",
					startDelay: .2
				}),
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedWords, {
					text: "Intelligent",
					className: "text-white",
					startDelay: .2
				}),
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedWords, {
					text: "Enterprises.",
					className: "text-brand",
					startDelay: .2
				})
			] }),
			subtitle: "",
			image: hero_home_default,
			primary: {
				label: "Describe Your Challenge",
				to: "/contact-us"
			},
			secondary: {
				label: "Explore Solutions",
				to: "/solutions"
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-xl text-base leading-relaxed text-white/70",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedWords, {
					text: "Helping organizations transform through AI, Cloud, Software Engineering, Automation, and Enterprise Innovation.",
					startDelay: 1
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-border bg-white",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-page grid grid-cols-2 gap-6 py-8 md:grid-cols-5",
				children: METRICS.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "icon-chip shrink-0",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(m.icon, { className: "size-5" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xl font-bold text-ink",
						children: m.value
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs font-medium text-ink-soft",
						children: m.label
					})] })]
				}, m.label))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid items-end gap-6 lg:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
						eyebrow: "Our Solutions",
						title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							"End-to-End Solutions ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"for Modern Enterprises"
						] })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:text-right",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-ink-soft",
							children: "From strategy to execution, we deliver solutions that drive efficiency, agility, and growth."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/solutions",
							className: "mt-2 inline-flex items-center gap-2 text-sm font-semibold text-brand",
							children: ["Explore All Solutions ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
					children: HOME_SOLUTIONS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "card-soft p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "icon-chip",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "size-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-4 text-lg font-semibold text-ink",
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
						children: "Industries We Serve"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-2 text-3xl font-bold text-ink",
						children: [
							"Domain Expertise. ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Real Impact."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/solutions",
						className: "btn-primary mt-5",
						children: ["View All Industries ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 gap-3 md:grid-cols-4",
					children: INDUSTRIES.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3 rounded-xl border border-border bg-white px-4 py-3 shadow-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "icon-chip size-10",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(i.icon, { className: "size-4" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm font-medium text-ink",
							children: i.title
						})]
					}, i.title))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page grid gap-10 lg:grid-cols-[1fr_2.2fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
					eyebrow: "Our Approach",
					title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						"A Proven Approach ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"for Transformation"
					] })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-5",
					children: APPROACH_STEPS.map((s, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative mx-auto flex size-16 items-center justify-center rounded-full border border-brand/30 bg-brand-soft text-brand-strong",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "size-6" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "absolute -bottom-1 -right-1 size-6 rounded-full bg-brand text-xs font-bold text-white grid place-items-center",
									children: idx + 1
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-3 font-semibold text-ink",
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
			className: "section bg-surface",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-end justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
						eyebrow: "Our Innovation Platforms",
						title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							"Built for Today. ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Designed for Tomorrow."
						] })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/products",
						className: "inline-flex items-center gap-2 text-sm font-semibold text-brand",
						children: ["Explore All Products ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid gap-5 md:grid-cols-3",
					children: PRODUCTS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "card-soft p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs font-semibold uppercase tracking-wider text-brand",
								children: "Platform"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-1 text-xl font-bold text-ink",
								children: p.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-ink-soft",
								children: p.tagline
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-4 space-y-1.5",
								children: p.bullets.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-2 text-sm text-ink",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mt-0.5 size-4 text-brand" }), b]
								}, b))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/products",
								className: "mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand",
								children: ["Know More ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
							})
						]
					}, p.name))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page grid gap-8 lg:grid-cols-2 lg:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "Innovation Partners"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-2 text-3xl font-bold text-ink",
						children: [
							"Stronger Together. ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Building the Future."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-md text-ink-soft",
						children: "Collaborate with AWT through strategic investments, technology alliances, and white label partnerships that scale."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/innovation-partners",
						className: "btn-primary mt-5",
						children: ["Explore Partnerships ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 gap-4",
					children: [
						"Strategic Investments",
						"Technology Alliances",
						"Go-To-Market Partnerships",
						"White Label Opportunities"
					].map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl border border-border bg-white p-5 shadow-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-sm font-semibold text-brand",
							children: ["0", i + 1]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-1 font-semibold text-ink",
							children: t
						})]
					}, t))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-end justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
						eyebrow: "Insights",
						title: "Latest Perspectives"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/insights",
						className: "inline-flex items-center gap-2 text-sm font-semibold text-brand",
						children: ["Explore All Insights ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid gap-5 md:grid-cols-3",
					children: ARTICLES.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "card-soft overflow-hidden",
						children: [
							a.image && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: a.image,
								alt: a.title,
								className: "aspect-[16/9] w-full object-cover"
							}),
							!a.image && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "aspect-[16/9] bg-gradient-to-br from-brand-soft to-surface-2" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-xs text-ink-soft",
										children: [
											a.date,
											" · ",
											a.category
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-2 font-semibold text-ink",
										children: a.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1.5 text-sm text-ink-soft",
										children: a.summary
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/insights",
										className: "mt-3 inline-flex items-center gap-2 text-sm font-semibold text-brand",
										children: ["Read More ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
									})
								]
							})
						]
					}, a.title))
				})]
			})
		})
	] });
}
//#endregion
export { HomePage as component };
