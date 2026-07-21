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

        <div className="relative container-editorial min-h-[86vh] md:min-h-[72vh] flex flex-col justify-end pb-28 md:pb-24 pt-8 md:pt-40">
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
              <a
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[0.72rem] tracking-[0.28em] uppercase font-medium text-navy hover:text-gold transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347zm-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884zm8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span>WhatsApp</span>
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
