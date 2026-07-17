import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/page-views/HomePage";
import { buildHead } from "@/lib/page-head";

export const Route = createFileRoute("/pt/")({
  head: () => buildHead({ pageId: "home", lang: "pt" }),
  component: () => <HomePage lang="pt" />,
});
