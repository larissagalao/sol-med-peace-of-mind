import { createFileRoute } from "@tanstack/react-router";
import { ArticlePage } from "@/page-views/ArticlePage";
import { buildPostHead } from "@/lib/blog-head";

export const Route = createFileRoute("/pt/blog/planejamento-casamento-espanha-cronograma")({
  head: () => buildPostHead("wedding-in-spain-planning-timeline", "pt"),
  component: () => <ArticlePage postKey="wedding-in-spain-planning-timeline" lang="pt" />,
});
