export interface NavigationItemProps {
  id: string;
  name: string;
  routePath: string;
  icon: JSX.Element;
  default?: boolean;
}

export type NavigationViewModel = {
  items: NavigationItemProps[];
};
