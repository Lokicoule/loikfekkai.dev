import type { Language } from "./persistence/GlobalStore";
import type { Notification } from "./services/notifications/domainObjects/Notification";

export interface TranslationPort {
  translate(key: string): string;
  setLanguage(language: Language): void;
  readonly language: Language;
}

export interface ContactEmail {
  fromName: string;
  fromEmail: string;
  message: string;
}

export interface MailingPort {
  send(email: ContactEmail): Promise<void>;
}

export interface NotificationPort {
  show(notification: Notification): void;
  update(notification: Notification): void;
}

export interface LoggingPort {
  logError(error: unknown): void;
}

export interface StoragePort {
  getItem<T>(key: string): T | null;
  setItem<T>(key: string, value: T): void;
  removeItem(key: string): void;
}
