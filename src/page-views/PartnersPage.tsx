import type { Lang } from "@/i18n/routes";
import { getContent } from "@/i18n/content";
import { SITE_CONFIG } from "@/config/site";
import { SiteLayout } from "@/components/site/SiteLayout";
import { CTABanner } from "@/components/site/CTABanner";

export function PartnersPage({ lang }: { lang: Lang }) {
  const c = getContent(lang);
  const t = c.partners;

  return (
    <SiteLayout>
      {/* HERO */}
      <section className="container-editorial pt-16 pb-16 md:pt-24 md:pb-20">
        <div className="max-w-3xl">
          <div className="eyebrow mb-6">{t.hero.eyebrow}</div>
          <h1 className="text-balance">{t.hero.title}</h1>
          <p className="mt-8 text-lg md:text-xl text-navy/80 leading-relaxed">{t.hero.body}</p>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-sand/50 py-20 md:py-24">
        <div className="container-editorial max-w-3xl space-y-6 text-lg text-navy/80 leading-relaxed">
          {t.intro.map((p, i) => <p key={i}>{p}</p>)}
        </div>
      </section>

      {/* CATEGORIES */}
      {t.categories.map((cat, idx) => (
        <section
          key={cat.key}
          className={`py-24 md:py-32 ${idx % 2 === 1 ? "bg-sand/40" : ""}`}
        >
          <div className="container-editorial grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
            <div className="md:col-span-4">
              <div className="eyebrow mb-5">{cat.eyebrow}</div>
              <h2 className="text-balance">{cat.title}</h2>
              <p className="mt-6 font-serif text-xl text-gold italic leading-snug">
                {cat.lead}
              </p>
            </div>

            <div className="md:col-span-7 md:col-start-6 space-y-8">
              <div className="space-y-5 text-lg text-navy/80 leading-relaxed">
                {cat.body.map((p, i) => <p key={i}>{p}</p>)}
              </div>

              <div className="border-l-2 border-gold pl-6 md:pl-8 py-2">
                <h3 className="font-serif text-2xl text-navy">{cat.criteria.title}</h3>
                <ul className="mt-5 space-y-3 text-navy/80">
                  {cat.criteria.items.map((it) => (
                    <li key={it} className="grid grid-cols-[auto_1fr] gap-3">
                      <span className="text-gold pt-1" aria-hidden>·</span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="eyebrow mb-4">{cat.regionsLabel}</div>
                <ul className="flex flex-wrap gap-x-3 gap-y-2 text-sm text-navy/75">
                  {cat.regions.map((r) => (
                    <li
                      key={r}
                      className="border border-navy/15 px-3 py-1.5 rounded-full bg-ivory"
                    >
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* TRUST */}
      <section className="container-editorial py-24 md:py-32">
        <div className="max-w-3xl">
          <h2 className="text-balance">{t.trust.title}</h2>
          <div className="mt-8 space-y-5 text-lg text-navy/80 leading-relaxed">
            {t.trust.body.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="container-editorial pb-24 md:pb-32">
        <div className="max-w-3xl p-10 md:p-14 bg-sand/50 border-l-2 border-gold">
          <h2>{t.closing.title}</h2>
          <p className="mt-4 text-lg text-navy/80 leading-relaxed">{t.closing.body}</p>
          <div className="mt-8">
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
    </SiteLayout>
  );
}
