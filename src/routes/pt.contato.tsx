import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/page-views/ContactPage";
import { buildHead } from "@/lib/page-head";

export const Route = createFileRoute("/pt/contato")({
  head: () => buildHead({ pageId: "contact", lang: "pt" }),
  component: () => <ContactPage lang="pt" />,
});
