import { Language, GlobalStore } from "../../../shared/persistence/GlobalStore";
import { NotificationPort, TranslationPort } from "../../ports";
import { Notification } from "../../services/notifications/domainObjects/Notification";

export class LangController {
  constructor(
    private readonly store: GlobalStore,
    private readonly notifications: NotificationPort,
    private readonly translator: TranslationPort
  ) {}

  public changeLanguage(language: string): void {
    if (language !== "en" && language !== "fr") {
      this.notifications.show(
        Notification.createError(`Language ${language} is not supported!`)
      );
      return;
    }
    const lang: Language = language;
    this.translator.setLanguage(lang);
    this.store.set("lang", lang);
  }
}
