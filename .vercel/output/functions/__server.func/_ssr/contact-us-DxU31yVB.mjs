import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { _ as Mail, g as MapPin, p as Phone, z as ArrowRight } from "../_libs/lucide-react.mjs";
import { o as COMPANY, s as CONTACT_CARDS, v as OFFICES } from "./site-content-DsHU6E2-.mjs";
import { i as SiteLayout, n as PageHero, r as SectionHeader, t as AnimatedWords } from "./AnimatedWords-DMZZW0wH.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-us-DxU31yVB.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var hero_contact_default = "/assets/hero-contact-CnPw0JLk.jpg";
function ContactPage() {
	const [sent, setSent] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageHero, {
			dark: true,
			eyebrow: "Contact Us",
			title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedWords, {
					text: "Let's",
					className: "text-white",
					startDelay: .2
				}),
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedWords, {
					text: "Build",
					className: "text-white",
					startDelay: .2
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedWords, {
					text: "What's",
					className: "text-brand",
					startDelay: .5
				}),
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedWords, {
					text: "Next.",
					className: "text-brand",
					startDelay: .5
				})
			] }),
			subtitle: "",
			image: hero_contact_default,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-xl text-base leading-relaxed text-white/70",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedWords, {
					text: "Have a question, an idea, or a challenge? We're here to listen and help you turn possibilities into impact.",
					startDelay: .8
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 grid gap-3 sm:grid-cols-2",
				children: CONTACT_CARDS.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: c.title === "Call us" ? COMPANY.phoneHref : COMPANY.emailHref,
					className: "flex items-center gap-3 rounded-xl border border-white/15 bg-white/10 p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "icon-chip shrink-0",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(c.icon, { className: "size-5" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs font-semibold uppercase tracking-wider text-white/60",
							children: c.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-sm font-semibold text-white",
							children: c.value
						})]
					})]
				}, c.title))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page grid gap-10 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl font-bold text-ink",
						children: "Send Us a Message"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-ink-soft",
						children: "Fill out the form and our team will get back to you shortly."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: (e) => {
							e.preventDefault();
							setSent(true);
						},
						className: "mt-6 grid gap-4 sm:grid-cols-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Full Name",
								required: true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Work Email",
								type: "email",
								required: true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, { label: "Company Name" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, { label: "Phone Number" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "sm:col-span-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-xs font-semibold text-ink-soft",
									children: "How can we help you?"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									className: "mt-1 w-full rounded-lg border border-border bg-white px-3 py-2.5 text-sm",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Solutions and services" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Product enquiry" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Innovation partnership" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Careers" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Other" })
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "sm:col-span-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-xs font-semibold text-ink-soft",
									children: "Tell us more about your requirement"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									rows: 4,
									className: "mt-1 w-full rounded-lg border border-border bg-white px-3 py-2.5 text-sm"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "sm:col-span-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									className: "btn-primary",
									type: "submit",
									children: [
										sent ? "Message Sent" : "Send Message",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })
									]
								})
							})
						]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl font-bold text-ink",
						children: "Connect With Us"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-ink-soft",
						children: "Ready to start your transformation journey? Let’s discuss how AWT can help your business grow."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 grid gap-4 sm:grid-cols-2",
						children: [
							OFFICES.slice(0, 2).map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-xl border border-border bg-white p-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2 text-brand",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs font-semibold uppercase tracking-wider",
										children: o.city
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-ink-soft",
									children: o.address
								})]
							}, o.city)),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: COMPANY.emailHref,
								className: "rounded-xl border border-border bg-white p-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2 text-brand",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs font-semibold uppercase tracking-wider",
										children: "Email us"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm font-semibold text-ink",
									children: COMPANY.email
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: COMPANY.phoneHref,
								className: "rounded-xl border border-border bg-white p-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2 text-brand",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs font-semibold uppercase tracking-wider",
										children: "Call us"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm font-semibold text-ink",
									children: COMPANY.phoneDisplay
								})]
							})
						]
					})
				] })]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-surface py-14",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
					align: "center",
					eyebrow: "Our Offices",
					title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Across Cities. ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-brand",
						children: "Closer to You."
					})] })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto mt-8 grid max-w-4xl gap-5 sm:grid-cols-2",
					children: OFFICES.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "overflow-hidden rounded-2xl border border-border bg-white shadow-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "aspect-[16/9] bg-gradient-to-br from-[#1a1a1f] via-brand-strong to-brand" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-brand text-sm font-semibold",
									children: o.city
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs font-medium text-ink-soft",
									children: o.country
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-ink-soft",
									children: o.address
								})
							]
						})]
					}, o.city))
				})]
			})
		})
	] });
}
function Field({ label, type = "text", required }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "text-xs font-semibold text-ink-soft",
		children: [label, required && " *"]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		required,
		className: "mt-1 w-full rounded-lg border border-border bg-white px-3 py-2.5 text-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"
	})] });
}
//#endregion
export { ContactPage as component };
