import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "@/page-views/AboutPage";
import { buildHead } from "@/lib/page-head";

export const Route = createFileRoute("/about")({
  head: () => buildHead({ pageId: "about", lang: "en" }),
  component: () => <AboutPage lang="en" />,
});
