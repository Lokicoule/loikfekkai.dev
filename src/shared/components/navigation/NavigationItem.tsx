import { Link, useLocation } from "react-router-dom";
import { NavigationItemProps } from "./NavigationViewModel";

type NavItemProps = {
  item: NavigationItemProps;
  defaultClassName: string;
  activeClassName: string;
  iconClassName?: string;
  onClick?: () => void;
};

type NavigationItemComponent = React.FC<NavItemProps>;

const NavigationItem: NavigationItemComponent = ({
  item,
  defaultClassName,
  activeClassName,
  iconClassName,
  onClick,
}) => {
  const location = useLocation();
  const currentPath = location.pathname.replace(/\/$/, "");

  const currentClassName =
    currentPath === item.routePath || (!currentPath && item.default)
      ? activeClassName
      : defaultClassName;

  return (
    <Link
      className={currentClassName}
      to={item.routePath}
      onClick={onClick}
    >
      <span className={iconClassName}>{item.icon}</span>
      {item.name}
    </Link>
  );
};

export default NavigationItem;
