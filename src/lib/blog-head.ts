import type { Lang } from "@/i18n/routes";
import type { PostKey } from "@/i18n/blog";
import { BLOG_INDEX, POST_SLUGS, getBlogIndex, getPost } from "@/i18n/blog";
import { SITE_CONFIG } from "@/config/site";

const abs = (path: string) => `${SITE_CONFIG.url}${path}`;

const AUTHOR = { "@type": "Person" as const, name: "Larissa Ribeiro" };
const PUBLISHER = {
  "@type": "Organization" as const,
  name: "Sol Mediterraneo Weddings Co.",
  logo: {
    "@type": "ImageObject" as const,
    url: "https://www.solmediterraneoweddings.com/brand-mark.png",
  },
};

function breadcrumbLd(lang: Lang, trail: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: t.name,
      item: abs(t.path),
    })),
  };
}

/** Head for the /blog (and /pt/blog) index page. */
export function buildBlogIndexHead(lang: Lang) {
  const idx = getBlogIndex(lang);
  const path = BLOG_INDEX[lang];
  const image = abs(SITE_CONFIG.ogImagePath);
  const home = lang === "pt" ? "/pt" : "/";
  const homeName = lang === "pt" ? "Início" : "Home";
  const journalName = lang === "pt" ? "Diário" : "Journal";

  const collectionLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: idx.hero.h1,
    description: idx.meta.description,
    url: abs(path),
    inLanguage: lang === "pt" ? "pt-BR" : "en-US",
    publisher: PUBLISHER,
  };
  const bc = breadcrumbLd(lang, [
    { name: homeName, path: home },
    { name: journalName, path: path },
  ]);

  return {
    meta: [
      { title: idx.meta.title },
      { name: "description", content: idx.meta.description },
      { property: "og:title", content: idx.meta.title },
      { property: "og:description", content: idx.meta.description },
      { property: "og:url", content: abs(path) },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: lang === "pt" ? "pt_BR" : "en_US" },
      { property: "og:image", content: image },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: idx.meta.title },
      { name: "twitter:description", content: idx.meta.description },
      { name: "twitter:image", content: image },
    ],
    links: [
      { rel: "canonical", href: abs(path) },
      { rel: "alternate", hrefLang: "en", href: abs(BLOG_INDEX.en) },
      { rel: "alternate", hrefLang: "pt", href: abs(BLOG_INDEX.pt) },
      { rel: "alternate", hrefLang: "x-default", href: abs(BLOG_INDEX.en) },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(collectionLd) },
      { type: "application/ld+json", children: JSON.stringify(bc) },
    ],
  };
}

/** Head for an article page. `imageAbs` should be an absolute URL when provided. */
export function buildPostHead(key: PostKey, lang: Lang, imageAbs?: string) {
  const post = getPost(key, lang);
  const path = POST_SLUGS[key][lang];
  const enPath = POST_SLUGS[key].en;
  const ptPath = POST_SLUGS[key].pt;
  const image = imageAbs ?? abs(SITE_CONFIG.ogImagePath);
  const home = lang === "pt" ? "/pt" : "/";
  const homeName = lang === "pt" ? "Início" : "Home";
  const journalName = lang === "pt" ? "Diário" : "Journal";

  const postLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.hero.h1,
    description: post.meta.description,
    image: [image],
    author: AUTHOR,
    publisher: PUBLISHER,
    datePublished: post.datePublished,
    dateModified: post.dateModified,
    inLanguage: lang === "pt" ? "pt-BR" : "en-US",
    mainEntityOfPage: abs(path),
  };
  const bc = breadcrumbLd(lang, [
    { name: homeName, path: home },
    { name: journalName, path: BLOG_INDEX[lang] },
    { name: post.hero.h1, path: path },
  ]);

  return {
    meta: [
      { title: post.meta.title },
      { name: "description", content: post.meta.description },
      { property: "og:title", content: post.meta.title },
      { property: "og:description", content: post.meta.description },
      { property: "og:url", content: abs(path) },
      { property: "og:type", content: "article" },
      { property: "og:locale", content: lang === "pt" ? "pt_BR" : "en_US" },
      { property: "og:image", content: image },
      { property: "article:published_time", content: post.datePublished },
      { property: "article:modified_time", content: post.dateModified },
      { property: "article:author", content: "Larissa Ribeiro" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: post.meta.title },
      { name: "twitter:description", content: post.meta.description },
      { name: "twitter:image", content: image },
    ],
    links: [
      { rel: "canonical", href: abs(path) },
      { rel: "alternate", hrefLang: "en", href: abs(enPath) },
      { rel: "alternate", hrefLang: "pt", href: abs(ptPath) },
      { rel: "alternate", hrefLang: "x-default", href: abs(enPath) },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(postLd) },
      { type: "application/ld+json", children: JSON.stringify(bc) },
    ],
  };
}
