import { createFileRoute } from "@tanstack/react-router";
import { ArticlePage } from "@/page-views/ArticlePage";
import { buildPostHead } from "@/lib/blog-head";

export const Route = createFileRoute("/pt/blog/o-que-e-um-destination-wedding")({
  head: () => buildPostHead("what-is-a-destination-wedding", "pt"),
  component: () => <ArticlePage postKey="what-is-a-destination-wedding" lang="pt" />,
});
