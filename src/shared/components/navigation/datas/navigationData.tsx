import { AiOutlineHome as HomeIcon } from "react-icons/ai";
import { CgNotes as ResumeIcon } from "react-icons/cg";
import { FiCodesandbox as WorksIcon } from "react-icons/fi";
import { RiContactsBookLine as ContactIcon } from "react-icons/ri";
import { Localized } from "../../../i18n/localized";

export type NavigationItemData = {
  id: string;
  name: Localized<string>;
  routePath: string;
  icon: JSX.Element;
  default?: boolean;
};

export const navigationData: NavigationItemData[] = [
  {
    id: "navigation-1",
    name: { en: "Home", fr: "À propos" },
    routePath: "/about",
    icon: <HomeIcon />,
    default: true,
  },
  {
    id: "navigation-2",
    name: { en: "Resume", fr: "CV" },
    routePath: "/resume",
    icon: <ResumeIcon />,
  },
  {
    id: "navigation-3",
    name: { en: "Works", fr: "Projets" },
    routePath: "/works",
    icon: <WorksIcon />,
  },
  {
    id: "navigation-4",
    name: { en: "Contact", fr: "Contact" },
    routePath: "/contact",
    icon: <ContactIcon />,
  },
];
