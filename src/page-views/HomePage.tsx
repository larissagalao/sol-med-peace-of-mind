import { Link } from "@tanstack/react-router";
import type { Lang } from "@/i18n/routes";
import { ROUTES } from "@/i18n/routes";
import { getContent } from "@/i18n/content";
import { SITE_CONFIG } from "@/config/site";
import { SiteLayout } from "@/components/site/SiteLayout";
import { CTABanner } from "@/components/site/CTABanner";
import { SectionHeader } from "@/components/site/SectionHeader";
import tablescape from "@/assets/tablescape.jpg";


export function HomePage({ lang }: { lang: Lang }) {
  const c = getContent(lang);
  const t = c.home;
  const heroImage = SITE_CONFIG.heroImage;

  return (
    <SiteLayout>
      {/* HERO — luminous editorial: light image, navy typography, generous negative space */}
      <section className="relative isolate -mt-24 md:-mt-28 pt-24 md:pt-28 overflow-hidden bg-ivory">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Sun-drenched Mediterranean terrace set for a wedding dinner, olive hills beyond"
            width={1920}
            height={1280}
            className="w-full h-full object-cover object-center"
            fetchPriority="high"
          />
          {/* Ivory kiss at top so the navbar reads, and a soft left-side veil so navy text sits on paler pixels. */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, color-mix(in oklab, var(--ivory) 82%, transparent) 0%, color-mix(in oklab, var(--ivory) 20%, transparent) 22%, transparent 55%)",
            }}
            aria-hidden
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, color-mix(in oklab, var(--ivory) 78%, transparent) 0%, color-mix(in oklab, var(--ivory) 45%, transparent) 32%, transparent 62%)",
            }}
            aria-hidden
          />
        </div>

        <div className="relative container-editorial min-h-[86vh] md:min-h-[92vh] flex flex-col justify-end pb-28 md:pb-36 pt-8">
          <div className="max-w-2xl fade-up">
            <div className="flex items-center gap-4 mb-8">
              <span className="h-px w-10 bg-gold" aria-hidden />
              <span className="eyebrow text-gold">{t.hero.eyebrow}</span>
            </div>
            <h1 className="text-navy text-balance whitespace-pre-line font-serif">
              {t.hero.title}
            </h1>
            <p className="mt-10 text-lg md:text-xl text-navy/75 max-w-xl leading-relaxed">
              {t.hero.body}
            </p>
            <div className="mt-12 flex flex-wrap items-center gap-6">
              <a
                href={SITE_CONFIG.discoveryCallUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                {t.hero.primary}
              </a>
              <Link
                to={ROUTES.services[lang]}
                className="text-[0.72rem] tracking-[0.28em] uppercase font-medium text-navy/70 hover:text-gold transition-colors underline-offset-8 underline decoration-gold/40 hover:decoration-gold"
              >
                {t.hero.secondary}
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll cue — a thin editorial line with a slow-traveling dot */}
        <a
          href="#promise"
          aria-label={c.common.scrollCue}
          className="absolute left-1/2 -translate-x-1/2 bottom-8 md:bottom-10 flex flex-col items-center gap-4 text-navy/70 hover:text-gold transition-colors group"
        >
          <span className="font-serif italic text-sm tracking-wide text-navy/70 group-hover:text-gold transition-colors">
            {c.common.scrollCue}
          </span>
          <span className="relative block h-14 w-px bg-navy/30 overflow-hidden">
            <span className="scroll-dot absolute left-1/2 -translate-x-1/2 top-0 block h-2 w-2 rounded-full bg-gold" />
          </span>
        </a>
      </section>


      {/* PROMISE */}
      <section id="promise" className="container-editorial py-24 md:py-32 scroll-mt-32">
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

      {/* SERVICES — HOW WE HELP */}
      <section className="relative py-24 md:py-32 bg-sand/50">
        <div className="container-editorial">
          <SectionHeader eyebrow={t.services.eyebrow} title={t.services.title} body={t.services.intro} align="center" />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.services.items.map((s, i) => (
              <article
                key={s.name}
                className="bg-ivory p-8 flex flex-col group hover:shadow-elegant transition-all duration-500 border border-border/60"
              >
                <div className="font-serif text-5xl text-gold/40 leading-none mb-6">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="text-navy text-xl">{s.name}</h3>
                <p className="mt-4 text-navy/75 leading-relaxed flex-1 text-base">{s.body}</p>
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

      {/* PROCESS — HOW WE WORK */}
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


      <CTABanner />
    </SiteLayout>
  );
}
