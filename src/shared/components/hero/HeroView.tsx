import { useEffect, useState } from "react";
import { FaDownload, FaGithub, FaLinkedinIn } from "react-icons/fa";
import HeroSocialLinks from "../elements/SocialLinks";
import HeroContactInfo from "./ContactInfo";
import { HeroPresenter } from "./HeroPresenter";
import { HeroViewModel } from "./HeroViewModel";
import img from "/avatar.jpg";
import resume from "/loik_fekkai_cv.pdf";

const socialLinks = [
  {
    href: "https://fr.linkedin.com/in/lo%C3%AFk-fekka%C3%AF-074919142",
    icon: <FaLinkedinIn />,
    iconClassName: "text-[#0072b1] bg-secondary text-xl",
  },
  {
    href: "https://www.github.com/lokicoule/",
    icon: <FaGithub />,
    iconClassName: "text-[#0072b1] bg-secondary text-xl",
  },
];

type HeroViewProps = {
  presenter: HeroPresenter;
};

type HeroViewComponent = React.FC<HeroViewProps>;

const HeroView: HeroViewComponent = ({ presenter }) => {
  const [viewModel, setViewModel] = useState<HeroViewModel | undefined>();

  useEffect(() => {
    presenter.load((vm) => setViewModel(vm));
  }, [presenter]);

  if (!viewModel) {
    return null;
  }

  return (
    <div className="w-full mb-6 lg:mb-0 mx-auto relative bg-primary text-center px-6 rounded-[20px] mt-[180px] md:mt-[220px] lg:mt-0">
      <img
        src={img}
        className="w-[240px] absolute left-[50%] transform -translate-x-[50%] h-[240px] drop-shadow-xl mx-auto rounded-[20px] -mt-[140px]"
        alt="avatar"
        title="avatar"
        loading="lazy"
        onContextMenu={(e) => e.preventDefault()}
      />
      <div className="pt-[100px] pb-8">
        <h1 className="mt-6 mb-1 text-5xl text-primary font-primary uppercase">
          Loik Fekkai
        </h1>
        <h3 className="rounded-lg mb-4 px-5 py-1.5 text-secondary bg-secondary inline-block capitalize">
          {presenter.translateAndSanitize("hero.jobTitle")}
        </h3>

        <div className="flex justify-center space-x-3">
          <HeroSocialLinks socialLinks={socialLinks} />
        </div>
        <div className="p-7 rounded-2xl mt-7 bg-secondary">
          <HeroContactInfo infos={viewModel.infos} />
        </div>

        {presenter.getLang() === "fr" && (
          <a
            href={resume}
            download
            className="inline-flex items-center mx-auto bg-sky-to-blue duration-200 transition ease-linear px-8 py-3 text-lg text-white rounded-[35px] mt-6 hover:brightness-125"
          >
            <FaDownload className="mr-2" />
            {presenter.translateAndSanitize("hero.downloadResume")}
          </a>
        )}
      </div>
    </div>
  );
};

export default HeroView;
