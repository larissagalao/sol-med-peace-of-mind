import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "@/page-views/AboutPage";
import { buildHead } from "@/lib/page-head";

export const Route = createFileRoute("/pt/sobre")({
  head: () => buildHead({ pageId: "about", lang: "pt" }),
  component: () => <AboutPage lang="pt" />,
});
