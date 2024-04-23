import { SocialLinkProps } from "../../shared/components/elements/SocialLinks";
import { StackProps } from "../../shared/components/elements/Stack";
import { WorkFilter } from "../../shared/persistence/GlobalCache";

type KeyFeaturesProps = {
  id: string;
  key: string;
  features: string[];
};

export interface WorkProps {
  id: string;
  name: string;
  category: WorkFilter;
  tag: string;
  description: string;
  logo?: JSX.Element;
  technologiesUsed: StackProps;
  keyFeatures?: KeyFeaturesProps[];
  socialLinks: SocialLinkProps[];
}

export interface WorksViewModelProps {
  works: WorkProps[];
  filter?: string;
}

export class WorksViewModel {
  constructor(private readonly props: WorksViewModelProps) {}

  public get works() {
    return this.props.filter === "all"
      ? this.props.works
      : this.props.works.filter((work) => work.category === this.props.filter);
  }

  public get filter() {
    return this.props.filter;
  }

  public get attributes() {
    return this.props;
  }
}
