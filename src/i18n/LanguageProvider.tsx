import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { Lang } from "./routes";

interface Ctx {
  lang: Lang;
  setLang: (lang: Lang) => void;
}

const LanguageContext = createContext<Ctx>({ lang: "en", setLang: () => {} });

const STORAGE_KEY = "sol.lang";

function detectFromBrowser(): Lang {
  if (typeof navigator === "undefined") return "en";
  const l = (navigator.language || "en").toLowerCase();
  return l.startsWith("pt") ? "pt" : "en";
}

/** Detects language from URL prefix (`/pt/...`). */
function detectFromPath(pathname: string): Lang {
  return pathname === "/pt" || pathname.startsWith("/pt/") ? "pt" : "en";
}

export function LanguageProvider({
  initialLang,
  children,
}: {
  initialLang: Lang;
  children: ReactNode;
}) {
  const [lang, setLangState] = useState<Lang>(initialLang);

  // Keep state synced with the actual URL prefix (in case of router-driven
  // navigation between /pt/... and /...).
  useEffect(() => {
    setLangState(detectFromPath(window.location.pathname));
  }, []);

  // First-visit auto redirect: if user lands on "/" without a stored preference
  // and their browser is PT, send them to /pt.
  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem(STORAGE_KEY) as Lang | null;
    const pathname = window.location.pathname;
    const onEnglishRoot = pathname === "/" || pathname === "";
    if (!stored && onEnglishRoot && detectFromBrowser() === "pt") {
      window.location.replace("/pt");
    }
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, l);
    }
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}
