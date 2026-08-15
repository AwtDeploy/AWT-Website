import { createFileRoute, redirect } from "@tanstack/react-router";
import { getCmsSessionFn } from "@/lib/cms";

export const Route = createFileRoute("/admin/")({
  beforeLoad: async () => {
    const session = await getCmsSessionFn();
    throw redirect({ to: session ? "/admin/careers" : "/admin/login" });
  },
  component: () => null,
});
