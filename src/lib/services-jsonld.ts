import type { Lang } from "@/i18n/routes";
import { getContent } from "@/i18n/content";
import { SITE_CONFIG } from "@/config/site";
import { ROUTES } from "@/i18n/routes";

/**
 * JSON-LD ItemList of Service offerings for the /services page.
 * Helps search engines understand the four service tiers as structured data.
 */
export function servicesJsonLd(lang: Lang) {
  const c = getContent(lang);
  const url = `${SITE_CONFIG.url}${ROUTES.services[lang]}`;
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: c.services.meta.title,
    url,
    itemListElement: c.services.items.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Service",
        name: s.name,
        description: s.body,
        areaServed: { "@type": "Country", name: "Spain" },
        provider: {
          "@type": "Organization",
          name: "Sol Mediterraneo Weddings Co.",
          url: SITE_CONFIG.url,
        },
      },
    })),
  };
}
