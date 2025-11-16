import { SocialLinkProps } from "../../shared/components/elements/SocialLinks";
import { StackProps } from "../../shared/components/elements/Stack";
import { Language, WorkFilter } from "../../shared/persistence/GlobalStore";

type KeyFeaturesProps = {
  id: string;
  key: string;
  features: string[];
};

export interface ProjectStatsConfig {
  github?: { owner: string; repo: string };
  npm?: string;
}

export interface WorkProps {
  id: string;
  name: string;
  category: WorkFilter;
  tag: string;
  description: string;
  link?: string;
  technologiesUsed: StackProps;
  keyFeatures?: KeyFeaturesProps[];
  socialLinks: SocialLinkProps[];
  statsConfig?: ProjectStatsConfig;
}

export type WorkLabels = {
  preview: string;
  keyFeatures: string;
  description: string;
  technologiesUsed: string;
  project: string;
};

export function filterWorks(works: WorkProps[], filter: WorkFilter): WorkProps[] {
  return filter === "all" ? works : works.filter((work) => work.category === filter);
}

export type WorksViewModel = {
  works: WorkProps[];
  filter: WorkFilter;
  labels: WorkLabels;
  lang: Language;
};
