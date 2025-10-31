import { AnimatePresence, motion } from "framer-motion";
import { FiBriefcase } from "react-icons/fi";
import { GoStack } from "react-icons/go";
import Disclosure from "../../../../shared/components/adapters/@headlessui/Disclosure";
import Modal from "../../../../shared/components/adapters/@headlessui/Modal";
import Stack from "../../../../shared/components/elements/Stack";
import { translatingService } from "../../../../shared/composition";
import { WorkProps } from "../../WorksViewModel";

type WorkModalContentProps = {
  work: WorkProps;
};

type WorkModalContentComponent = React.FC<WorkModalContentProps>;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  }
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const WorkModalContent: WorkModalContentComponent = ({ work }) => {
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
            title={translatingService.translate("technologiesUsed")}
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
            title={translatingService.translate("description")}
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
              title={translatingService.translate("works.keyFeatures")}
              defaultOpen
            >
              <motion.ul
                className="dark:text-white text-sm"
                variants={container}
              >
                <AnimatePresence>
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
                </AnimatePresence>
              </motion.ul>
            </Disclosure>
          </motion.div>
        )}

        {work.link && (
          <motion.div variants={item}>
            <Disclosure
              icon={<FiBriefcase className="text-lg mr-2 inline-block" />}
              title={translatingService.translate("works.preview")}
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
