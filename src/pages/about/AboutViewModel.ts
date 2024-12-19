export interface AboutViewModelProps {
  whoAmI: {
    title: string;
    description: string;
  };
  whatDoIOffer: {
    title: string;
    description: Array<{
      title: string;
      description: string;
    }>;
  };
  livingTheDream: {
    title: string;
    description: JSX.Element;
  };
  outro?: JSX.Element;
}

export class AboutViewModel {
  constructor(private readonly props: AboutViewModelProps) {}

  public get whoAmI() {
    return this.props.whoAmI;
  }

  public get whatDoIOffer() {
    return this.props.whatDoIOffer;
  }

  public get livingTheDream() {
    return this.props.livingTheDream;
  }

  public get outro() {
    return this.props.outro;
  }
}
