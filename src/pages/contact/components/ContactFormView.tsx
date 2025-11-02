import { useState } from "react";
import { useAsyncCallback } from "../../../shared/hooks/useAsyncCallback";
import { ContactFormData } from "../contactFormValidation";
import { SubmitResult } from "../ContactController";
import TextInputField from "../../../shared/components/elements/form/TextInputField";
import TextAreaField from "../../../shared/components/elements/form/TextAreaField";
import { BsSendCheck } from "react-icons/bs";

export interface ContactFormElements extends HTMLFormControlsCollection {
  name: HTMLInputElement;
  email: HTMLInputElement;
  message: HTMLTextAreaElement;
}

interface ContactFormElement extends HTMLFormElement {
  readonly elements: ContactFormElements;
}

interface ContactFormViewProps {
  onSubmit: (data: ContactFormData) => Promise<SubmitResult>;
  labels: {
    name: string;
    email: string;
    message: string;
    sending: string;
    submit: string;
    success: string;
  };
}

const ContactFormView: React.FC<ContactFormViewProps> = ({ onSubmit, labels }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });
  const [status, sendMessage] = useAsyncCallback(onSubmit);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<ContactFormElement>) => {
    event.preventDefault();

    await sendMessage(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextInputField
        label={labels.name}
        name="name"
        type="text"
        value={formData.name}
        onChange={handleChange}
        minLength={2}
        maxLength={50}
        required
        autoComplete="name"
      />
      <TextInputField
        label={labels.email}
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        required
        autoComplete="email"
      />
      <TextAreaField
        label={labels.message}
        name="message"
        value={formData.message}
        onChange={handleChange}
        required
        rows={5}
        minLength={10}
        maxLength={500}
      />

      {status !== "success" ? (
        <div className="flex items-center justify-end rounded-lg mt-3">
          <div className="rounded-lg hover:bg-gradient-to-r from-sky-400 to-blue-600 transition-all duration-300  ease-in-out">
            <button
              className="font-semibold border-primary hover:border-transparent px-6  py-2 rounded-lg border-[2px] text-primary hover:text-white transition ease-in duration-200 "
              type="submit"
              disabled={status === "pending"}
            >
              {status === "pending" ? labels.sending : labels.submit}
            </button>
          </div>
        </div>
      ) : (
        <span className="text-green-500 p-2 rounder-lg">
          <BsSendCheck className="inline-block mr-2 text-xl" />
          {labels.success}
        </span>
      )}
    </form>
  );
};

export default ContactFormView;
