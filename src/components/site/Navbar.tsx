import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { useLang } from "@/i18n/LanguageProvider";
import { getContent } from "@/i18n/content";
import { ROUTES, ALL_PAGE_IDS, altPath, type PageId } from "@/i18n/routes";

const NAV_ITEMS: { id: PageId; key: keyof ReturnType<typeof getContent>["nav"] }[] = [
  { id: "about", key: "about" },
  { id: "services", key: "services" },
  { id: "destination", key: "destination" },
  { id: "testimonials", key: "testimonials" },
  { id: "faq", key: "faq" },
  { id: "contact", key: "contact" },
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

  // Find the current pageId to route the language switcher to its mirror.
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
          scrolled || open ? "bg-ivory/95 backdrop-blur-md border-b border-border" : "bg-transparent"
        }`}
      >
        <div className="container-editorial flex items-center justify-between py-5">
          <Link to={homeHref} className="flex items-center gap-3">
            <Logo variant="mark" className="w-8 h-8" />
            <span className="font-serif text-xl tracking-tight text-navy hidden sm:inline">
              Sol Mediterraneo
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.id}
                to={ROUTES[item.id][lang]}
                className="text-sm text-navy/80 hover:text-gold transition-colors font-medium"
                activeProps={{ className: "text-gold" }}
              >
                {c.nav[item.key]}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-1 text-xs tracking-widest">
              <button
                onClick={() => switchTo("en")}
                className={`px-1.5 py-1 uppercase transition-colors ${
                  lang === "en" ? "text-gold" : "text-navy/50 hover:text-navy"
                }`}
                aria-label="Switch to English"
              >
                EN
              </button>
              <span className="text-navy/30">/</span>
              <button
                onClick={() => switchTo("pt")}
                className={`px-1.5 py-1 uppercase transition-colors ${
                  lang === "pt" ? "text-gold" : "text-navy/50 hover:text-navy"
                }`}
                aria-label="Mudar para Português"
              >
                PT
              </button>
            </div>
            <Link to={ROUTES.contact[lang]} className="hidden md:inline-flex btn-primary text-[0.7rem] py-3 px-5">
              {c.nav.cta}
            </Link>
            <button
              className="lg:hidden text-navy p-2"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? c.nav.close : c.nav.menu}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
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

        {open && (
          <div className="lg:hidden border-t border-border bg-ivory">
            <div className="container-editorial py-6 flex flex-col gap-5">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.id}
                  to={ROUTES[item.id][lang]}
                  className="text-base font-serif text-navy"
                >
                  {c.nav[item.key]}
                </Link>
              ))}
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
              <Link to={ROUTES.contact[lang]} className="btn-primary self-start mt-2">
                {c.nav.cta}
              </Link>
            </div>
          </div>
        )}
      </header>
      {/* Spacer so fixed nav doesn't overlap content */}
      <div className="h-20" aria-hidden />
    </>
  );
}
