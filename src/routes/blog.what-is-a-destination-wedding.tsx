import { createFileRoute } from "@tanstack/react-router";
import { ArticlePage } from "@/page-views/ArticlePage";
import { buildPostHead } from "@/lib/blog-head";

export const Route = createFileRoute("/blog/what-is-a-destination-wedding")({
  head: () => buildPostHead("what-is-a-destination-wedding", "en"),
  component: () => <ArticlePage postKey="what-is-a-destination-wedding" lang="en" />,
});
