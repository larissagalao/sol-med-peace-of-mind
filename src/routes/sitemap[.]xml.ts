import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { ALL_PAGE_IDS, ROUTES } from "@/i18n/routes";
import { HUB_SLUGS, REGION_KEYS, REGION_SLUGS } from "@/i18n/regions";
import { SITE_CONFIG } from "@/config/site";

const BASE_URL = SITE_CONFIG.url;

type Pair = { en: string; pt: string; changefreq: string; priority: string };

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const pairs: Pair[] = [];

        // Core pages
        for (const id of ALL_PAGE_IDS) {
          const priority = id === "home" ? "1.0" : id === "destination" ? "0.9" : "0.7";
          const changefreq = id === "destination" ? "monthly" : "weekly";
          pairs.push({ en: ROUTES[id].en, pt: ROUTES[id].pt, changefreq, priority });
        }

        // Regions hub
        pairs.push({ en: HUB_SLUGS.en, pt: HUB_SLUGS.pt, changefreq: "monthly", priority: "0.8" });

        // Region spokes
        for (const key of REGION_KEYS) {
          pairs.push({
            en: REGION_SLUGS[key].en,
            pt: REGION_SLUGS[key].pt,
            changefreq: "monthly",
            priority: "0.8",
          });
        }

        const entries: string[] = [];
        for (const pair of pairs) {
          for (const [loc, hreflang, alternate] of [
            [pair.en, "en", pair.pt],
            [pair.pt, "pt", pair.en],
          ] as const) {
            entries.push(
              [
                "  <url>",
                `    <loc>${BASE_URL}${loc}</loc>`,
                `    <changefreq>${pair.changefreq}</changefreq>`,
                `    <priority>${pair.priority}</priority>`,
                `    <xhtml:link rel="alternate" hreflang="${hreflang === "en" ? "pt" : "en"}" href="${BASE_URL}${alternate}"/>`,
                `    <xhtml:link rel="alternate" hreflang="x-default" href="${BASE_URL}${pair.en}"/>`,
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
