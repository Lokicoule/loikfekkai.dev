import { send } from "@emailjs/browser";
import { ContactEmail, MailingPort } from "../../ports";

export type EmailProps = {
  to_name?: string;
  from_email: string;
  from_name: string;
  message: string;
};

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

  // transitional: removed with the outcome refactor
  public async sendEmail(
    emailProps: EmailProps,
    onSuccess: () => void,
    onFailure: (error: Error) => void
  ): Promise<void> {
    try {
      await this.send({
        fromEmail: emailProps.from_email,
        fromName: emailProps.from_name,
        message: emailProps.message,
      });
      onSuccess();
    } catch (error) {
      onFailure(error as Error);
    }
  }
}
