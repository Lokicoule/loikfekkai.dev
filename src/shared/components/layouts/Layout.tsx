import { PropsWithChildren } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../hero";
import { HeroPresenter } from "../hero/HeroPresenter";
import { LangController } from "../lang/LangController";
import { LangPresenter } from "../lang/LangPresenter";
import DesktopMenu from "../menu/DesktopMenu";
import Header from "./Header";

type LayoutProps = PropsWithChildren<{
  lang: {
    presenter: LangPresenter;
    controller: LangController;
  };
  hero: {
    presenter: HeroPresenter;
  };
}>;
type LayoutComponent = React.FC<LayoutProps>;

const Layout: LayoutComponent = ({ children, lang, hero }) => {
  //FIXME: This is a temporary solution to hide the hero on pages other than the home / about page
  const pathname = useLocation().pathname;
  const hideHero = pathname !== "/" && pathname !== "/about";

  return (
    <div className="dark:bg-gradient-to-t from-[#FCDAB7] via-[#1E5F74] via-[#133B5C] to-[#1D2D50] bg-no-repeat bg-fixed h-full">
      <Header lang={lang} />
      <main className="container grid grid-cols-12 md:gap-10 lg:mt-[120px] ">
        <div
          className={`col-span-12 lg:col-span-4 lg:h-screen lg:sticky top-44 p-4 ${
            hideHero ? "hidden lg:block" : ""
          }`}
        >
          <Hero presenter={hero.presenter} />
        </div>
        <div className="col-span-12 lg:col-span-8">
          <DesktopMenu />
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
