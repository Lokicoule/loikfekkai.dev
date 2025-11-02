import * as Sentry from "@sentry/react";
import { LoggingPort } from "../../ports";

export class LoggingService implements LoggingPort {
  public logError(error: unknown): void {
    Sentry.captureException(error);
  }

  public init(): void {
    try {
      Sentry.init({
        dsn: import.meta.env.VITE_SENTRY_DSN,
        environment: import.meta.env.MODE,
        release: import.meta.env.VITE_RELEASE,
      });
    } catch (error) {
      console.error("Error initializing Sentry:", error);
    }
  }
}
