import type { Lang, PageId } from "@/i18n/routes";
import { ROUTES } from "@/i18n/routes";
import { getContent } from "@/i18n/content";
import { SITE_CONFIG } from "@/config/site";

/** Prefix a root-relative path with the canonical origin to get an absolute URL. */
const abs = (path: string) => `${SITE_CONFIG.url}${path}`;

/**
 * Builds head() metadata for a page, in the correct language.
 * Includes title, description, og:*, twitter, canonical, hreflang alternates.
 * `image` is optional and, when provided, must be an absolute URL. When omitted
 * the site default (SITE_CONFIG.ogImagePath) is used so every page has a card.
 */
export function buildHead({
  pageId,
  lang,
  image,
}: {
  pageId: PageId;
  lang: Lang;
  image?: string;
}) {
  // Every page gets a share image so social/Twitter cards render large by
  // default. Pass a page-specific `image` (absolute URL) to override.
  const ogImage = image ?? abs(SITE_CONFIG.ogImagePath);
  const content = getContent(lang);
  // pageId maps to a top-level content key with { meta }
  const page = (content as unknown as Record<PageId, { meta: { title: string; description: string } }>)[pageId];
  const { title, description } = page.meta;
  const path = ROUTES[pageId][lang];
  const enPath = ROUTES[pageId].en;
  const ptPath = ROUTES[pageId].pt;

  const meta = [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:url", content: abs(path) },
    { property: "og:type", content: pageId === "destination" ? "article" : "website" },
    { property: "og:locale", content: lang === "pt" ? "pt_BR" : "en_US" },
    { property: "og:image", content: ogImage },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: ogImage },
  ];

  const links = [
    { rel: "canonical", href: abs(path) },
    { rel: "alternate", hrefLang: "en", href: abs(enPath) },
    { rel: "alternate", hrefLang: "pt", href: abs(ptPath) },
    { rel: "alternate", hrefLang: "x-default", href: abs(enPath) },
  ];

  return { meta, links };
}
