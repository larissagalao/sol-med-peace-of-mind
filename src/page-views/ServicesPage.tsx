import { Link } from "@tanstack/react-router";
import type { Lang } from "@/i18n/routes";
import { ROUTES } from "@/i18n/routes";
import { getContent } from "@/i18n/content";
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

      {/* PRICING / INVESTMENT */}
      <section className="bg-sand/50 py-24 md:py-32">
        <div className="container-editorial">
          <SectionHeader eyebrow={p.eyebrow} title={p.title} body={p.intro} align="center" />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            {p.tiers.map((tier) => (
              <article key={tier.label} className="bg-ivory border border-border p-10 flex flex-col">
                <div className="eyebrow mb-4">{tier.label}</div>
                <div className="font-serif text-3xl md:text-4xl text-navy leading-tight">{tier.range}</div>
                <p className="mt-6 text-navy/70 leading-relaxed text-base">{tier.note}</p>
              </article>
            ))}
          </div>

          <div className="mt-14 max-w-3xl mx-auto space-y-5 text-navy/80 leading-relaxed text-lg">
            <p className="italic">{p.disclaimer}</p>
            <p>{p.flexibility}</p>
            <p className="pt-4 border-t border-border">{p.venueNote}</p>
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

      {/* CONCIERGE */}
      <section className="bg-navy text-ivory py-24 md:py-32">
        <div className="container-editorial grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="eyebrow mb-5 text-gold-soft">+</div>
            <h2 className="text-ivory text-balance">{t.concierge.title}</h2>
            <p className="mt-6 text-lg text-ivory/80 leading-relaxed">{t.concierge.body}</p>
          </div>
          <ul className="md:col-span-6 md:col-start-7 grid grid-cols-1 gap-y-4">
            {t.concierge.items.map((it) => (
              <li key={it} className="flex items-start gap-4 py-3 border-b border-ivory/15">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold shrink-0" aria-hidden />
                <span className="text-ivory/90">{it}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTABanner />
      {/* silence unused import warning */}
      {false && <Link to={ROUTES.contact[lang]}>_</Link>}
    </SiteLayout>
  );
}
