import { motion } from "framer-motion";
import PageLayout from "../../shared/components/layouts/PageLayout";
import { usePresenter } from "../../shared/presentation/usePresenter";
import { sectionReveal } from "../../shared/motion";
import { ResumePresenter } from "./ResumePresenter";
import EducationSection from "./components/education/EducationSection";
import ExperienceSection from "./components/experience/ExperienceSection";
import KnowledgeSection from "./components/knowledge/KnowledgeSection";
import SkillSection from "./components/skill/SkillSection";
import StackSection from "./components/stack/StackSection";

type ResumeViewProps = {
  presenter: ResumePresenter;
};

type ResumeViewComponent = React.FC<ResumeViewProps>;

const ResumeView: ResumeViewComponent = ({ presenter }) => {
  const viewModel = usePresenter(presenter);

  if (!viewModel) {
    return null;
  }

  return (
    <PageLayout
      title={presenter.translate("resume.title")}
      head={{
        title: presenter.translate("resume.title"),
        description: presenter.translate("resume.description.meta"),
      }}
      className="lg:rounded-2xl lg:bg-primary"
      lang={viewModel.lang}
    >
      <div className="px-2 sm:px-5 md:px-10 lg:px-14 px-4 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-6 gap-y-6">
          <motion.div
            variants={sectionReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
          >
            <ExperienceSection
              title={presenter.translate("resume.experience.title")}
              items={viewModel.experiences}
              labels={viewModel.labels}
            />
          </motion.div>
          <motion.div
            variants={sectionReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
          >
            <EducationSection
              title={presenter.translate("resume.education.title")}
              items={viewModel.educations}
            />
          </motion.div>
        </div>
      </div>

      <div className="container py-12 px-2 sm:px-5 md:px-10 lg:px-14">
        <div className="grid grid-cols-1  md:grid-cols-2 gap-8">
          <motion.div
            className="col-span-1"
            variants={sectionReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
          >
            <div className="flex flex-col space-y-12">
              <StackSection />
              <SkillSection
                title={presenter.translate("resume.skill.title")}
                items={viewModel.skills}
              />
            </div>
          </motion.div>

          <motion.div
            className="col-span-1"
            variants={sectionReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
          >
            <KnowledgeSection
              title={presenter.translate("resume.knowledge.title")}
              items={viewModel.knowledges}
            />
          </motion.div>
        </div>
      </div>
    </PageLayout>
  );
};

export default ResumeView;
