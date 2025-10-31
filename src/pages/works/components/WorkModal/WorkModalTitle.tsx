import { FiFilePlus } from "react-icons/fi";
import Modal from "../../../../shared/components/adapters/@headlessui/Modal";
import { WorkProps } from "../../WorksViewModel";
import SocialLinks from "../../../../shared/components/elements/SocialLinks";
import { translatingService } from "../../../../shared/composition";
import ProjectStats from "../ProjectStats";

type WorkModalTitleProps = {
  work: WorkProps;
};

type WorkModalTitleComponent = React.FC<WorkModalTitleProps>;

const WorkModalTitle: WorkModalTitleComponent = ({ work }) => {
  return (
    <Modal.Title>
      <h2 className="text-primary text-4xl text-center font-primary">
        {work.name}
      </h2>

      {work.stats && (
        <div className="flex justify-center mt-2">
          <ProjectStats stats={work.stats} />
        </div>
      )}

      <div className="flex flex-row flex-wrap lg:flex-row my-6 justify-between items-center flex-wrap">
        <div className="space-y-2">
          <span className="dark:text-white flex items-center text-[15px] sm:text-lg">
            <FiFilePlus className="sm:text-lg hidden sm:block mr-2 md:text-xl" />
            {translatingService.translate("project")} :&nbsp;
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
