import { useEffect, useState } from "react";

import PageLayout from "../../shared/components/layouts/PageLayout";
import { ResumePresenter } from "./ResumePresenter";
import { ResumeViewModel } from "./ResumeViewModel";
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
  const [viewModel, setViewModel] = useState<ResumeViewModel | undefined>();

  useEffect(() => {
    presenter.load((vm) => setViewModel(vm));
  }, [presenter]);

  if (!viewModel) {
    return null;
  }

  return (
    <PageLayout
      title={presenter.translateAndSanitize("resume.title")}
      head={{
        title: presenter.translateAndSanitize("resume.title"),
        description: presenter.translateAndSanitize("resume.description.meta"),
      }}
      className="lg:rounded-2xl lg:bg-primary"
    >
      <div className="px-2 sm:px-5 md:px-10 lg:px-14 px-4 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-6 gap-y-6">
          <ExperienceSection
            title={presenter.translateAndSanitize("resume.experience.title")}
            items={viewModel.experiences}
          />
          <EducationSection
            title={presenter.translateAndSanitize("resume.education.title")}
            items={viewModel.educations}
          />
        </div>
      </div>

      <div className="container py-12 px-2 sm:px-5 md:px-10 lg:px-14">
        <div className="grid grid-cols-1  md:grid-cols-2 gap-8">
          <div className="col-span-1">
            <div className="flex flex-col space-y-12">
              <StackSection />
              <SkillSection
                title={presenter.translateAndSanitize("resume.skill.title")}
                items={viewModel.skills}
              />
            </div>
          </div>

          <div className="col-span-1">
            <KnowledgeSection
              title={presenter.translateAndSanitize("resume.knowledge.title")}
              items={viewModel.knowledges}
            />
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default ResumeView;
