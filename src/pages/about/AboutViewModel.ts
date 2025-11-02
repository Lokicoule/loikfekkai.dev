export interface AboutViewModelProps {
  whoAmI: {
    title: string;
    description: JSX.Element;
  };
  whatDoIOffer: {
    title: string;
    description: JSX.Element;
  };
  livingTheDream: {
    title: string;
    description: JSX.Element;
  };
  outro?: JSX.Element;
}

export type AboutViewModel = AboutViewModelProps;
