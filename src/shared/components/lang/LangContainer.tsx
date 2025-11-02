import { LangController } from "./LangController";
import { LangPresenter } from "./LangPresenter";
import LangView from "./LangView";

type LangContainerProps = {
  controller: LangController;
  presenter: LangPresenter;
};

type LangContainerComponent = React.FC<LangContainerProps>;

const LangContainer: LangContainerComponent = ({ controller, presenter }) => {
  const useLangController = controller.createHook();
  const { handleLanguageChange } = useLangController();

  return (
    <div className="flex items-center">
      <LangView
        onLanguageChange={handleLanguageChange}
        presenter={presenter}
      />
    </div>
  );
};

export default LangContainer;
