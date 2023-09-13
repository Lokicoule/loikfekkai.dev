import { AiOutlineHome as HomeIcon } from "react-icons/ai";
import { CgNotes as ResumeIcon } from "react-icons/cg";
import { FiCodesandbox as WorksIcon } from "react-icons/fi";
import { RiContactsBookLine as ContactIcon } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";

type NavItemProps = {
  item: {
    id: number;
    name: string;
    routePath: string;
    icon: JSX.Element;
  };
  defaultClassName: string;
  activeClassName: string;
  iconClassName?: string;
  onClick?: () => void;
};

const NavItem: React.FC<NavItemProps> = ({
  item,
  defaultClassName,
  activeClassName,
  iconClassName,
  onClick,
}) => {
  const location = useLocation();
  const langPrefix = location.pathname.split("/")[1];
  const langPath =
    langPrefix === "en" || langPrefix === "fr" ? `/${langPrefix}` : "";

  const currentPath = location.pathname.replace(/\/$/, "");

  const isActive =
    currentPath === `${langPath}${item.routePath}`
      ? activeClassName
      : defaultClassName;

  return (
    <Link
      key={item.id}
      className={`${isActive} `}
      to={`${langPath}${item.routePath}`}
      onClick={onClick}
    >
      <span className={iconClassName}>{item.icon}</span>
      {item.name}
    </Link>
  );
};

const MENU_ITEMS = [
  {
    id: 1,
    name: "Home",
    routePath: "",
    icon: <HomeIcon />,
  },
  {
    id: 2,
    name: "Resume",
    routePath: "/resume",
    icon: <ResumeIcon />,
  },
  {
    id: 3,
    name: "Works",
    routePath: "/works",
    icon: <WorksIcon />,
  },
  {
    id: 4,
    name: "Contact",
    routePath: "/contact",
    icon: <ContactIcon />,
  },
];

type NavigationProps = {
  defaultClassName: string;
  activeClassName: string;
  iconClassName?: string;
  onClick?: () => void;
};

const Navigation: React.FC<NavigationProps> = ({
  defaultClassName,
  activeClassName,
  iconClassName,
  onClick,
}) => {
  return (
    <>
      {MENU_ITEMS.map((item) => (
        <NavItem
          key={item.id}
          item={item}
          defaultClassName={defaultClassName}
          activeClassName={activeClassName}
          iconClassName={iconClassName}
          onClick={onClick}
        />
      ))}
    </>
  );
};

export default Navigation;
