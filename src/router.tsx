import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    // CloudPanel/nginx may request /careers/ while the app links to /careers.
    // Preserve both so /admin/login and /admin/login/ (and other pages) resolve.
    trailingSlash: "preserve",
  });

  return router;
};
