import { createFileRoute } from "@tanstack/react-router";
import { ServicesPage } from "@/page-views/ServicesPage";
import { buildHead } from "@/lib/page-head";

export const Route = createFileRoute("/services")({
  head: () => buildHead({ pageId: "services", lang: "en" }),
  component: () => <ServicesPage lang="en" />,
});
