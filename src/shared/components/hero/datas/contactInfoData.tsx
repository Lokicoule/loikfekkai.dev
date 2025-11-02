import { FaEnvelopeOpenText, FaMapMarkerAlt } from "react-icons/fa";
import { Localized } from "../../../i18n/localized";

export type HeroInfoData = {
  label: Localized<string>;
  value: string;
  icon: JSX.Element;
  href?: string;
};

export const contactInfoData: HeroInfoData[] = [
  {
    label: { en: "Email", fr: "Email" },
    value: "loikfekkai@gmail.com",
    icon: <FaEnvelopeOpenText />,
    href: "mailto:loikfekkai@gmail.com",
  },
  {
    label: { en: "Location", fr: "Localisation" },
    value: "Mimizan, France (40)",
    icon: <FaMapMarkerAlt />,
  },
];
