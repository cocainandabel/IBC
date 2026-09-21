"use client";

import { localeOptions } from "@/data/strategy";
import type { LocaleCode } from "@/data/strategy.types";

type LanguageToggleProps = {
  label: string;
  locale: LocaleCode;
  onChange: (locale: LocaleCode) => void;
};

export function LanguageToggle({ label, locale, onChange }: LanguageToggleProps) {
  return (
    <div className="flex items-center gap-2 rounded-full border border-fortress-border bg-fortress-panel px-3 py-2">
      <span className="text-xs uppercase tracking-[0.2em] text-fortress-muted">{label}</span>
      <div className="flex gap-1">
        {localeOptions.map((option) => {
          const isActive = option === locale;
          return (
            <button
              key={option}
              type="button"
              className={`rounded-full px-2.5 py-1 text-xs font-semibold transition ${
                isActive
                  ? "bg-fortress-gold text-fortress-base"
                  : "text-fortress-muted hover:bg-fortress-surface hover:text-fortress-text"
              }`}
              onClick={() => onChange(option)}
            >
              {option.toUpperCase()}
            </button>
          );
        })}
      </div>
    </div>
  );
}
