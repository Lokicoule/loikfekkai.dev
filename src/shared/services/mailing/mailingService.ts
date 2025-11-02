import { send } from "@emailjs/browser";
import { ContactEmail, MailingPort } from "../../ports";

export class MailingService implements MailingPort {
  public async send(email: ContactEmail): Promise<void> {
    await send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        from_email: email.fromEmail,
        from_name: email.fromName,
        message: email.message,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );
  }
}
