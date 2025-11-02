import { Localized } from "../../../shared/i18n/localized";

export type EducationItemData = {
  id: string;
  date: Localized<string>;
  title: Localized<string>;
  place?: string;
  level?: Localized<string>;
  link?: string;
  internship?: {
    company: string;
    duration: Localized<string>;
  };
};

export const educationData: EducationItemData[] = [
  {
    id: "education-0",
    date: { en: "2023 - Present", fr: "2023 - Présent" },
    title: { en: "The Software Essentialist", fr: "The Software Essentialist" },
    link: "https://www.essentialist.dev/",
  },
  {
    id: "education-1",
    date: { en: "2023 - Present", fr: "2023 - Présent" },
    title: { en: "ThreeJS Journey", fr: "ThreeJS Journey" },
    link: "https://threejs-journey.com/",
  },
  {
    id: "education-2",
    date: { en: "2012 - 2017", fr: "2012 - 2017" },
    title: {
      en: "Expert in computer science and information systems",
      fr: "Expert en informatique et systèmes d’information",
    },
    level: { en: "Master's degree, RNCP level 7", fr: "Bac +5, RNCP niveau 7" },
    place: "Supinfo, Marseille",
    link: "https://www.francecompetences.fr/recherche/rncp/4510/",
    internship: {
      company: "Atos",
      duration: { en: "Internship 2015 - 2017", fr: "Alternance 2015 - 2017" },
    },
  },
  {
    id: "education-3",
    date: { en: "2010", fr: "2010" },
    title: {
      en: "High School diploma, scientific option, equivalent to A Levels",
      fr: "Baccalauréat Scientifique",
    },
    place: "Centre National d'Enseignement à Distance (CNED)",
  },
];
