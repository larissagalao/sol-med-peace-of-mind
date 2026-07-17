// Bilingual route mapping: EN slug <-> PT slug. Used by the language switcher
// and the sitemap. Keys are "page ids"; values are the slug per language.

export type Lang = "en" | "pt";
export type PageId =
  | "home"
  | "about"
  | "services"
  | "destination"
  | "testimonials"
  | "faq"
  | "contact";

export const ROUTES: Record<PageId, Record<Lang, string>> = {
  home:          { en: "/",                              pt: "/pt" },
  about:         { en: "/about",                         pt: "/pt/sobre" },
  services:      { en: "/services",                      pt: "/pt/servicos" },
  destination:   { en: "/destination-weddings-spain",    pt: "/pt/casar-na-espanha" },
  testimonials:  { en: "/testimonials",                  pt: "/pt/depoimentos" },
  faq:           { en: "/faq",                           pt: "/pt/faq" },
  contact:       { en: "/contact",                       pt: "/pt/contato" },
};

export const ALL_PAGE_IDS: PageId[] = [
  "home", "about", "services", "destination", "testimonials", "faq", "contact",
];

export function altPath(pageId: PageId, lang: Lang): string {
  return ROUTES[pageId][lang];
}
