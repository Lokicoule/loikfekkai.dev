import {
  langController,
  langPresenter,
  modeController,
} from "../../composition";
import { Lang } from "../lang";
import MobileMenu from "../menu/MobileMenu";
import ModeSelector from "../mode/Mode";

const Header = () => {
  return (
    <header className="container w-full bg-transparent  flex justify-between py-5 lg:px-0 lg:pt-[50px]">
      <div className="w-full flex justify-between px-4">
        <div className="lg:flex-grow hidden lg:flex" />
        <div className="lg:hidden flex items-center space-x-5 ">
          <ModeSelector controller={modeController} />
          <Lang controller={langController} presenter={langPresenter} />
        </div>
        <div className="lg:flex hidden items-center space-x-5 ">
          <Lang controller={langController} presenter={langPresenter} />
          <ModeSelector controller={modeController} />
        </div>
        <MobileMenu />
      </div>
    </header>
  );
};

export default Header;
