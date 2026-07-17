import { Link } from "@tanstack/react-router";
import type { Lang } from "@/i18n/routes";
import { ROUTES } from "@/i18n/routes";
import { getContent } from "@/i18n/content";
import { SiteLayout } from "@/components/site/SiteLayout";
import { CTABanner } from "@/components/site/CTABanner";
import { FAQ } from "@/components/site/FAQ";

export function FaqPage({ lang }: { lang: Lang }) {
  const c = getContent(lang);
  const t = c.faq;

  return (
    <SiteLayout>
      <section className="container-editorial pt-16 pb-16 md:pt-24 md:pb-20">
        <div className="max-w-3xl">
          <div className="eyebrow mb-6">{t.hero.eyebrow}</div>
          <h1 className="text-balance">{t.hero.title}</h1>
          <p className="mt-8 text-lg md:text-xl text-navy/80 leading-relaxed">{t.hero.body}</p>
        </div>
      </section>

      <section className="container-editorial pb-24">
        <div className="max-w-4xl">
          <FAQ items={t.items} />
        </div>
      </section>

      <section className="container-editorial pb-24 md:pb-32">
        <div className="max-w-3xl p-10 md:p-14 bg-sand/50 border-l-2 border-gold">
          <h2>{t.closing.title}</h2>
          <p className="mt-4 text-lg text-navy/80 leading-relaxed">{t.closing.body}</p>
          <div className="mt-8">
            <Link to={ROUTES.contact[lang]} className="btn-primary">{c.common.bookCall}</Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </SiteLayout>
  );
}
