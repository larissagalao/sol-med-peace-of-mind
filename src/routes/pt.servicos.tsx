import { createFileRoute } from "@tanstack/react-router";
import { ServicesPage } from "@/page-views/ServicesPage";
import { buildHead } from "@/lib/page-head";

export const Route = createFileRoute("/pt/servicos")({
  head: () => buildHead({ pageId: "services", lang: "pt" }),
  component: () => <ServicesPage lang="pt" />,
});
