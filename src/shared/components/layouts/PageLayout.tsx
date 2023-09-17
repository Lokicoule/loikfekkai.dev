import { motion } from "framer-motion";
import PageTitle, { PageTitleProps } from "../page-title/PageTitle";

interface PageLayoutProps extends React.PropsWithChildren<PageTitleProps> {}

const PageLayout: React.FC<PageLayoutProps> = ({ children, title }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.75 } },
  };

  return (
    <>
      <PageTitle title={title} />
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <h2 className="text-5xl font-bold dark:text-white relative inline-block pt-12 px-2 sm:px-5 md:px-10 lg:px-14 mb-12 md:mb-[30px]">
          {title}
        </h2>
        {children}
      </motion.section>
    </>
  );
};

export default PageLayout;
