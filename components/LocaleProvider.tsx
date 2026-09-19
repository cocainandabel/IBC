"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { defaultLocale, localeOptions } from "@/data/strategy";
import type { LocaleCode } from "@/data/strategy.types";

type LocaleContextValue = {
  locale: LocaleCode;
  setLocale: (locale: LocaleCode) => void;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);
const STORAGE_KEY = "af-strategy-locale";

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<LocaleCode>(defaultLocale);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY) as LocaleCode | null;
      if (saved && localeOptions.includes(saved)) {
        setLocaleState(saved);
      }
    } catch {
      // Ignore storage read errors.
    }
  }, []);

  const setLocale = (nextLocale: LocaleCode) => {
    setLocaleState(nextLocale);
    try {
      window.localStorage.setItem(STORAGE_KEY, nextLocale);
    } catch {
      // Ignore storage write errors.
    }
  };

  const value = useMemo(() => ({ locale, setLocale }), [locale]);
  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within LocaleProvider");
  }
  return context;
}
