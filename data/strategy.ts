import { strategyEn } from "@/data/strategy.en";
import { strategyKo } from "@/data/strategy.ko";
import { strategyZh } from "@/data/strategy.zh";
import type { LocaleCode, StrategyLocaleData } from "@/data/strategy.types";

export const localeOptions: LocaleCode[] = ["en", "ko", "zh"];
export const defaultLocale: LocaleCode = "en";
export const defaultBudgetTotal = 150000;

export const strategyByLocale: Record<LocaleCode, StrategyLocaleData> = {
  en: strategyEn,
  ko: strategyKo,
  zh: strategyZh,
};

export function getStrategy(locale: LocaleCode): StrategyLocaleData {
  return strategyByLocale[locale] ?? strategyByLocale[defaultLocale];
}
