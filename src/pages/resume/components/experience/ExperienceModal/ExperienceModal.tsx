import Modal from "../../../../../shared/components/adapters/@headlessui/Modal";
import { ExperienceLabels, ExperienceProps } from "../../../ResumeViewModel";
import ExperienceModalContent from "./ExperienceModalContent";
import ExperienceModalTitle from "./ExperienceModalTitle";

type ExperienceModalProps = {
  experience: ExperienceProps;
  triggerButton: React.ReactElement;
  labels: ExperienceLabels;
};

type ExperienceModalComponent = React.FC<ExperienceModalProps>;

const ExperienceModal: ExperienceModalComponent = ({
  experience,
  triggerButton,
  labels,
}) => {
  return (
    <Modal
      triggerButton={triggerButton}
      className="w-full md:w-10/12 lg:w-[850px]"
      panelClassName="pr-4"
    >
      {() => (
        <>
          <ExperienceModalTitle experience={experience} labels={labels} />
          <ExperienceModalContent experience={experience} labels={labels} />
        </>
      )}
    </Modal>
  );
};

export default ExperienceModal;
