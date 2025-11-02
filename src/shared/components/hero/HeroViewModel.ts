import type { Language } from "../../../shared/persistence/GlobalStore";

export type HeroInfo = {
  label: string;
  value: string;
  icon: JSX.Element;
  href?: string;
};

export type HeroViewModel = {
  infos: HeroInfo[];
  lang: Language;
};
