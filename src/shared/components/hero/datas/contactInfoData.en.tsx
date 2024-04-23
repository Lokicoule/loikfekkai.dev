import {
  FaCalendarAlt,
  FaEnvelopeOpenText,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { HeroInfo } from "../HeroViewModel";

export const contactInfoData: HeroInfo[] = [
  {
    label: "Email",
    value: "loikfekkai@gmail.com",
    icon: <FaEnvelopeOpenText />,
    href: "mailto:loikfekkai@gmail.com",
  },
  {
    label: "Location",
    value: "Mimizan, France (40)",
    icon: <FaMapMarkerAlt />,
  },
];
