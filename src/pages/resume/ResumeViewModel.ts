import { StackProps } from "../../shared/components/elements/Stack";
import { Language } from "../../shared/persistence/GlobalStore";

interface ClientProps {
  abbreviation?: string;
  name: string;
}

export interface ExperienceProps {
  id: string;
  name: string;
  tag: string;
  description?: string;
  internship?: {
    duration: string;
  };
  company?: string;
  client?: ClientProps;
  duration: string;
  place: string;
  roleAndResponsibilities: string;
  technologiesUsed: StackProps;
  keyAchievements?: string[];
  personalExperience?: string[];
  link?: string;
  linkText?: string;
}

export type EducationProps = {
  id: string;
  date: string;
  title: string;
  place?: string;
  level?: string;
  link?: string;
  internship?: {
    company: string;
    duration: string;
  };
};

export type SkillProps = {
  id: string;
  name: string;
  value: number;
  type: "soft" | "hard";
};

export type KnowledgeProps = {
  id: string;
  name: string;
  type: "architecture" | "methodology";
};

export type ExperienceLabels = {
  description: string;
  technologiesUsed: string;
  keyAchievements: string;
  personalExperience: string;
  duration: string;
  company: string;
  place: string;
  client: string;
  project: string;
  roleAndResponsibilities: string;
};

export type ResumeViewModel = {
  experiences: ExperienceProps[];
  educations: EducationProps[];
  skills: SkillProps[];
  knowledges: KnowledgeProps[];
  labels: ExperienceLabels;
  lang: Language;
};
