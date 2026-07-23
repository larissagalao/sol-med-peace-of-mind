import { Link } from "@tanstack/react-router";
import type { Lang } from "@/i18n/routes";
import { ROUTES } from "@/i18n/routes";
import {
  HUB_SLUGS,
  REGION_SLUGS,
  getHub,
  getRegion,
  type RegionKey,
  type RegionSection,
} from "@/i18n/regions";
import { SITE_CONFIG } from "@/config/site";
import { POST_SLUGS } from "@/i18n/blog";
import { SiteLayout } from "@/components/site/SiteLayout";
import { CTABanner } from "@/components/site/CTABanner";
import catalonia from "@/assets/catalonia.jpg";
import costaBrava from "@/assets/costa-brava.jpg";
import ibiza from "@/assets/ibiza.jpg";
import mallorca from "@/assets/mallorca.jpg";
import andalusia from "@/assets/andalusia.jpg";
import interior from "@/assets/interior.jpg";

const IMAGES: Record<RegionKey, string> = {
  catalonia,
  "costa-brava": costaBrava,
  ibiza,
  mallorca,
  granada: interior,
  seville: andalusia,
};

function Block({ section }: { section: RegionSection }) {
  return (
    <section className="scroll-mt-32">
      <h2 className="text-balance">{section.title}</h2>
      <div className="mt-5 space-y-4 text-lg text-navy/80 leading-relaxed">
        {section.body.map((p, i) => <p key={i}>{p}</p>)}
      </div>
      {section.list && (
        <ul className="mt-6 space-y-3">
          {section.list.map((it) => (
            <li key={it} className="flex gap-3 text-navy/85 leading-relaxed">
              <span className="text-gold pt-1">•</span>
              <span>{it}</span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export function RegionPage({ regionKey, lang }: { regionKey: RegionKey; lang: Lang }) {
  const r = getRegion(regionKey, lang);
  const hub = getHub(lang);
  const path = REGION_SLUGS[regionKey][lang];
  const image = IMAGES[regionKey];

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: lang === "pt" ? "Início" : "Home", item: `${SITE_CONFIG.url}${ROUTES.home[lang]}` },
      { "@type": "ListItem", position: 2, name: hub.hero.h1, item: `${SITE_CONFIG.url}${HUB_SLUGS[lang]}` },
      { "@type": "ListItem", position: 3, name: r.hero.h1, item: `${SITE_CONFIG.url}${path}` },
    ],
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: r.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <SiteLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <img
          src={image}
          alt={`${r.hero.h1}`}
          width={1600}
          height={1000}
          className="absolute inset-0 w-full h-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ivory/85 via-ivory/55 to-ivory" aria-hidden />
        <div className="relative container-editorial py-24 md:py-32">
          <div className="max-w-3xl">
            <div className="text-sm text-navy/60 mb-4">
              <Link to={HUB_SLUGS[lang]} className="hover:text-gold transition-colors">
                {hub.hero.h1}
              </Link>
            </div>
            <div className="eyebrow mb-6">{r.hero.eyebrow}</div>
            <h1 className="text-balance">{r.hero.h1}</h1>
            <p className="mt-8 text-lg md:text-xl text-navy/80 leading-relaxed max-w-2xl">{r.hero.intro}</p>
          </div>
        </div>
      </section>

      {/* BODY */}
      <article className="container-editorial py-16 md:py-24">
        <div className="max-w-3xl space-y-16">
          <Block section={r.character} />
          <Block section={r.venueTypes} />
          <Block section={r.ceremony} />
          <Block section={r.season} />
          <Block section={r.gettingThere} />
          <Block section={r.sampleDay} />

          {/* FAQ */}
          <section>
            <h2>{lang === "pt" ? "Perguntas frequentes" : "Frequently asked"}</h2>
            <dl className="mt-6 space-y-6">
              {r.faq.map((f) => (
                <div key={f.q}>
                  <dt className="font-serif text-xl text-navy">{f.q}</dt>
                  <dd className="mt-2 text-navy/75 leading-relaxed">{f.a}</dd>
                </div>
              ))}
            </dl>
          </section>
        </div>
      </article>

      {/* RELATED */}
      <section className="bg-ivory-warm">
        <div className="container-editorial py-20">
          <div className="eyebrow mb-5">{lang === "pt" ? "Também poderá gostar" : "You may also like"}</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {r.related.map((key) => {
              const card = hub.cards[key];
              return (
                <Link
                  key={key}
                  to={REGION_SLUGS[key][lang]}
                  className="group flex gap-5 items-center"
                >
                  <div className="w-28 h-32 shrink-0 overflow-hidden bg-navy/5">
                    <img
                      src={IMAGES[key]}
                      alt={card.name}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-navy group-hover:text-gold transition-colors">{card.name}</h3>
                    <p className="mt-1 text-sm text-navy/70 leading-relaxed">{card.blurb}</p>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="mt-10">
            <Link to={HUB_SLUGS[lang]} className="text-sm tracking-widest uppercase text-gold hover:text-navy transition-colors">
              {lang === "pt" ? "Ver todas as regiões" : "See all regions"} →
            </Link>
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="container-editorial py-20">
        <div className="max-w-2xl">
          <h2 className="text-balance">{r.closing.title}</h2>
          <p className="mt-6 text-lg text-navy/80 leading-relaxed">{r.closing.body}</p>
        </div>
      </section>

      <CTABanner />
    </SiteLayout>
  );
}
