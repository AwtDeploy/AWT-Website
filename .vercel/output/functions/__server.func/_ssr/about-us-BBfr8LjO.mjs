import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { N as CircleCheck, O as Earth, T as Headphones, f as Rocket, u as ShieldCheck, z as ArrowRight } from "../_libs/lucide-react.mjs";
import { g as METRICS, l as FOUNDER, n as ABOUT_TIMELINE, t as ABOUT_PRINCIPLES, w as VALUES, y as PRODUCTS } from "./site-content-DsHU6E2-.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as SiteLayout, n as PageHero, r as SectionHeader, t as AnimatedWords } from "./AnimatedWords-DMZZW0wH.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-us-BBfr8LjO.js
var import_jsx_runtime = require_jsx_runtime();
var hero_about_default = "/assets/hero-about-zQ_LTSZx.jpg";
var Sravan_default = "/assets/Sravan-C_8SMh7c.jpg";
function AboutPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			dark: true,
			eyebrow: "About Us",
			title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedWords, {
					text: "Beyond",
					className: "text-white",
					startDelay: .2
				}),
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedWords, {
					text: "Technology.",
					className: "text-white",
					startDelay: .2
				}),
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedWords, {
					text: "Toward",
					className: "text-brand",
					startDelay: .6
				}),
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedWords, {
					text: "Transformation.",
					className: "text-brand",
					startDelay: .6
				})
			] }),
			subtitle: "",
			image: hero_about_default,
			primary: {
				label: "Partner With AWT",
				to: "/contact-us"
			},
			secondary: {
				label: "Explore Our Solutions",
				to: "/solutions"
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-xl text-base leading-relaxed text-white/70",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedWords, {
					text: "Since 2018, Angadi World Technologies has been helping organizations transform through intelligent software, cloud, AI, and enterprise engineering excellence.",
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
				className: "container-page grid gap-10 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
					eyebrow: "Our Story",
					title: "Our Journey of Innovation."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 space-y-3 text-ink-soft",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Founded in 2018 by Sravan Kumar Angadi, AWT began with a vision to build technology that connects intelligence with purpose." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Over the years, AWT has evolved into a global innovation-driven enterprise helping organizations modernize, automate, and scale through intelligent solutions." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Today we serve clients across industries while continuously investing in product innovation, AI, cloud technologies, and enterprise platforms." })
					]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "grid grid-cols-2 gap-4 sm:grid-cols-3",
					children: ABOUT_TIMELINE.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-xl border border-border bg-white p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-brand text-sm font-bold",
							children: t.year
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-1 text-sm font-medium text-ink",
							children: t.title
						})]
					}, t.year))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-surface py-14",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page grid gap-5 md:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
						title: "Our Vision",
						body: "Empower organizations worldwide with technology that inspires innovation and accelerates growth."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
						title: "Our Mission",
						body: "Deliver intelligent, scalable, and future-ready digital solutions that help businesses transform with confidence."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "card-soft p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-lg font-semibold text-ink",
							children: "Our Values"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-3 grid grid-cols-2 gap-y-2 text-sm",
							children: VALUES.map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-2 text-ink",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-4 text-brand" }), v]
							}, v))
						})]
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section bg-surface",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page grid gap-10 lg:grid-cols-[auto_1fr] lg:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto w-full max-w-[260px] overflow-hidden rounded-2xl border border-border shadow-sm",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: Sravan_default,
						alt: FOUNDER.name,
						className: "aspect-square w-full object-cover"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "Meet Our Founder & CEO"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 text-3xl font-bold text-ink",
						children: FOUNDER.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 font-semibold text-brand",
						children: FOUNDER.role
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-ink-soft",
						children: FOUNDER.summary
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
						className: "mt-5 rounded-xl border-l-4 border-brand bg-white p-5 text-ink shadow-sm",
						children: [
							"“",
							FOUNDER.quote,
							"”"
						]
					})
				] })]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page grid gap-10 lg:grid-cols-2 lg:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "Building Teams. Building Vision."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-2 text-3xl font-bold text-ink",
						children: ["At AWT, innovation begins with ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-brand",
							children: "people."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-ink-soft",
						children: "We foster a culture where ownership, continuous learning, collaboration, and creativity drive every solution."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-ink-soft",
						children: "Our teams combine technical expertise, strategic thinking, and customer focus to create measurable business impact."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "grid gap-3 sm:grid-cols-2",
					children: ABOUT_PRINCIPLES.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-center gap-3 rounded-xl border border-border bg-white p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-5 text-brand" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium text-ink",
							children: p
						})]
					}, p))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-surface py-14",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page grid gap-8 lg:grid-cols-2 lg:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
					eyebrow: "Where We Operate",
					title: "Global Delivery Excellence.",
					description: "From India to global markets, AWT delivers enterprise-grade solutions through a flexible and scalable delivery model across North America, Europe, the Middle East, and Asia-Pacific."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 gap-3",
					children: [
						{
							t: "24/7 Support",
							i: Headphones
						},
						{
							t: "Global Collaboration",
							i: Earth
						},
						{
							t: "Rapid Delivery",
							i: Rocket
						},
						{
							t: "Enterprise Governance",
							i: ShieldCheck
						}
					].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl border border-border bg-white p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "icon-chip",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(c.i, { className: "size-5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 font-semibold text-ink",
							children: c.t
						})]
					}, c.t))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-end justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "Innovation Ecosystem"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 text-3xl font-bold text-ink",
						children: "Building Platforms for Tomorrow."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/products",
						className: "btn-primary",
						children: ["Explore Our Platforms ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid gap-5 md:grid-cols-3",
					children: PRODUCTS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border bg-white p-6 shadow-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-lg font-bold text-ink",
								children: p.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-ink-soft",
								children: p.tagline
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-4 space-y-1.5 text-sm",
								children: p.bullets.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-2 text-ink",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mt-0.5 size-4 text-brand" }), b]
								}, b))
							})
						]
					}, p.name))
				})]
			})
		})
	] });
}
function Card({ title, body }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "card-soft p-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
			className: "text-lg font-semibold text-ink",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-sm text-ink-soft",
			children: body
		})]
	});
}
//#endregion
export { AboutPage as component };
