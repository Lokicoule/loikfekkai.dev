import { Language } from "../persistence/GlobalStore";

export function formatNumber(value: number, lang: Language): string {
  return new Intl.NumberFormat(lang, {
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(value);
}
