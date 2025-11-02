import { LoggingPort, MailingPort, NotificationPort, TranslationPort } from "../../shared/ports";
import { Notification } from "../../shared/services/notifications/domainObjects/Notification";
import { ContactFormData, ContactFormError, validateContactForm } from "./contactFormValidation";

export type SubmitResult =
  | { ok: true }
  | { ok: false; reason: "validation" | "send" | "pending" };

export class ContactController {
  private isPending = false;

  constructor(
    private readonly notifications: NotificationPort,
    private readonly mailing: MailingPort,
    private readonly logging: LoggingPort,
    private readonly translator: TranslationPort
  ) {}

  public async submitContactForm(data: ContactFormData): Promise<SubmitResult> {
    if (this.isPending) {
      return { ok: false, reason: "pending" };
    }

    const errors = validateContactForm(data);
    if (errors.length > 0) {
      this.notifications.show(
        Notification.createError(this.errorMessage(errors[0]))
      );
      return { ok: false, reason: "validation" };
    }

    const progress = Notification.createInfo(
      this.translator.translate("contact.form.sending")
    );
    this.notifications.show(progress);
    this.isPending = true;

    try {
      await this.mailing.send({
        fromName: data.name,
        fromEmail: data.email,
        message: data.message,
      });
      this.notifications.update(
        progress.withMessageAndType(
          this.translator.translate("contact.form.success"),
          "success"
        )
      );
      return { ok: true };
    } catch (error) {
      this.logging.logError(error);
      this.notifications.update(
        progress.withMessageAndType(
          this.translator.translate("contact.form.failure"),
          "error"
        )
      );
      return { ok: false, reason: "send" };
    } finally {
      this.isPending = false;
    }
  }

  private errorMessage(error: ContactFormError): string {
    return this.translator.translate(
      `contact.form.errors.${error.field}.${error.code}`
    );
  }
}
