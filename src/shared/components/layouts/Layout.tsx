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
    <div className="min-h-screen bg-gradient-to-t from-[#FFEEBB] via-[#A7ECEE] via-[#99DBF5] to-[#9AC5F4] dark:from-[#FCDAB7] dark:via-[#1E5F74] dark:via-[#133B5C] dark:to-[#1D2D50] bg-no-repeat bg-fixed">
      <Header lang={lang} />

      <main className="container mx-auto px-4 lg:px-8 lg:mt-[120px] relative">
        <div className="grid grid-cols-12 gap-8 lg:gap-10">
          <div
            className={`col-span-12 lg:col-span-4 ${
              hideHero ? "hidden lg:block" : ""
            }`}
          >
            <div className="lg:sticky lg:top-44 transition-none">
              <Hero presenter={hero.presenter} />
            </div>
          </div>

          <div className="col-span-12 lg:col-span-8 min-h-[calc(100vh-180px)]">
            <div className="space-y-6">
              <DesktopMenu />
              <div className="transition-opacity duration-200">{children}</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Layout;
