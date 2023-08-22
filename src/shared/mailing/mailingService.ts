import { send } from "@emailjs/browser";
import { ContactFormProps } from "../../pages/contact/domainObjects/ContactForm";

export class MailingService {
  public sendEmail(
    contactForm: ContactFormProps,
    onSuccess: () => void,
    onFailure: (error: Error) => void
  ): void {
    const emailParams = {
      to_name: "Loïk",
      from_email: contactForm.email,
      from_name: contactForm.name,
      message: contactForm.message,
    };

    send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      emailParams,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then(() => {
        onSuccess();
      })
      .catch((error) => {
        onFailure(error);
      });
  }
}
