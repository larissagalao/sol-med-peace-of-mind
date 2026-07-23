import { Link } from "@tanstack/react-router";
import type { Lang } from "@/i18n/routes";
import { ROUTES } from "@/i18n/routes";
import {
  HUB_SLUGS,
  REGION_KEYS,
  REGION_SLUGS,
  getHub,
  type RegionKey,
} from "@/i18n/regions";
import { SITE_CONFIG } from "@/config/site";
import { SiteLayout } from "@/components/site/SiteLayout";
import { CTABanner } from "@/components/site/CTABanner";
import { SectionHeader } from "@/components/site/SectionHeader";
import catalonia from "@/assets/catalonia.jpg";
import costaBrava from "@/assets/costa-brava.jpg";
import ibiza from "@/assets/ibiza.jpg";
import mallorca from "@/assets/mallorca.jpg";
import andalusia from "@/assets/andalusia.jpg";
import interior from "@/assets/interior.jpg";
import oliveGrove from "@/assets/olive-grove.jpg";

const IMAGES: Record<RegionKey, string> = {
  catalonia,
  "costa-brava": costaBrava,
  ibiza,
  mallorca,
  granada: interior,
  seville: andalusia,
};

export function RegionHubPage({ lang }: { lang: Lang }) {
  const t = getHub(lang);
  const path = HUB_SLUGS[lang];

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: lang === "pt" ? "Início" : "Home", item: `${SITE_CONFIG.url}${ROUTES.home[lang]}` },
      { "@type": "ListItem", position: 2, name: t.hero.h1, item: `${SITE_CONFIG.url}${path}` },
    ],
  };

  const itemListLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: REGION_KEYS.map((key, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${SITE_CONFIG.url}${REGION_SLUGS[key][lang]}`,
      name: t.cards[key].name,
    })),
  };

  return (
    <SiteLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListLd) }} />

      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <img
          src={oliveGrove}
          alt={lang === "pt" ? "Olival na Espanha ao pôr do sol" : "Olive grove in Spain at golden hour"}
          width={1600}
          height={1000}
          className="absolute inset-0 w-full h-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ivory/85 via-ivory/60 to-ivory" aria-hidden />
        <div className="relative container-editorial py-24 md:py-32">
          <div className="max-w-3xl">
            <div className="eyebrow mb-6">{t.hero.eyebrow}</div>
            <h1 className="text-balance">{t.hero.h1}</h1>
            <p className="mt-8 text-lg md:text-xl text-navy/80 leading-relaxed max-w-2xl">{t.hero.intro}</p>
          </div>
        </div>
      </section>

      {/* LEAD */}
      <section className="container-editorial py-16 md:py-24">
        <div className="max-w-3xl space-y-5 text-lg text-navy/80 leading-relaxed">
          {t.lead.map((p, i) => <p key={i}>{p}</p>)}
        </div>
      </section>

      {/* PRIMER — short intro links to core reads */}
      <section className="border-y border-border/60 bg-ivory-warm">
        <div className="container-editorial py-16 md:py-20">
          <SectionHeader title={t.primer.title} body={t.primer.body} />
          <ul className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-6 max-w-5xl">
            {t.primer.items.map((it) => (
              <li key={it.href}>
                <a
                  href={it.href}
                  className="group block border-t border-navy/15 pt-4 hover:border-gold transition-colors"
                >
                  <div className="eyebrow text-navy group-hover:text-gold transition-colors">
                    {it.label}
                  </div>
                  <p className="mt-2 text-navy/75 leading-relaxed">{it.body}</p>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>


      {/* CHOOSE */}
      <section className="bg-ivory-warm">
        <div className="container-editorial py-20 md:py-28">
          <SectionHeader title={t.choose.title} body={t.choose.body} />
          <ul className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-5 max-w-4xl">
            {t.choose.questions.map((q, i) => (
              <li key={i} className="flex gap-4 text-navy/85 leading-relaxed">
                <span className="eyebrow text-gold shrink-0 pt-1">{String(i + 1).padStart(2, "0")}</span>
                <span>{q}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* REGIONS GRID */}
      <section className="container-editorial py-20 md:py-28">
        <SectionHeader title={t.regionsIntro.title} body={t.regionsIntro.body} />
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {REGION_KEYS.map((key) => {
            const card = t.cards[key];
            return (
              <Link
                key={key}
                to={REGION_SLUGS[key][lang]}
                className="group block"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-navy/5">
                  <img
                    src={IMAGES[key]}
                    alt={`${card.name} — ${card.blurb}`}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" aria-hidden />
                </div>
                <div className="pt-6">
                  <h3 className="font-serif text-2xl text-navy group-hover:text-gold transition-colors">{card.name}</h3>
                  <p className="mt-2 text-navy/75 leading-relaxed">{card.blurb}</p>
                  <p className="mt-3 text-sm text-navy/55 italic">{card.bestFor}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* CLOSING */}
      <section className="container-editorial pb-8">
        <div className="max-w-2xl">
          <h2 className="text-balance">{t.closing.title}</h2>
          <p className="mt-6 text-lg text-navy/80 leading-relaxed">{t.closing.body}</p>
        </div>
      </section>

      <CTABanner />
    </SiteLayout>
  );
}
