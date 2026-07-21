import { createFileRoute } from "@tanstack/react-router";
import { PartnersPage } from "@/page-views/PartnersPage";
import { buildHead } from "@/lib/page-head";

export const Route = createFileRoute("/pt/parceiros")({
  head: () => buildHead({ pageId: "partners", lang: "pt" }),
  component: () => <PartnersPage lang="pt" />,
});
