import type { Lang } from "@/i18n/routes";
import type { RegionKey } from "@/i18n/regions";
import { HUB_SLUGS, REGION_SLUGS, getHub, getRegion } from "@/i18n/regions";
import { SITE_CONFIG } from "@/config/site";

const abs = (path: string) => `${SITE_CONFIG.url}${path}`;

/** buildHead for the regions hub page. */
export function buildHubHead(lang: Lang) {
  const hub = getHub(lang);
  const path = HUB_SLUGS[lang];
  const enPath = HUB_SLUGS.en;
  const ptPath = HUB_SLUGS.pt;
  const image = abs(SITE_CONFIG.ogImagePath);
  return {
    meta: [
      { title: hub.meta.title },
      { name: "description", content: hub.meta.description },
      { property: "og:title", content: hub.meta.title },
      { property: "og:description", content: hub.meta.description },
      { property: "og:url", content: abs(path) },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: lang === "pt" ? "pt_BR" : "en_US" },
      { property: "og:image", content: image },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: hub.meta.title },
      { name: "twitter:description", content: hub.meta.description },
      { name: "twitter:image", content: image },
    ],
    links: [
      { rel: "canonical", href: abs(path) },
      { rel: "alternate", hrefLang: "en", href: abs(enPath) },
      { rel: "alternate", hrefLang: "pt", href: abs(ptPath) },
      { rel: "alternate", hrefLang: "x-default", href: abs(enPath) },
    ],
  };
}

/** buildHead for a single region page. `ogImage` should be an absolute URL when provided. */
export function buildRegionHead(key: RegionKey, lang: Lang, ogImage?: string) {
  const region = getRegion(key, lang);
  const path = REGION_SLUGS[key][lang];
  const enPath = REGION_SLUGS[key].en;
  const ptPath = REGION_SLUGS[key].pt;
  const image = ogImage ?? abs(SITE_CONFIG.ogImagePath);
  return {
    meta: [
      { title: region.meta.title },
      { name: "description", content: region.meta.description },
      { property: "og:title", content: region.meta.title },
      { property: "og:description", content: region.meta.description },
      { property: "og:url", content: abs(path) },
      { property: "og:type", content: "article" },
      { property: "og:locale", content: lang === "pt" ? "pt_BR" : "en_US" },
      { property: "og:image", content: image },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: region.meta.title },
      { name: "twitter:description", content: region.meta.description },
      { name: "twitter:image", content: image },
    ],
    links: [
      { rel: "canonical", href: abs(path) },
      { rel: "alternate", hrefLang: "en", href: abs(enPath) },
      { rel: "alternate", hrefLang: "pt", href: abs(ptPath) },
      { rel: "alternate", hrefLang: "x-default", href: abs(enPath) },
    ],
  };
}
