import { AnimatePresence, motion } from "framer-motion";
import { AsyncStatus } from "../../../shared/hooks/useAsyncCallback";
import { ContactFormData } from "../contactFormValidation";
import TextInputField from "../../../shared/components/elements/form/TextInputField";
import TextAreaField from "../../../shared/components/elements/form/TextAreaField";
import { DURATION } from "../../../shared/motion";

export interface ContactFormElements extends HTMLFormControlsCollection {
  name: HTMLInputElement;
  email: HTMLInputElement;
  message: HTMLTextAreaElement;
}

interface ContactFormElement extends HTMLFormElement {
  readonly elements: ContactFormElements;
}

interface ContactFormViewProps {
  formData: ContactFormData;
  onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  status: AsyncStatus;
  onSubmit: () => Promise<void>;
  labels: {
    name: string;
    email: string;
    message: string;
    sending: string;
    submit: string;
    success: string;
  };
}

const ContactFormView: React.FC<ContactFormViewProps> = ({
  formData,
  onChange,
  status,
  onSubmit,
  labels,
}) => {
  const handleSubmit = async (event: React.FormEvent<ContactFormElement>) => {
    event.preventDefault();

    await onSubmit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextInputField
        label={labels.name}
        name="name"
        type="text"
        value={formData.name}
        onChange={onChange}
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
        onChange={onChange}
        required
        autoComplete="email"
      />
      <TextAreaField
        label={labels.message}
        name="message"
        value={formData.message}
        onChange={onChange}
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
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.span
                  key={status === "pending" ? "sending" : "submit"}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: DURATION.fast }}
                  className="inline-block"
                >
                  {status === "pending" ? labels.sending : labels.submit}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </div>
      ) : (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: DURATION.base }}
          className="text-green-500 p-2 rounded-lg inline-flex items-center gap-2"
        >
          <motion.svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <motion.path
              d="M4 12l5 5L20 7"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
            />
          </motion.svg>
          {labels.success}
        </motion.span>
      )}
    </form>
  );
};

export default ContactFormView;
