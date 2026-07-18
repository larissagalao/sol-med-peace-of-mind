import { useLang } from "@/i18n/LanguageProvider";
import { getContent } from "@/i18n/content";
import { SITE_CONFIG } from "@/config/site";
import interiorImg from "@/assets/interior.jpg";

export function CTABanner() {
  const { lang } = useLang();
  const c = getContent(lang);
  return (
    <section className="relative isolate overflow-hidden bg-navy text-ivory">
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage: `url(${interiorImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/60" aria-hidden />
      <div className="relative container-editorial py-24 md:py-32">
        <div className="max-w-2xl">
          <div className="eyebrow text-gold-soft mb-6">{c.ctaBanner.eyebrow}</div>
          <h2 className="text-ivory text-balance">{c.ctaBanner.title}</h2>
          <p className="mt-6 text-lg text-ivory/80 max-w-xl leading-relaxed">{c.ctaBanner.body}</p>
          <div className="mt-10">
            <a
              href={SITE_CONFIG.discoveryCallUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ background: "var(--gold)", borderColor: "var(--gold)" }}
            >
              {c.ctaBanner.button}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
