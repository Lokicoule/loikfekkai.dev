import { LangController } from "./LangController";
import { LangPresenter } from "./LangPresenter";
import LangView from "./LangView";

type LangContainerProps = {
  controller: LangController;
  presenter: LangPresenter;
};

const LangContainer: React.FC<LangContainerProps> = ({ controller, presenter }) => {
  return (
    <div className="flex items-center">
      <LangView
        onLanguageChange={(language) => controller.changeLanguage(language)}
        presenter={presenter}
      />
    </div>
  );
};

export default LangContainer;
