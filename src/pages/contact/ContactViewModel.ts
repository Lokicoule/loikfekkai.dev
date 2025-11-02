import { Language } from "../../shared/persistence/GlobalStore";

export type ContactViewModel = {
  lang: Language;
  labels: {
    name: string;
    email: string;
    message: string;
    sending: string;
    submit: string;
    success: string;
  };
};
