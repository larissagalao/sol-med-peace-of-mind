// Bilingual route mapping: EN slug <-> PT slug. Used by the language switcher
// and the sitemap. Keys are "page ids"; values are the slug per language.

export type Lang = "en" | "pt";
export type PageId =
  | "home"
  | "about"
  | "services"
  | "destination"
  | "testimonials"
  | "partners"
  | "faq"
  | "contact";

export const ROUTES: Record<PageId, Record<Lang, string>> = {
  home:          { en: "/",                              pt: "/pt" },
  about:         { en: "/about",                         pt: "/pt/sobre" },
  services:      { en: "/services",                      pt: "/pt/servicos" },
  destination:   { en: "/destination-weddings/spain-regions", pt: "/pt/casamentos-destino/regioes-da-espanha" },
  testimonials:  { en: "/testimonials",                  pt: "/pt/depoimentos" },
  partners:      { en: "/partners",                      pt: "/pt/parceiros" },
  faq:           { en: "/faq",                           pt: "/pt/faq" },
  contact:       { en: "/contact",                       pt: "/pt/contato" },
};

// Note: "testimonials" is intentionally omitted from ALL_PAGE_IDS while the
// Real Wedding case study is hidden — this keeps it out of the sitemap and
// nav lookups. The route file still resolves for any existing links.
export const ALL_PAGE_IDS: PageId[] = [
  "home", "about", "services", "destination", "partners", "faq", "contact",
];

export function altPath(pageId: PageId, lang: Lang): string {
  return ROUTES[pageId][lang];
}

