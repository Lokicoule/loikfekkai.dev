import { StackProps } from "../../shared/components/elements/Stack";

interface ClientProps {
  abbreviation?: string;
  name: string;
}

export interface ExperienceProps {
  id: string;
  name: string;
  tag: string;
  description: string;
  internship?: {
    duration: string;
  };
  company?: string;
  client?: ClientProps;
  duration: string;
  place: string;
  roleAndResponsibilities: string;
  technologiesUsed: StackProps;
  keyAchievements: string[];
  personalExperience: string[];
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

export interface ResumeViewModelProps {
  experiences: ExperienceProps[];
  educations: EducationProps[];
  skills: SkillProps[];
  knowledges: KnowledgeProps[];
}

export class ResumeViewModel {
  constructor(private readonly props: ResumeViewModelProps) {}

  public get experiences() {
    return this.props.experiences;
  }

  public get educations() {
    return this.props.educations;
  }

  public get skills() {
    return this.props.skills;
  }

  public get knowledges() {
    return this.props.knowledges;
  }

  public get attributes() {
    return this.props;
  }
}
