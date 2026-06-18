import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { N as CircleCheck, z as ArrowRight } from "../_libs/lucide-react.mjs";
import { C as TECHNOLOGIES, b as PRODUCT_BENEFITS, y as PRODUCTS } from "./site-content-DsHU6E2-.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as SiteLayout, n as PageHero, r as SectionHeader, t as AnimatedWords } from "./AnimatedWords-DMZZW0wH.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/products-DfDSbRzE.js
var import_jsx_runtime = require_jsx_runtime();
var hero_products_default = "/assets/hero-products-C9U4wSDz.jpg";
function ProductsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			dark: true,
			eyebrow: "Our Products",
			title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedWords, {
					text: "Innovation",
					className: "text-white",
					startDelay: .2
				}),
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedWords, {
					text: "in",
					className: "text-white",
					startDelay: .2
				}),
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedWords, {
					text: "Every",
					className: "text-white",
					startDelay: .2
				}),
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedWords, {
					text: "Solution.",
					className: "text-brand",
					startDelay: .6
				})
			] }),
			subtitle: "",
			image: hero_products_default,
			primary: {
				label: "Explore Our Products",
				to: "/products"
			},
			secondary: {
				label: "Talk to Our Experts",
				to: "/contact-us"
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-xl text-base leading-relaxed text-white/70",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedWords, {
					text: "Our proprietary products are built to solve real-world business challenges and drive efficiency, safety, and exceptional experiences.",
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
					eyebrow: "Our Innovation Products",
					title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Purpose-Built. Future-Ready. ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-brand",
						children: "Impact-Driven."
					})] }),
					description: "Our proprietary platforms empower organizations with intelligence, automation, safety, and seamless experiences."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-6 lg:grid-cols-3",
					children: PRODUCTS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "card-soft flex flex-col p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs font-semibold uppercase tracking-wider text-brand",
								children: "Platform"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-1 text-2xl font-bold text-ink",
								children: p.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-ink-soft",
								children: p.tagline
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-5 space-y-2 text-sm text-ink",
								children: p.bullets.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mt-0.5 size-4 text-brand" }), b]
								}, b))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/contact-us",
								className: "mt-6 inline-flex items-center gap-2 rounded-lg border border-brand px-4 py-2 text-sm font-semibold text-brand transition hover:bg-brand hover:text-white",
								children: [
									"Explore ",
									p.name,
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })
								]
							})
						]
					}, p.name))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section bg-surface",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page grid gap-6 lg:grid-cols-[1fr_2fr] lg:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "text-3xl font-bold text-ink",
					children: [
						"Products That ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"Deliver ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-brand",
							children: "Real Value."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 gap-4 md:grid-cols-5",
					children: PRODUCT_BENEFITS.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl border border-border bg-white p-4 text-center shadow-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "icon-chip mx-auto",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(b.icon, { className: "size-5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 text-sm font-semibold text-ink",
							children: b.title
						})]
					}, b.title))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section bg-surface",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
					align: "center",
					eyebrow: "Built With Modern Technologies",
					title: "A Modern Engineering Foundation"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6",
					children: TECHNOLOGIES.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "rounded-xl border border-border bg-white px-3 py-4 text-center text-sm font-semibold text-ink",
						children: t
					}, t))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-gradient-to-r from-brand to-brand-strong py-10 text-white",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page flex flex-col items-start justify-between gap-4 md:flex-row md:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-2xl font-bold",
					children: "Have an Idea for the Next Big Thing? Let’s Build It Together."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-white/85",
					children: "Partner with AWT to turn your vision into a powerful product."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/contact-us",
					className: "inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 font-semibold text-brand",
					children: ["Talk to Our Experts ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
				})]
			})
		})
	] });
}
//#endregion
export { ProductsPage as component };
