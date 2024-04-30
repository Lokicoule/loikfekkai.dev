import { useEffect, useState } from "react";
import PageLayout from "../../shared/components/layouts/PageLayout";
import { AboutPresenter } from "./AboutPresenter";
import { AboutViewModel } from "./AboutViewModel";

type AboutViewProps = {
  presenter: AboutPresenter;
};

type AboutViewComponent = React.FC<AboutViewProps>;

const AboutView: AboutViewComponent = ({ presenter }) => {
  const [viewModel, setViewModel] = useState<AboutViewModel | undefined>();

  useEffect(() => {
    presenter.load((vm) => setViewModel(vm));
  }, [presenter]);

  if (!viewModel) {
    return null;
  }

  return (
    <PageLayout
      head={{
        title: presenter.translateAndSanitize("about.title"),
        description: presenter.translateAndSanitize("about.description.meta"),
      }}
      title={presenter.translateAndSanitize("about.title")}
      className="lg:rounded-2xl lg:bg-primary"
    >
      {viewModel.whoAmI && (
        <div className="container mx-auto px-4 md:px-10 lg:px-14">
          <h2 className="text-[25px] text-secondary font-medium pb-5 font-primary">
            {viewModel.whoAmI.title}
          </h2>
          <p className="text-md leading-8 mb-6 text-tertiary text-justify">
            {viewModel.whoAmI.description}
          </p>
        </div>
      )}
      {viewModel.whatDoIOffer && (
        <div className="container mx-auto px-4 md:px-10 lg:px-14">
          <h2 className="text-[25px] text-secondary font-medium pb-5 font-primary">
            {viewModel.whatDoIOffer.title}
          </h2>
          {viewModel.whatDoIOffer.description.map((item, index) => (
            <p
              key={index}
              className="text-md leading-8 mb-6 text-tertiary text-justify"
            >
              <strong>{item.title}:</strong> {item.description}
            </p>
          ))}
        </div>
      )}
      {viewModel.whatKindOfProjects && (
        <div className="container mx-auto px-4 md:px-10 lg:px-14">
          <h2 className="text-[25px] text-secondary font-medium pb-5 font-primary">
            {viewModel.whatKindOfProjects.title}
          </h2>
          <p className="text-md leading-8 mb-6 text-tertiary text-justify">
            {viewModel.whatKindOfProjects.description}
          </p>
        </div>
      )}
      {viewModel.livingTheDream && (
        <div className="container mx-auto px-4 md:px-10 lg:px-14">
          <h2 className="text-[25px] text-secondary font-medium pb-5 font-primary">
            {viewModel.livingTheDream.title}
          </h2>
          <p className="text-md leading-8 mb-6 text-tertiary text-justify">
            {viewModel.livingTheDream.description}
          </p>
        </div>
      )}
    </PageLayout>
  );
};

export default AboutView;
