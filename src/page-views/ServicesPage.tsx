import { Link } from "@tanstack/react-router";
import type { Lang } from "@/i18n/routes";
import { ROUTES } from "@/i18n/routes";
import { getContent } from "@/i18n/content";
import { POST_SLUGS } from "@/i18n/blog";
import { SITE_CONFIG } from "@/config/site";
import { SiteLayout } from "@/components/site/SiteLayout";
import { CTABanner } from "@/components/site/CTABanner";
import { SectionHeader } from "@/components/site/SectionHeader";

export function ServicesPage({ lang }: { lang: Lang }) {
  const c = getContent(lang);
  const t = c.services;
  const p = t.pricing;

  return (
    <SiteLayout>
      {/* HERO */}
      <section className="container-editorial pt-16 pb-16 md:pt-24 md:pb-20">
        <div className="max-w-3xl">
          <div className="eyebrow mb-6">{t.hero.eyebrow}</div>
          <h1 className="text-balance">{t.hero.title}</h1>
          <p className="mt-8 text-lg md:text-xl text-navy/80 leading-relaxed">{t.hero.body}</p>
          <p className="mt-6 text-navy/70 leading-relaxed max-w-2xl">{t.intro}</p>
        </div>
      </section>

      {/* SERVICE ITEMS */}
      <section className="container-editorial pb-24 md:pb-32">
        <div className="space-y-24 md:space-y-32">
          {t.items.map((s, i) => (
            <article key={s.name} className="grid grid-cols-1 md:grid-cols-12 gap-10 pt-16 border-t border-border">
              <div className="md:col-span-4">
                <div className="font-serif text-6xl text-gold/40 leading-none">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h2 className="mt-6 text-balance">{s.name}</h2>
                <p className="mt-4 text-lg italic text-gold font-serif">{s.tagline}</p>
              </div>
              <div className="md:col-span-7 md:col-start-6">
                <p className="text-lg text-navy/80 leading-relaxed">{s.body}</p>
                <div className="mt-10">
                  <div className="eyebrow mb-5">{c.common.learnMore}</div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8">
                    {s.includes.map((it) => (
                      <li key={it} className="flex items-start gap-3 text-navy/80">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold shrink-0" aria-hidden />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="mt-10 pt-6 border-t border-border text-sm text-navy/60">
                  <span className="eyebrow inline-block mr-3 align-middle">Ideal for</span>
                  <span className="italic">{s.idealFor}</span>
                </p>
                <div className="mt-8">
                  <a
                    href={SITE_CONFIG.discoveryCallUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline"
                  >
                    {c.common.startPlanning}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* INVESTMENT */}
      <section className="bg-sand/50 py-24 md:py-32">
        <div className="container-editorial">
          <SectionHeader eyebrow={p.eyebrow} title={p.title} body={p.intro} align="center" />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            {p.tiers.map((tier, i) => (
              <article key={tier.label} className="bg-ivory p-10 border border-border/60 flex flex-col">
                <div className="font-serif text-5xl text-gold/40 leading-none mb-6">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="text-navy text-xl">{tier.label}</h3>
                <p className="mt-4 font-serif text-2xl text-gold">{tier.range}</p>
                <p className="mt-4 text-navy/75 leading-relaxed text-base">{tier.note}</p>
              </article>
            ))}
          </div>
          <div className="mt-16 max-w-3xl mx-auto space-y-6 text-navy/75 leading-relaxed">
            <p>{p.disclaimer}</p>
            <p>{p.venueNote}</p>
            <p className="italic text-navy/80">{p.flexibility}</p>
          </div>
          <div className="mt-12 flex justify-center">
            <a
              href={SITE_CONFIG.discoveryCallUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              {c.common.bookCall}
            </a>
          </div>
        </div>
      </section>

      <CTABanner />
      {/* silence unused import warning */}
      {false && <Link to={ROUTES.contact[lang]}>_</Link>}
    </SiteLayout>
  );
}
