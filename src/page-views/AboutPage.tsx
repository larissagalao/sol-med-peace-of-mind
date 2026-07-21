import type { Lang } from "@/i18n/routes";
import { getContent } from "@/i18n/content";
import { SITE_CONFIG } from "@/config/site";
import { SiteLayout } from "@/components/site/SiteLayout";
import { CTABanner } from "@/components/site/CTABanner";
import { SectionHeader } from "@/components/site/SectionHeader";
import interior from "@/assets/interior.jpg";
import oliveGrove from "@/assets/olive-grove.jpg";
import founderPortrait from "@/assets/founder.jpg";

export function AboutPage({ lang }: { lang: Lang }) {
  const c = getContent(lang);
  const t = c.about;

  return (
    <SiteLayout>
      {/* HERO */}
      <section className="container-editorial pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
          <div className="md:col-span-7 fade-up">
            <div className="eyebrow mb-6">{t.hero.eyebrow}</div>
            <h1 className="text-balance">{t.hero.title}</h1>
            <p className="mt-8 text-lg md:text-xl text-navy/80 max-w-2xl leading-relaxed">
              {t.hero.body}
            </p>
          </div>
          <div className="md:col-span-5">
            <img
              src={interior}
              alt="Whitewashed Mediterranean villa interior with terracotta floor"
              loading="lazy"
              width={1400}
              height={1600}
              className="w-full h-auto shadow-elegant"
            />
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="bg-sand/50 py-24 md:py-32">
        <div className="container-editorial grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <div className="eyebrow mb-5">01</div>
            <h2 className="text-balance">{t.story.title}</h2>
          </div>
          <div className="md:col-span-7 md:col-start-6 space-y-6 text-lg text-navy/80 leading-relaxed">
            {t.story.body.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </div>
      </section>

      {/* FOUNDER — hidden until portrait photo is available.
      <section className="container-editorial py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">
          <div className="md:col-span-5">
            <div className="relative">
              <img
                src={founderPortrait}
                alt={`${t.founder.name}, ${t.founder.role}`}
                loading="lazy"
                width={900}
                height={1200}
                className="w-full h-auto shadow-elegant"
              />
              <div className="absolute -bottom-4 -right-4 hidden md:block w-24 h-24 border border-gold/60" aria-hidden />
            </div>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <div className="eyebrow mb-5">{t.founder.eyebrow}</div>
            <h2 className="text-balance">{t.founder.title}</h2>
            <p className="mt-6 font-serif text-xl text-gold italic">
              {t.founder.name} <span className="text-navy/50 not-italic text-base tracking-widest uppercase ml-2">· {t.founder.role}</span>
            </p>
            <div className="mt-8 space-y-5 text-lg text-navy/80 leading-relaxed">
              {t.founder.body.map((p, i) => <p key={i}>{p}</p>)}
            </div>
            <p className="mt-8 font-serif text-2xl text-navy italic">{t.founder.signature}</p>
          </div>
        </div>
      </section>
      */}




      {/* TRUST */}
      <section className="bg-sand/40 py-24 md:py-32">
        <div className="container-editorial">
          <SectionHeader eyebrow="02" title={t.trust.title} align="center" />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-14">
            {t.trust.items.map((it, i) => (
              <article key={it.name} className="grid grid-cols-[auto_1fr] gap-6">
                <span className="font-serif text-3xl text-gold leading-none pt-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-xl font-serif text-navy">{it.name}</h3>
                  <p className="mt-3 text-navy/75 leading-relaxed">{it.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="relative isolate overflow-hidden">
        <img
          src={oliveGrove}
          alt="Olive grove in Andalusia at golden hour"
          loading="lazy"
          width={1600}
          height={1100}
          className="w-full h-[70vh] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/40 to-transparent" aria-hidden />
        <div className="absolute inset-0 flex items-end">
          <div className="container-editorial pb-20 md:pb-28 text-ivory">
            <div className="max-w-2xl">
              <div className="eyebrow mb-5 text-gold-soft">03</div>
              <h2 className="text-ivory text-balance">{t.philosophy.title}</h2>
              <div className="mt-6 space-y-5 text-lg text-ivory/85 leading-relaxed">
                {t.philosophy.body.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="container-editorial py-24 md:py-32">
        <SectionHeader eyebrow="04" title={t.howWeWork.title} />
        <ol className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-14">
          {t.howWeWork.steps.map((step, i) => (
            <li key={step.name} className="pt-8 border-t border-border">
              <div className="font-serif text-5xl text-gold/50 mb-4">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="text-navy">{step.name}</h3>
              <p className="mt-3 text-navy/75 leading-relaxed">{step.body}</p>
            </li>
          ))}
        </ol>
        <div className="mt-16 flex flex-wrap gap-4">
          <a
            href={SITE_CONFIG.discoveryCallUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            {c.common.bookCall}
          </a>
        </div>
      </section>

      <CTABanner />
    </SiteLayout>
  );
}
