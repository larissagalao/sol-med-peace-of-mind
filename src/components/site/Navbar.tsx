import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { useLang } from "@/i18n/LanguageProvider";
import { getContent } from "@/i18n/content";
import { ROUTES, ALL_PAGE_IDS, altPath, type PageId } from "@/i18n/routes";
import { BLOG_INDEX } from "@/i18n/blog";
import { SITE_CONFIG } from "@/config/site";

// Nav items include the blog ("journal") as an extra item that maps to a
// direct href per language rather than the PageId system.
type NavItem =
  | { id: PageId; kind: "page" }
  | { id: "journal"; kind: "extra"; label: { en: string; pt: string }; href: { en: string; pt: string } };

const NAV_ITEMS: NavItem[] = [
  { id: "home", kind: "page" },
  { id: "about", kind: "page" },
  { id: "services", kind: "page" },
  { id: "destination", kind: "page" },
  { id: "partners", kind: "page" },
  { id: "journal", kind: "extra", label: { en: "Journal", pt: "Diário" }, href: BLOG_INDEX },
  { id: "faq", kind: "page" },
  { id: "contact", kind: "page" },
];


export function Navbar() {
  const { lang, setLang } = useLang();
  const c = getContent(lang);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const homeHref = ROUTES.home[lang];

  const currentPageId: PageId =
    (ALL_PAGE_IDS.find(
      (id) => ROUTES[id].en === pathname || ROUTES[id].pt === pathname,
    ) as PageId | undefined) ?? "home";

  const switchTo = (target: "en" | "pt") => {
    setLang(target);
    const href = altPath(currentPageId, target);
    if (typeof window !== "undefined") window.location.href = href;
  };

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
          scrolled || open
            ? "bg-ivory/95 backdrop-blur-md border-b border-border/70 shadow-[0_1px_0_0_color-mix(in_oklab,var(--gold)_20%,transparent)]"
            : "bg-transparent"
        }`}
      >
        {/* Row 1 — mark centered, lang & CTA flank */}
        <div className="container-editorial grid grid-cols-3 items-center pt-4 pb-3">
          <div className="hidden md:flex items-center gap-3 text-[0.68rem] tracking-[0.28em] uppercase">
            <button
              onClick={() => switchTo("en")}
              className={`transition-colors ${lang === "en" ? "text-gold" : "text-navy/50 hover:text-navy"}`}
              aria-label="Switch to English"
            >
              EN
            </button>
            <span className="text-navy/25">·</span>
            <button
              onClick={() => switchTo("pt")}
              className={`transition-colors ${lang === "pt" ? "text-gold" : "text-navy/50 hover:text-navy"}`}
              aria-label="Mudar para Português"
            >
              PT
            </button>
          </div>

          <div className="col-start-1 md:col-start-2 flex justify-start md:justify-center">
            <Link
              to={homeHref}
              className="flex items-center gap-3 md:flex-col md:gap-1"
              aria-label={c.nav.home}
            >
              <Logo variant="mark" className="w-14 h-10 md:w-20 md:h-14" />
              <span className="font-serif text-navy tracking-[0.22em] uppercase text-[0.7rem] md:text-[0.72rem] leading-none">
                Sol Mediterraneo
              </span>
            </Link>
          </div>

          <div className="col-start-3 flex items-center justify-end gap-3">
            <a
              href={SITE_CONFIG.discoveryCallUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex btn-primary text-[0.65rem] py-2.5 px-4"
            >
              {c.nav.cta}
            </a>
            <button
              className="lg:hidden text-navy p-2"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? c.nav.close : c.nav.menu}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                {open ? (
                  <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" />
                ) : (
                  <>
                    <path d="M4 8h16" strokeLinecap="round" />
                    <path d="M4 16h16" strokeLinecap="round" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Row 2 — nav links, generously spaced, editorial hairline above */}
        <nav
          className={`hidden lg:block border-t transition-colors ${
            scrolled ? "border-border/60" : "border-navy/10"
          }`}
        >
          <ul className="container-editorial flex items-center justify-center gap-x-12 py-3">
            {NAV_ITEMS.map((item) => {
              const href = item.kind === "page" ? ROUTES[item.id][lang] : item.href[lang];
              const label =
                item.kind === "page"
                  ? c.nav[item.id as keyof typeof c.nav]
                  : item.label[lang];
              return (
                <li key={item.id}>
                  <Link
                    to={href}
                    className="relative text-[0.72rem] tracking-[0.28em] uppercase text-navy/70 hover:text-gold transition-colors font-medium"
                    activeProps={{ className: "text-gold" }}
                    activeOptions={{ exact: item.id === "home" }}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {open && (
          <div className="lg:hidden border-t border-border bg-ivory">
            <div className="container-editorial py-6 flex flex-col gap-5">
              {NAV_ITEMS.map((item) => {
                const href = item.kind === "page" ? ROUTES[item.id][lang] : item.href[lang];
                const label =
                  item.kind === "page"
                    ? c.nav[item.id as keyof typeof c.nav]
                    : item.label[lang];
                return (
                  <Link
                    key={item.id}
                    to={href}
                    className="text-base font-serif text-navy tracking-wide"
                  >
                    {label}
                  </Link>
                );
              })}
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <button
                  onClick={() => switchTo("en")}
                  className={`text-xs tracking-widest uppercase ${lang === "en" ? "text-gold" : "text-navy/60"}`}
                >
                  EN
                </button>
                <span className="text-navy/30">/</span>
                <button
                  onClick={() => switchTo("pt")}
                  className={`text-xs tracking-widest uppercase ${lang === "pt" ? "text-gold" : "text-navy/60"}`}
                >
                  PT
                </button>
              </div>
              <a
                href={SITE_CONFIG.discoveryCallUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary self-start mt-2"
              >
                {c.nav.cta}
              </a>
            </div>
          </div>
        )}
      </header>
      {/* Two-row navbar reserves more space */}
      <div className="h-24 md:h-28" aria-hidden />
    </>
  );
}
