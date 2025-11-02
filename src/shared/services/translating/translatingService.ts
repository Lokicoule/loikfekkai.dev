import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locales/en.json";
import fr from "./locales/fr.json";

import type { Language } from "../../persistence/GlobalStore";
import type { TranslationPort } from "../../ports";

export class TranslatingService implements TranslationPort {
  public translate(key: string): string {
    return i18next.t(key);
  }

  public setLanguage(language: Language): void {
    if (language === "fr" || language === "en")
      i18next.changeLanguage(language);
  }

  public get language(): Language {
    return i18next.language === "fr" ? "fr" : "en";
  }

  public async init(): Promise<void> {
    await i18next.use(LanguageDetector).init({
      fallbackLng: "en",
      load: "languageOnly",
      interpolation: {
        escapeValue: false,
      },
      resources: {
        fr: {
          translation: fr,
        },
        en: {
          translation: en,
        },
      },
    });

    document.documentElement.lang = this.language;
    i18next.on("languageChanged", () => {
      document.documentElement.lang = this.language;
    });
  }
}
