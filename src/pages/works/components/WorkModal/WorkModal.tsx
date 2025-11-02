import Modal from "../../../../shared/components/adapters/@headlessui/Modal";
import { Language } from "../../../../shared/persistence/GlobalStore";
import { WorkLabels, WorkProps } from "../../WorksViewModel";
import WorkModalContent from "./WorkModalContent";
import WorkModalTitle from "./WorkModalTitle";

type WorkModalProps = {
  work: WorkProps;
  labels: WorkLabels;
  lang: Language;
  triggerButton: React.ReactElement;
};

type WorkModalComponent = React.FC<WorkModalProps>;

const WorkModal: WorkModalComponent = ({ work, labels, lang, triggerButton }) => {
  return (
    <Modal
      triggerButton={triggerButton}
      className="w-full md:w-10/12 lg:w-[850px]"
      panelClassName="pr-4"
    >
      {() => (
        <>
          <WorkModalTitle work={work} labels={labels} lang={lang} />
          <WorkModalContent work={work} labels={labels} />
        </>
      )}
    </Modal>
  );
};

export default WorkModal;
