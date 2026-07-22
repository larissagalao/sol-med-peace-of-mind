import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/page-views/HomePage";
import { buildHead } from "@/lib/page-head";
import { SITE_CONFIG } from "@/config/site";

export const Route = createFileRoute("/")({
  head: () => {
    const base = buildHead({ pageId: "home", lang: "en" });
    return {
      ...base,
      links: [
        ...base.links,
        { rel: "preload", as: "image", href: SITE_CONFIG.heroImage, fetchpriority: "high" },
      ],
    };
  },
  component: () => <HomePage lang="en" />,
});
