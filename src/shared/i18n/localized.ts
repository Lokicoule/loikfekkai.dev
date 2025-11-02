import { Language } from "../persistence/GlobalStore";

export type Localized<T> = Record<Language, T>;

export function pick<T>(localized: Localized<T>, lang: Language): T {
  return localized[lang];
}
