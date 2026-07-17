import type { Lang, PageId } from "@/i18n/routes";
import { ROUTES } from "@/i18n/routes";
import { getContent } from "@/i18n/content";

/**
 * Builds head() metadata for a page, in the correct language.
 * Includes title, description, og:*, twitter, canonical, hreflang alternates.
 * `image` is optional and, when provided, must be an absolute URL — omit it
 * on routes without a meaningful cover image (hosting injects the default).
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
    { property: "og:url", content: path },
    { property: "og:type", content: pageId === "destination" ? "article" : "website" },
    { property: "og:locale", content: lang === "pt" ? "pt_BR" : "en_US" },
    { name: "twitter:card", content: image ? "summary_large_image" : "summary" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
  ];

  if (image) {
    meta.push({ property: "og:image", content: image });
    meta.push({ name: "twitter:image", content: image });
  }

  const links = [
    { rel: "canonical", href: path },
    { rel: "alternate", hrefLang: "en", href: enPath },
    { rel: "alternate", hrefLang: "pt", href: ptPath },
    { rel: "alternate", hrefLang: "x-default", href: enPath },
  ];

  return { meta, links };
}
