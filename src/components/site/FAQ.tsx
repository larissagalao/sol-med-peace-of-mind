import { useState } from "react";
import type { FaqItem } from "@/i18n/content";

export function FAQ({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <ul className="divide-y divide-border border-y border-border">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <li key={i}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full py-6 flex items-start justify-between gap-6 text-left group"
              aria-expanded={isOpen}
            >
              <span className="font-serif text-xl md:text-2xl text-navy leading-snug group-hover:text-gold transition-colors">
                {item.q}
              </span>
              <span
                className={`shrink-0 mt-2 text-gold transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                aria-hidden
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.2">
                  <line x1="10" y1="3" x2="10" y2="17" strokeLinecap="round" />
                  <line x1="3" y1="10" x2="17" y2="10" strokeLinecap="round" />
                </svg>
              </span>
            </button>
            <div
              className={`grid transition-all duration-500 ease-out ${
                isOpen ? "grid-rows-[1fr] opacity-100 pb-8" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="max-w-3xl text-navy/75 leading-relaxed">{item.a}</p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export function faqJsonLd(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: { "@type": "Answer", text: it.a },
    })),
  };
}
