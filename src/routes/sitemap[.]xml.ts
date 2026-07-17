import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { ALL_PAGE_IDS, ROUTES } from "@/i18n/routes";

// TODO: replace with your project URL once a project name or custom domain is set.
const BASE_URL = "";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: string[] = [];
        for (const id of ALL_PAGE_IDS) {
          const enPath = ROUTES[id].en;
          const ptPath = ROUTES[id].pt;
          const priority = id === "home" ? "1.0" : id === "destination" ? "0.9" : "0.7";
          const changefreq = id === "destination" ? "monthly" : "weekly";

          for (const [loc, hreflang, alternate] of [
            [enPath, "en", ptPath],
            [ptPath, "pt", enPath],
          ] as const) {
            entries.push(
              [
                "  <url>",
                `    <loc>${BASE_URL}${loc}</loc>`,
                `    <changefreq>${changefreq}</changefreq>`,
                `    <priority>${priority}</priority>`,
                `    <xhtml:link rel="alternate" hreflang="${hreflang === "en" ? "pt" : "en"}" href="${BASE_URL}${alternate}"/>`,
                `    <xhtml:link rel="alternate" hreflang="x-default" href="${BASE_URL}${ROUTES[id].en}"/>`,
                "  </url>",
              ].join("\n"),
            );
          }
        }

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">`,
          ...entries,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
