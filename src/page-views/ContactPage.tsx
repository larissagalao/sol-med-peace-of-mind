import { useState } from "react";
import type { Lang } from "@/i18n/routes";
import { getContent } from "@/i18n/content";
import { SiteLayout } from "@/components/site/SiteLayout";

// Google Apps Script web app that records the submission in the Contatos sheet
// and emails contacto@solmediterraneoweddings.com.
const CONTACT_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbxsTpTfYNw-cAiWTd3TY0SSvVodTrsG9_j3ggNZP7C8Fbz2p3nzgkf14YbRUtjEnIUn/exec";

type Status = "idle" | "sending" | "success" | "error";

export function ContactPage({ lang }: { lang: Lang }) {
  const c = getContent(lang);
  const t = c.contact;
  const f = t.formLabels;
  const [status, setStatus] = useState<Status>("idle");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    setStatus("sending");
    try {
      const res = await fetch(CONTACT_ENDPOINT, {
        method: "POST",
        // text/plain keeps this a "simple" request and avoids a CORS preflight
        // that the Apps Script endpoint does not answer.
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({ ...data, lang }),
      });
      const result = await res.json();
      if (!res.ok || !result?.success) throw new Error(result?.error || "Request failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <SiteLayout>
      <section className="container-editorial pt-16 pb-16 md:pt-24 md:pb-20">
        <div className="max-w-3xl">
          <div className="eyebrow mb-6">{t.hero.eyebrow}</div>
          <h1 className="text-balance">{t.hero.title}</h1>
          <p className="mt-8 text-lg md:text-xl text-navy/80 leading-relaxed">{t.hero.body}</p>
        </div>
      </section>

      <section className="container-editorial pb-24 md:pb-32">
        {status === "success" ? (
          <div className="max-w-2xl mx-auto text-center py-24">
            <div className="eyebrow mb-6 flex justify-center">✓</div>
            <h2 className="text-balance">{t.success.title}</h2>
            <p className="mt-6 text-lg text-navy/80 leading-relaxed">{t.success.body}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* TRUST SIDEBAR */}
            <aside className="lg:col-span-4">
              <div className="p-8 bg-sand/50 border border-border sticky top-28">
                <div className="eyebrow mb-5">{t.trustTitle}</div>
                <ol className="space-y-5">
                  {t.trustPoints.map((p, i) => (
                    <li key={i} className="grid grid-cols-[auto_1fr] gap-4">
                      <span className="font-serif text-xl text-gold leading-none">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-sm text-navy/80 leading-relaxed">{p}</span>
                    </li>
                  ))}
                </ol>
                <div className="mt-8 pt-6 border-t border-border">
                  <div className="text-xs text-navy/60 mb-2">{t.directContact.label}</div>
                  <a href={`mailto:${t.directContact.email}`} className="font-serif text-lg text-navy hover:text-gold transition-colors">
                    {t.directContact.email}
                  </a>
                </div>
              </div>
            </aside>

            {/* FORM */}
            <form onSubmit={onSubmit} className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
              <Field label={f.name} name="name" placeholder={f.placeholders.name} required />
              <Field label={f.partner} name="partner" placeholder={f.placeholders.partner} />
              <Field label={f.email} name="email" type="email" placeholder={f.placeholders.email} required className="md:col-span-2" />
              <Field label={f.date} name="date" type="month" />
              <SelectField label={f.region} name="region" options={f.regionOptions} />
              <SelectField label={f.guests} name="guests" options={f.guestOptions} />
              <SelectField label={f.budget} name="budget" options={f.budgetOptions} />
              <div className="md:col-span-2">
                <label className="eyebrow block mb-3">{f.message}</label>
                <textarea
                  name="message"
                  rows={5}
                  placeholder={f.placeholders.message}
                  className="w-full bg-ivory border border-input px-4 py-3 text-navy focus:border-gold focus:outline-none transition-colors resize-none"
                />
              </div>
              {status === "error" && (
                <div className="md:col-span-2 p-5 bg-sand/60 border border-gold/40" role="alert">
                  <div className="font-serif text-lg text-navy">{t.error.title}</div>
                  <p className="mt-2 text-sm text-navy/80 leading-relaxed">{t.error.body}</p>
                </div>
              )}
              <div className="md:col-span-2 pt-4">
                <button type="submit" className="btn-primary" disabled={status === "sending"}>
                  {status === "sending" ? `${f.submit}…` : f.submit}
                </button>
              </div>
            </form>
          </div>
        )}
      </section>
    </SiteLayout>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
  className = "",
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      <label className="eyebrow block mb-3">{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        className="w-full bg-ivory border border-input px-4 py-3 text-navy focus:border-gold focus:outline-none transition-colors"
      />
    </div>
  );
}

function SelectField({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <div>
      <label className="eyebrow block mb-3">{label}</label>
      <select
        name={name}
        defaultValue=""
        className="w-full bg-ivory border border-input px-4 py-3 text-navy focus:border-gold focus:outline-none transition-colors"
      >
        <option value="" disabled>—</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
}
