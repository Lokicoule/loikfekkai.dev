import { LoggingService } from "../../shared/services/logging/loggingService";
import { MailingService } from "../../shared/services/mailing/mailingService";
import {
  Notification,
  NotificationService,
} from "../../shared/services/notifications";
import { ContactForm, ContactFormProps } from "./domainObjects/ContactForm";

export class ContactController {
  private isPending = false;

  constructor(
    private notifications: NotificationService,
    private mailingService: MailingService,
    private loggingService: LoggingService
  ) {}

  public async submitContactForm(data: ContactFormProps): Promise<void> {
    if (this.isPending) {
      return;
    }

    const contactFormOrError = ContactForm.create(data);

    if (contactFormOrError instanceof Error) {
      this.notifications.show(
        Notification.createError(
          `Contact error:\n${contactFormOrError.message}`
        )
      );
      return;
    }

    const notification = Notification.createInfo("Sending message...");

    this.notifications.show(notification);
    this.isPending = true;

    try {
      await this.mailingService.sendEmail(
        contactFormOrError.toDTO(),
        () =>
          this.notifications.update(
            notification.withMessageAndType("Message sent!", "success")
          ),
        (error: Error) => {
          this.loggingService.logError(error);
          this.notifications.update(
            notification.withMessageAndType("Message failed to send!", "error")
          );
        }
      );
    } finally {
      this.isPending = false;
    }
  }
}
