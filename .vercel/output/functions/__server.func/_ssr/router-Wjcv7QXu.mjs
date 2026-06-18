import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { x as ROUTE_META } from "./site-content-DsHU6E2-.mjs";
import { c as HeadContent, d as Outlet, f as lazyRouteComponent, g as useRouter, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-Wjcv7QXu.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-5mkGhIPN.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$8 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Lovable App" },
			{
				name: "description",
				content: "Lovable Generated Project"
			},
			{
				name: "author",
				content: "Lovable"
			},
			{
				property: "og:title",
				content: "Lovable App"
			},
			{
				property: "og:description",
				content: "Lovable Generated Project"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary"
			},
			{
				name: "twitter:site",
				content: "@Lovable"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: ""
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$8.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
	});
}
var $$splitComponentImporter$7 = () => import("./solutions-BphrGymB.mjs");
var Route$7 = createFileRoute("/solutions")({
	head: () => ({ meta: [
		{ title: ROUTE_META.solutions.title },
		{
			name: "description",
			content: ROUTE_META.solutions.description
		},
		{
			property: "og:title",
			content: ROUTE_META.solutions.title
		},
		{
			property: "og:description",
			content: ROUTE_META.solutions.description
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./products-DfDSbRzE.mjs");
var Route$6 = createFileRoute("/products")({
	head: () => ({ meta: [
		{ title: ROUTE_META.products.title },
		{
			name: "description",
			content: ROUTE_META.products.description
		},
		{
			property: "og:title",
			content: ROUTE_META.products.title
		},
		{
			property: "og:description",
			content: ROUTE_META.products.description
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./insights-Z4f2SRUF.mjs");
var Route$5 = createFileRoute("/insights")({
	head: () => ({ meta: [
		{ title: ROUTE_META.insights.title },
		{
			name: "description",
			content: ROUTE_META.insights.description
		},
		{
			property: "og:title",
			content: ROUTE_META.insights.title
		},
		{
			property: "og:description",
			content: ROUTE_META.insights.description
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./innovation-partners-D3g37iRH.mjs");
var Route$4 = createFileRoute("/innovation-partners")({
	head: () => ({ meta: [
		{ title: ROUTE_META.partners.title },
		{
			name: "description",
			content: ROUTE_META.partners.description
		},
		{
			property: "og:title",
			content: ROUTE_META.partners.title
		},
		{
			property: "og:description",
			content: ROUTE_META.partners.description
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./contact-us-DxU31yVB.mjs");
var Route$3 = createFileRoute("/contact-us")({
	head: () => ({ meta: [
		{ title: ROUTE_META.contact.title },
		{
			name: "description",
			content: ROUTE_META.contact.description
		},
		{
			property: "og:title",
			content: ROUTE_META.contact.title
		},
		{
			property: "og:description",
			content: ROUTE_META.contact.description
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./careers-D0vyv8W4.mjs");
var Route$2 = createFileRoute("/careers")({
	head: () => ({ meta: [
		{ title: ROUTE_META.careers.title },
		{
			name: "description",
			content: ROUTE_META.careers.description
		},
		{
			property: "og:title",
			content: ROUTE_META.careers.title
		},
		{
			property: "og:description",
			content: ROUTE_META.careers.description
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./about-us-BBfr8LjO.mjs");
var Route$1 = createFileRoute("/about-us")({
	head: () => ({ meta: [
		{ title: ROUTE_META.about.title },
		{
			name: "description",
			content: ROUTE_META.about.description
		},
		{
			property: "og:title",
			content: ROUTE_META.about.title
		},
		{
			property: "og:description",
			content: ROUTE_META.about.description
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./routes-DldSwlj7.mjs");
var Route = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: ROUTE_META.home.title },
		{
			name: "description",
			content: ROUTE_META.home.description
		},
		{
			property: "og:title",
			content: ROUTE_META.home.title
		},
		{
			property: "og:description",
			content: ROUTE_META.home.description
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var SolutionsRoute = Route$7.update({
	id: "/solutions",
	path: "/solutions",
	getParentRoute: () => Route$8
});
var ProductsRoute = Route$6.update({
	id: "/products",
	path: "/products",
	getParentRoute: () => Route$8
});
var InsightsRoute = Route$5.update({
	id: "/insights",
	path: "/insights",
	getParentRoute: () => Route$8
});
var InnovationPartnersRoute = Route$4.update({
	id: "/innovation-partners",
	path: "/innovation-partners",
	getParentRoute: () => Route$8
});
var ContactUsRoute = Route$3.update({
	id: "/contact-us",
	path: "/contact-us",
	getParentRoute: () => Route$8
});
var CareersRoute = Route$2.update({
	id: "/careers",
	path: "/careers",
	getParentRoute: () => Route$8
});
var AboutUsRoute = Route$1.update({
	id: "/about-us",
	path: "/about-us",
	getParentRoute: () => Route$8
});
var rootRouteChildren = {
	IndexRoute: Route.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$8
	}),
	AboutUsRoute,
	CareersRoute,
	ContactUsRoute,
	InnovationPartnersRoute,
	InsightsRoute,
	ProductsRoute,
	SolutionsRoute
};
var routeTree = Route$8._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
