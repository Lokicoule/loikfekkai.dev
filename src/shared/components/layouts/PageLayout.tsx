import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { fadeRise } from "../../motion";
import Head, { HeadProps } from "../elements/Head";
import Footer from "./Footer";

interface PageLayoutProps extends React.PropsWithChildren {
  className?: string;
  title?: string;
  head?: HeadProps;
}

const PageLayout: React.FC<PageLayoutProps> = ({
  children,
  title,
  head,
  className,
}) => {
  const { pathname } = useLocation();

  return (
    <div className="min-h-screen flex flex-col items-center">
      <div className={`flex-1 ${className}`}>
        {head ? <Head {...head} /> : null}
        <motion.section key={pathname} variants={fadeRise} initial="hidden" animate="visible">
          <h2 className="text-5xl font-primary text-primary relative inline-block pt-12 px-2 sm:px-5 md:px-10 lg:px-14 mb-12 md:mb-[30px]">
            {title}
          </h2>
          <div>{children}</div>
        </motion.section>
      </div>

      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default PageLayout;
