import { Link } from "@tanstack/react-router";
import type { Lang } from "@/i18n/routes";
import { ROUTES } from "@/i18n/routes";
import { getContent } from "@/i18n/content";
import { SiteLayout } from "@/components/site/SiteLayout";
import { CTABanner } from "@/components/site/CTABanner";
import { SectionHeader } from "@/components/site/SectionHeader";
import heroVilla from "@/assets/hero-villa.jpg";
import tablescape from "@/assets/tablescape.jpg";
import costaBrava from "@/assets/costa-brava.jpg";
import mallorca from "@/assets/mallorca.jpg";
import ibiza from "@/assets/ibiza.jpg";
import barcelona from "@/assets/barcelona.jpg";
import oliveGrove from "@/assets/olive-grove.jpg";

const REGION_IMAGES = [barcelona, costaBrava, mallorca, ibiza, oliveGrove];

export function HomePage({ lang }: { lang: Lang }) {
  const c = getContent(lang);
  const t = c.home;

  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative isolate -mt-20 pt-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroVilla}
            alt="Mediterranean villa terrace set for a wedding dinner at golden hour"
            width={1920}
            height={1280}
            className="w-full h-full object-cover"
            fetchPriority="high"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, color-mix(in oklab, var(--ivory) 85%, transparent) 0%, color-mix(in oklab, var(--ivory) 30%, transparent) 40%, color-mix(in oklab, var(--navy) 30%, transparent) 100%)",
            }}
            aria-hidden
          />
        </div>
        <div className="relative container-editorial min-h-[92vh] flex flex-col justify-end pb-20 md:pb-32">
          <div className="max-w-3xl fade-up">
            <div className="eyebrow mb-6 text-gold">{t.hero.eyebrow}</div>
            <h1 className="text-navy text-balance whitespace-pre-line">{t.hero.title}</h1>
            <p className="mt-8 text-lg md:text-xl text-navy/80 max-w-2xl leading-relaxed">
              {t.hero.body}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to={ROUTES.contact[lang]} className="btn-primary">
                {t.hero.primary}
              </Link>
              <Link to={ROUTES.services[lang]} className="btn-outline">
                {t.hero.secondary}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-y border-border bg-sand/40">
        <div className="container-editorial py-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-4 text-navy/70">
          {t.trust.map((item) => (
            <div key={item.label} className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-gold" aria-hidden />
              <span className="text-xs tracking-[0.25em] uppercase font-medium">{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* PROMISE */}
      <section className="container-editorial py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-5">
            <div className="eyebrow mb-5">{t.promise.eyebrow}</div>
            <h2 className="text-balance">{t.promise.title}</h2>
          </div>
          <div className="md:col-span-6 md:col-start-7 space-y-6 text-lg text-navy/80 leading-relaxed">
            {t.promise.body.map((p, i) => <p key={i}>{p}</p>)}
            <div className="pt-4">
              <Link to={ROUTES.about[lang]} className="btn-ghost-gold">
                {c.common.learnMore} →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="relative py-24 md:py-32 bg-sand/50">
        <div className="container-editorial">
          <SectionHeader eyebrow={t.services.eyebrow} title={t.services.title} body={t.services.intro} align="center" />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.services.items.map((s, i) => (
              <article
                key={s.name}
                className="bg-ivory p-10 flex flex-col group hover:shadow-elegant transition-all duration-500 border border-border/60"
              >
                <div className="font-serif text-6xl text-gold/40 leading-none mb-6">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="text-navy">{s.name}</h3>
                <p className="mt-4 text-navy/75 leading-relaxed flex-1">{s.body}</p>
                <Link
                  to={ROUTES.services[lang]}
                  className="mt-8 inline-flex items-center gap-2 text-xs tracking-widest uppercase text-gold group-hover:gap-3 transition-all"
                >
                  {c.common.learnMore} →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* EDITORIAL IMAGE + PROCESS */}
      <section className="container-editorial py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5">
            <img
              src={tablescape}
              alt="Long wedding table under an olive tree in the Spanish countryside"
              loading="lazy"
              width={1600}
              height={1200}
              className="w-full h-auto shadow-elegant"
            />
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <div className="eyebrow mb-5">{t.process.eyebrow}</div>
            <h2 className="text-balance">{t.process.title}</h2>
            <p className="mt-6 text-navy/75 leading-relaxed">{t.process.intro}</p>
            <ol className="mt-10 space-y-8">
              {t.process.steps.map((step, i) => (
                <li key={step.name} className="grid grid-cols-[auto_1fr] gap-6 items-start">
                  <span className="font-serif text-2xl text-gold pt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-xl font-serif text-navy">{step.name}</h3>
                    <p className="mt-2 text-navy/70 leading-relaxed">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* REGIONS */}
      <section className="py-24 md:py-32 bg-navy text-ivory">
        <div className="container-editorial">
          <div className="max-w-3xl">
            <div className="eyebrow mb-5 text-gold-soft">{t.regions.eyebrow}</div>
            <h2 className="text-ivory text-balance">{t.regions.title}</h2>
            <p className="mt-6 text-lg text-ivory/75 leading-relaxed">{t.regions.intro}</p>
          </div>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-5 gap-4">
            {t.regions.items.map((r, i) => (
              <article key={r.name} className="group">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={REGION_IMAGES[i]}
                    alt={r.name}
                    loading="lazy"
                    width={800}
                    height={1000}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-5 text-ivory text-2xl">{r.name}</h3>
                <p className="mt-2 text-sm text-ivory/70 leading-relaxed">{r.body}</p>
              </article>
            ))}
          </div>
          <div className="mt-16">
            <Link
              to={ROUTES.destination[lang]}
              className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-gold hover:text-ivory transition-colors"
            >
              {c.common.viewAll} →
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL PREVIEW */}
      <section className="container-editorial py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="eyebrow mb-8 flex justify-center">{t.testimonialsSection.eyebrow}</div>
          <blockquote className="font-serif text-3xl md:text-4xl leading-snug text-navy text-balance">
            "{c.testimonials.items[0].quote}"
          </blockquote>
          <div className="mt-10 flex flex-col items-center gap-1">
            <div className="hairline mb-4" />
            <div className="text-sm tracking-widest uppercase text-navy">
              {c.testimonials.items[0].couple}
            </div>
            <div className="text-xs text-navy/60">
              {c.testimonials.items[0].origin} · {c.testimonials.items[0].region}
            </div>
          </div>
          <div className="mt-12">
            <Link to={ROUTES.testimonials[lang]} className="btn-ghost-gold">
              {c.common.viewAll} →
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </SiteLayout>
  );
}
