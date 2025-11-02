import { Localized } from "../../../shared/i18n/localized";
import { SkillProps } from "../ResumeViewModel";

export type SkillItemData = {
  id: string;
  name: Localized<string>;
  value: number;
  type: SkillProps["type"];
};

export const skillData: SkillItemData[] = [
  {
    id: "skill-8",
    name: { en: "Clean Code", fr: "Clean Code" },
    value: 99,
    type: "hard",
  },
  {
    id: "skill-10",
    name: { en: "Retro Engineering", fr: "Retro Engineering" },
    value: 99,
    type: "hard",
  },
  {
    id: "skill-11",
    name: { en: "Autonomy", fr: "Autonomie" },
    value: 99,
    type: "soft",
  },
  {
    id: "skill-1",
    name: { en: "Documentation", fr: "Documentation" },
    value: 99,
    type: "soft",
  },
];
