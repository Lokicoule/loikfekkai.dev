import { usePresenter } from "../../presentation/usePresenter";
import NavigationItem from "./NavigationItem";
import { NavigationPresenter } from "./NavigationPresenter";

type NavigationProps = {
  presenter: NavigationPresenter;
  defaultClassName: string;
  activeClassName: string;
  iconClassName?: string;
  onClick?: () => void;
};

type NavigationComponent = React.FC<NavigationProps>;

const Navigation: NavigationComponent = ({
  defaultClassName,
  activeClassName,
  iconClassName,
  onClick,
  presenter,
}) => {
  const viewModel = usePresenter(presenter);

  if (!viewModel) {
    return null;
  }

  return (
    <>
      {viewModel.items.map((item) => {
        return (
          <NavigationItem
            key={item.id}
            item={item}
            defaultClassName={defaultClassName}
            activeClassName={activeClassName}
            iconClassName={iconClassName}
            onClick={onClick}
          />
        );
      })}
    </>
  );
};

export default Navigation;
