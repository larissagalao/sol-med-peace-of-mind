import { Link } from "@tanstack/react-router";
import { useLang } from "@/i18n/LanguageProvider";
import { getContent } from "@/i18n/content";
import { ROUTES } from "@/i18n/routes";
import { Logo } from "./Logo";

export function Footer() {
  const { lang } = useLang();
  const c = getContent(lang);
  const year = new Date().getFullYear();

  const explore: { label: string; href: string }[] = [
    { label: c.nav.about, href: ROUTES.about[lang] },
    { label: c.nav.services, href: ROUTES.services[lang] },
    { label: c.nav.destination, href: ROUTES.destination[lang] },
    { label: c.nav.testimonials, href: ROUTES.testimonials[lang] },
    { label: c.nav.faq, href: ROUTES.faq[lang] },
  ];

  return (
    <footer className="bg-navy text-ivory mt-24">
      <div className="container-editorial py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <Logo variant="mark" color="ivory" className="w-10 h-10 mb-6" />
            <p className="font-serif text-2xl leading-snug text-ivory/95 max-w-sm">
              {c.footer.tagline}
            </p>
            <p className="mt-6 text-sm text-ivory/60 max-w-sm leading-relaxed">
              {c.footer.based}
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="eyebrow text-gold-soft mb-5">{c.footer.columns.explore}</div>
            <ul className="space-y-3">
              {explore.map((l) => (
                <li key={l.href}>
                  <Link to={l.href} className="text-sm text-ivory/80 hover:text-gold transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="eyebrow text-gold-soft mb-5">{c.footer.columns.contact}</div>
            <a
              href={`mailto:${c.footer.email}`}
              className="font-serif text-2xl text-ivory hover:text-gold transition-colors block"
            >
              {c.footer.email}
            </a>
            <Link
              to={ROUTES.contact[lang]}
              className="mt-6 inline-flex items-center gap-2 text-sm tracking-widest uppercase text-gold hover:text-ivory transition-colors"
            >
              {c.nav.cta} →
            </Link>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-ivory/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 text-xs text-ivory/50">
          <span>© {year} Sol Mediterraneo Weddings Co. {c.footer.rights}</span>
          <span>{c.footer.legal}</span>
        </div>
      </div>
    </footer>
  );
}
