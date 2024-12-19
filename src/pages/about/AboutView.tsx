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
      <div className="flex flex-col space-y-8 pb-8">
        {viewModel.whoAmI && (
          <div className="container mx-auto px-4 md:px-10 lg:px-14">
            <h2 className="text-[25px] text-secondary font-medium pb-5 font-primary">
              {viewModel.whoAmI.title}
            </h2>
            <p className="text-md leading-8 text-tertiary text-justify rounded-2xl bg-primary p-5 lg:p-0 lg:bg-transparent">
              {viewModel.whoAmI.description}
            </p>
          </div>
        )}
        {viewModel.whatDoIOffer && (
          <div className="container mx-auto px-4 md:px-10 lg:px-14">
            <h2 className="text-[25px] text-secondary font-medium pb-5 font-primary">
              {viewModel.whatDoIOffer.title}
            </h2>
            <div className="space-y-6">
              {viewModel.whatDoIOffer.description.map((item, index) => (
                <p
                  key={index}
                  className="text-md leading-8 text-tertiary text-justify rounded-2xl bg-primary p-5 lg:p-0 lg:bg-transparent"
                >
                  <strong>{item.title}</strong> {item.description}
                </p>
              ))}
            </div>
          </div>
        )}
        {viewModel.livingTheDream && (
          <div className="container mx-auto px-4 md:px-10 lg:px-14">
            <h2 className="text-[25px] text-secondary font-medium pb-5 font-primary">
              {viewModel.livingTheDream.title}
            </h2>
            <p className="text-md leading-8 text-tertiary text-justify rounded-2xl bg-primary p-5 lg:p-0 lg:bg-transparent">
              {viewModel.livingTheDream.description}
            </p>
          </div>
        )}
        {viewModel.outro && (
          <section className="container mx-auto px-4 md:px-10 lg:px-14">
            <p className="text-center font-medium text-lg font-primary text-tertiary ">
              {viewModel.outro}
            </p>
          </section>
        )}
      </div>
    </PageLayout>
  );
};

export default AboutView;
