export type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

export type ContactFormError = {
  field: "name" | "email" | "message";
  code: "invalid" | "length";
};

const EMAIL_PATTERN = /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

export function validateContactForm(data: ContactFormData): ContactFormError[] {
  const errors: ContactFormError[] = [];

  if (!EMAIL_PATTERN.test(data.email)) {
    errors.push({ field: "email", code: "invalid" });
  }
  if (data.name.length < 2 || data.name.length > 50) {
    errors.push({ field: "name", code: "length" });
  }
  if (data.message.length < 10 || data.message.length > 500) {
    errors.push({ field: "message", code: "length" });
  }

  return errors;
}
