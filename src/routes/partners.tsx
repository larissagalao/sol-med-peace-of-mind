import { createFileRoute } from "@tanstack/react-router";
import { PartnersPage } from "@/page-views/PartnersPage";
import { buildHead } from "@/lib/page-head";

export const Route = createFileRoute("/partners")({
  head: () => buildHead({ pageId: "partners", lang: "en" }),
  component: () => <PartnersPage lang="en" />,
});
