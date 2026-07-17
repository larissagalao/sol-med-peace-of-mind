import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/page-views/ContactPage";
import { buildHead } from "@/lib/page-head";

export const Route = createFileRoute("/contact")({
  head: () => buildHead({ pageId: "contact", lang: "en" }),
  component: () => <ContactPage lang="en" />,
});
