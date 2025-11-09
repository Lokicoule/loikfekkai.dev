import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { GoRepo } from "react-icons/go";
import SocialLinks from "../../../shared/components/elements/SocialLinks";
import { Language } from "../../../shared/persistence/GlobalStore";
import { WorkLabels, WorkProps } from "../WorksViewModel";
import WorkModal from "./WorkModal/WorkModal";
import GitHubStatsView from "../../../shared/components/stats/github/GitHubStatsView";
import { githubStatsPresenter } from "../../../shared/composition";
import { DURATION, EASE_OUT } from "../../../shared/motion";

type WorkListProps = {
  works: WorkProps[];
  labels: WorkLabels;
  lang: Language;
};

type WorkListComponent = React.FC<WorkListProps>;

const WorkList: WorkListComponent = ({ works, labels, lang }) => {
  return (
    <AnimatePresence mode="popLayout" initial={false}>
      {works.map((item) => (
        <motion.div
          key={item.id}
          layout
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: DURATION.base, ease: EASE_OUT }}
          className="rounded-xl p-8 bg-primary border-1 border-primary"
        >
          <div className="mb-2 flex items-center space-x-2">
            <GoRepo className="text-xl text-tertiary" />
            <WorkModal
              triggerButton={
                <button className="text-xl font-bold text-primary gradient-underline-animation p-1 lowercase">
                  {item.name}
                </button>
              }
              work={item}
              labels={labels}
              lang={lang}
            />
          </div>

          <p className="text-secondary text-justify">
            {item.description.slice(0, 120)}...
          </p>

          <div className="mt-4 flex items-center justify-between">
            <SocialLinks socialLinks={item.socialLinks} />
            {item.statsConfig?.github && (
              <GitHubStatsView
                repository={item.statsConfig.github}
                presenter={githubStatsPresenter}
                lang={lang}
              />
            )}
          </div>
        </motion.div>
      ))}
    </AnimatePresence>
  );
};

export default WorkList;
