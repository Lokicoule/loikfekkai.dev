import { FiFilePlus } from "react-icons/fi";
import Modal from "../../../../shared/components/adapters/@headlessui/Modal";
import { Language } from "../../../../shared/persistence/GlobalStore";
import { WorkLabels, WorkProps } from "../../WorksViewModel";
import SocialLinks from "../../../../shared/components/elements/SocialLinks";
import GitHubStatsView from "../../../../shared/components/stats/github/GitHubStatsView";
import NpmStatsView from "../../../../shared/components/stats/npm/NpmStatsView";
import {
  githubStatsPresenter,
  npmStatsPresenter,
} from "../../../../shared/composition/container";

type WorkModalTitleProps = {
  work: WorkProps;
  labels: WorkLabels;
  lang: Language;
};

type WorkModalTitleComponent = React.FC<WorkModalTitleProps>;

const WorkModalTitle: WorkModalTitleComponent = ({ work, labels, lang }) => {
  return (
    <Modal.Title>
      <h2 className="text-primary text-4xl text-center font-primary">
        {work.name}
      </h2>

      {work.statsConfig?.github && (
        <div className="flex justify-center mt-2">
          <GitHubStatsView
            repository={work.statsConfig.github}
            presenter={githubStatsPresenter}
            lang={lang}
          />
        </div>
      )}

      {work.statsConfig?.npm && (
        <div className="flex justify-center mt-2">
          <NpmStatsView
            packageName={work.statsConfig.npm}
            presenter={npmStatsPresenter}
            lang={lang}
          />
        </div>
      )}

      <div className="flex flex-row flex-wrap lg:flex-row my-6 justify-between items-center flex-wrap">
        <div className="space-y-2">
          <span className="dark:text-white flex items-center text-[15px] sm:text-lg">
            <FiFilePlus className="sm:text-lg hidden sm:block mr-2 md:text-xl" />
            {labels.client} :&nbsp;
            <span className="font-medium">{work.tag}</span>
          </span>
        </div>
        <div className="flex justify-center space-x-3">
          <SocialLinks
            socialLinks={work.socialLinks.map((x) => {
              return {
                ...x,
                iconInvariant: "secondary",
              };
            })}
          />
        </div>
      </div>
    </Modal.Title>
  );
};

export default WorkModalTitle;
