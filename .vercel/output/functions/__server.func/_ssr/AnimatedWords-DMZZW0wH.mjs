import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { C as Instagram, D as Facebook, _ as Mail, g as MapPin, i as Twitter, m as Menu, p as Phone, t as X, v as Linkedin, z as ArrowRight } from "../_libs/lucide-react.mjs";
import { _ as NAV_ITEMS, o as COMPANY } from "./site-content-DsHU6E2-.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/AnimatedWords-DMZZW0wH.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Angadi_world_New_logo_default = "/assets/Angadi-world-New-logo-D8f9ddtc.jpg";
function Logo({ light = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex items-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: Angadi_world_New_logo_default,
			alt: "Angadi World Technologies",
			className: `h-14 w-auto ${light ? "brightness-0 invert" : ""}`,
			loading: "eager"
		})
	});
}
function SiteHeader() {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-40 border-b border-border/70 bg-white/95 backdrop-blur",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page flex h-20 items-center justify-between gap-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "flex items-center",
					"aria-label": COMPANY.name,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden xl:flex items-center gap-7",
					children: NAV_ITEMS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.to,
						activeOptions: { exact: item.to === "/" },
						className: "whitespace-nowrap text-base font-medium text-ink-soft transition-colors hover:text-brand relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-brand after:transition-all after:duration-300 hover:after:w-full",
						activeProps: { className: "text-brand font-semibold after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-brand" },
						children: item.label
					}, item.to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hidden xl:flex items-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/contact-us",
						className: "group inline-flex items-center gap-2 rounded-md bg-brand px-5 py-2.5 text-base font-semibold text-white transition hover:bg-brand-strong",
						children: ["Get a Consultation", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4 transition-transform group-hover:translate-x-0.5" })]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					"aria-label": "Toggle menu",
					className: "xl:hidden inline-flex items-center justify-center rounded-md border border-border p-2 text-ink",
					onClick: () => setOpen((v) => !v),
					children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "xl:hidden border-t border-border bg-white",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "container-page flex flex-col py-3",
				children: [NAV_ITEMS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: item.to,
					onClick: () => setOpen(false),
					className: "py-2 text-sm font-medium text-ink-soft hover:text-ink",
					activeProps: { className: "text-brand font-semibold" },
					children: item.label
				}, item.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/contact-us",
					onClick: () => setOpen(false),
					className: "mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-brand px-4 py-2 text-sm font-semibold text-white",
					children: ["Get a Consultation ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
				})]
			})
		})]
	});
}
var COMPANY_LINKS = [
	{
		label: "About Us",
		to: "/about-us"
	},
	{
		label: "Careers",
		to: "/careers"
	},
	{
		label: "News & Media",
		to: "/insights"
	},
	{
		label: "Contact Us",
		to: "/contact-us"
	}
];
var SOLUTION_LINKS = [
	{
		label: "Digital Transformation",
		to: "/solutions"
	},
	{
		label: "Software Engineering",
		to: "/solutions"
	},
	{
		label: "AI & Automation",
		to: "/solutions"
	},
	{
		label: "Cloud & DevOps",
		to: "/solutions"
	}
];
var PRODUCT_LINKS = [
	{
		label: "SafeRide 360™",
		to: "/products"
	},
	{
		label: "Job Streamers™",
		to: "/products"
	},
	{
		label: "Venuvo™",
		to: "/products"
	},
	{
		label: "Innovation Partners",
		to: "/innovation-partners"
	}
];
function SiteFooter() {
	const year = (/* @__PURE__ */ new Date()).getFullYear();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "bg-black text-white/80",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-page py-14",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-10 lg:grid-cols-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "inline-flex items-center justify-center rounded-md bg-white px-3 py-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: Angadi_world_New_logo_default,
									alt: "AWT",
									className: "h-12 w-auto"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 max-w-sm text-sm leading-relaxed text-white/70",
								children: "AWT is a global technology company delivering digital transformation, enterprise IT solutions, and innovative products for a smarter tomorrow."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6 flex gap-3",
								children: [
									{
										Icon: Linkedin,
										href: "https://www.linkedin.com/company/awt-technology/"
									},
									{
										Icon: Twitter,
										href: "https://x.com/angadiworldtech"
									},
									{
										Icon: Facebook,
										href: "https://www.facebook.com/angadiworldtechnology"
									},
									{
										Icon: Instagram,
										href: "https://www.instagram.com/angadiworldtech/"
									}
								].map(({ Icon, href }, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href,
									target: "_blank",
									rel: "noopener noreferrer",
									"aria-label": "social",
									className: "inline-flex size-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition hover:border-brand hover:text-brand",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4" })
								}, i))
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterCol, {
						title: "Company",
						items: COMPANY_LINKS
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterCol, {
						title: "Solutions",
						items: SOLUTION_LINKS
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterCol, {
						title: "Products",
						items: PRODUCT_LINKS
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "text-sm font-semibold uppercase tracking-wider text-white",
							children: "Contact Us"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-5 space-y-4 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "shrink-0 size-4 text-brand" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-white/80",
										children: COMPANY.countries.join(" | ")
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: COMPANY.phoneHref,
									className: "flex items-center gap-2 text-white/80 hover:text-white",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "mt-0 shrink-0 size-4 text-brand" }), COMPANY.phoneDisplay]
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: COMPANY.emailHref,
									className: "flex items-center gap-2 whitespace-nowrap text-white/80 hover:text-white",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "mt-0 shrink-0 size-4 text-brand" }), COMPANY.email]
								}) })
							]
						})]
					})
				]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-white/10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page flex flex-col gap-2 py-5 text-xs text-white/60 md:flex-row md:items-center md:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
					"© ",
					year,
					" ",
					COMPANY.legalName,
					" All Rights Reserved."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "italic",
					children: COMPANY.tagline
				})]
			})
		})]
	});
}
function FooterCol({ title, items }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "lg:col-span-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
			className: "text-sm font-semibold uppercase tracking-wider text-white",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-5 space-y-3",
			children: items.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: i.to,
				className: "text-sm text-white/70 transition hover:text-brand",
				children: i.label
			}) }, i.label))
		})]
	});
}
function WhatsAppIcon({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 32 32",
		className,
		fill: "currentColor",
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M19.11 17.39c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.17-1.34-.8-.71-1.34-1.6-1.5-1.87-.16-.27-.02-.42.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.83-2.02-.22-.53-.45-.46-.61-.47l-.52-.01c-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.29 0 1.35.98 2.65 1.12 2.83.14.18 1.94 2.96 4.69 4.15.66.28 1.17.45 1.57.58.66.21 1.26.18 1.74.11.53-.08 1.6-.65 1.83-1.28.23-.63.23-1.18.16-1.28-.07-.11-.25-.18-.52-.32zM16.02 5.33c-5.9 0-10.7 4.8-10.7 10.7 0 1.88.49 3.72 1.43 5.34l-1.52 5.55 5.69-1.49a10.7 10.7 0 0 0 5.1 1.3h.01c5.9 0 10.7-4.8 10.7-10.7s-4.81-10.7-10.71-10.7z" })
	});
}
function FloatingContact() {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3",
		children: [open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col items-end gap-2 rounded-2xl border border-border bg-white p-2 shadow-xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: COMPANY.whatsappHref,
				target: "_blank",
				rel: "noreferrer",
				className: "flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-ink transition hover:bg-surface",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppIcon, { className: "size-4 text-[#25D366]" }), " WhatsApp"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: COMPANY.phoneHref,
				className: "flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-ink transition hover:bg-surface",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4 text-brand" }), " Call us"]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			"aria-label": "Contact options",
			onClick: () => setOpen((v) => !v),
			className: "inline-flex size-12 items-center justify-center rounded-full bg-[#ef5b5b] text-white shadow-lg ring-1 ring-black/5 transition hover:bg-[#e54848]",
			children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
				viewBox: "0 0 24 24",
				className: "size-6",
				fill: "currentColor",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M5 3h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-8.5L6 21.5V17H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm3 5a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2H8zm0 4a1 1 0 0 0 0 2h5a1 1 0 0 0 0-2H8z" })
			})
		})]
	});
}
function SiteLayout({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-screen flex-col bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "flex-1",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingContact, {})
		]
	});
}
function PageHero({ eyebrow, title, subtitle, image, primary, secondary, children, dark }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: `relative overflow-hidden ${dark ? "bg-black" : "bg-gradient-to-br from-surface to-white"}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page grid items-center gap-10 py-12 lg:grid-cols-2 lg:py-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: `eyebrow ${dark ? "text-brand" : ""}`,
					children: eyebrow
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: `mt-3 text-4xl font-bold leading-tight md:text-5xl lg:text-[3.4rem] ${dark ? "text-white" : "text-ink"}`,
					children: title
				}),
				subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: `mt-4 max-w-xl text-base leading-relaxed ${dark ? "text-white/70" : "text-ink-soft"}`,
					children: subtitle
				}),
				(primary || secondary) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap items-center gap-3",
					children: [primary && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: primary.to,
						className: "btn-primary",
						children: [
							primary.label,
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })
						]
					}), secondary && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: secondary.to,
						className: dark ? "inline-flex items-center gap-2 rounded-lg border border-white/20 bg-transparent px-5 py-3 text-[0.95rem] font-semibold text-white transition hover:bg-white/10" : "btn-outline",
						children: [
							secondary.label,
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })
						]
					})]
				}),
				children
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute -inset-4 rounded-3xl bg-brand/10 blur-2xl",
					"aria-hidden": "true"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: image,
					alt: "",
					className: "relative w-full rounded-2xl border border-border object-cover shadow-xl"
				})]
			})]
		})
	});
}
function SectionHeader({ eyebrow, title, description, align = "left" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl",
		children: [
			eyebrow && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow",
				children: eyebrow
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-2 text-3xl font-bold text-ink md:text-4xl",
				children: title
			}),
			description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-base text-ink-soft",
				children: description
			})
		]
	});
}
function AnimatedWords({ text, className, startDelay = 0 }) {
	const words = text.split(" ");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: words.map((word, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "inline-block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: `animate-word inline-block ${className ?? ""}`,
			style: { animationDelay: `${startDelay + i * .08}s` },
			children: word
		}), i < words.length - 1 && " "]
	}, i)) });
}
//#endregion
export { SiteLayout as i, PageHero as n, SectionHeader as r, AnimatedWords as t };
