import { motion } from "framer-motion";
import { FiBriefcase } from "react-icons/fi";
import { GoStack } from "react-icons/go";
import Disclosure from "../../../../shared/components/adapters/@headlessui/Disclosure";
import Modal from "../../../../shared/components/adapters/@headlessui/Modal";
import Stack from "../../../../shared/components/elements/Stack";
import { WorkLabels, WorkProps } from "../../WorksViewModel";
import { DURATION, EASE_OUT } from "../../../../shared/motion";

type WorkModalContentProps = {
  work: WorkProps;
  labels: WorkLabels;
};

type WorkModalContentComponent = React.FC<WorkModalContentProps>;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: DURATION.fast,
      delayChildren: DURATION.fast
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATION.base,
      ease: EASE_OUT
    }
  }
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: DURATION.slow,
      ease: EASE_OUT
    }
  }
};

const WorkModalContent: WorkModalContentComponent = ({ work, labels }) => {
  return (
    <Modal.Content>
      <motion.div
        className="my-6 whitespace-pre-wrap"
        initial="hidden"
        animate="show"
        variants={container}
      >
        <motion.div variants={item}>
          <Disclosure
            icon={<GoStack className="text-lg mr-2 inline-block" />}
            title={labels.technologiesUsed}
            defaultOpen
          >
            <motion.div variants={fadeIn}>
              <Stack {...work.technologiesUsed} />
            </motion.div>
          </Disclosure>
        </motion.div>

        <motion.div variants={item}>
          <Disclosure
            icon={<FiBriefcase className="text-lg mr-2 inline-block" />}
            title={labels.description}
            defaultOpen
          >
            <motion.div
              className="dark:text-white text-sm text-justify"
              variants={fadeIn}
            >
              {work.description}
            </motion.div>
          </Disclosure>
        </motion.div>

        {work.keyFeatures && (
          <motion.div variants={item}>
            <Disclosure
              icon={<FiBriefcase className="text-lg mr-2 inline-block" />}
              title={labels.keyFeatures}
              defaultOpen
            >
              <motion.ul
                className="dark:text-white text-sm"
                variants={container}
              >
                {work.keyFeatures.map((keyFeature, i) => (
                  <motion.li
                    key={i}
                    className="font-medium text-sm mb-2"
                    variants={item}
                  >
                    <span className="block mb-1">{keyFeature.key}</span>
                    <motion.ul
                      className="list-disc list-inside"
                      variants={container}
                    >
                      {keyFeature.features.map((feature, i) => (
                        <motion.li
                          key={i}
                          className="font-medium text-sm text-gray-600 dark:text-gray-400 mb-1"
                          variants={item}
                        >
                          {feature}
                        </motion.li>
                      ))}
                    </motion.ul>
                  </motion.li>
                ))}
              </motion.ul>
            </Disclosure>
          </motion.div>
        )}

        {work.link && (
          <motion.div variants={item}>
            <Disclosure
              icon={<FiBriefcase className="text-lg mr-2 inline-block" />}
              title={labels.preview}
              defaultOpen
            >
              <motion.iframe
                src={work.link}
                className="w-full h-[500px] md:h-[500px] lg:h-[700px] xl:h-[800px] 2xl:h-[900px] border-none"
                title={work.name}
                variants={fadeIn}
              />
            </Disclosure>
          </motion.div>
        )}
      </motion.div>
    </Modal.Content>
  );
};

export default WorkModalContent;
