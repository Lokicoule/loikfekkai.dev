import PageLayout from "../../shared/components/layouts/PageLayout";
import { usePresenter } from "../../shared/presentation/usePresenter";
import { NotFoundPresenter } from "./NotFoundPresenter";

type NotFoundViewProps = {
  presenter: NotFoundPresenter;
};

type NotFoundViewComponent = React.FC<NotFoundViewProps>;

const NotFoundView: NotFoundViewComponent = ({ presenter }) => {
  const viewModel = usePresenter(presenter);

  if (!viewModel) {
    return null;
  }

  return (
    <PageLayout
      head={{
        title: presenter.translate("notFound.title"),
        description: presenter.translate("notFound.description.meta"),
      }}
      className="lg:rounded-2xl lg:bg-primary"
      lang={viewModel.lang}
    >
      <div className="flex flex-col justify-center items-center text-center mx-4 md:mx-[60px] p-4 md:p-16 mb-[30px] md:mb-[60px] leading-tight bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-500 inline-block text-transparent bg-clip-text">
        <h2 className="text-6xl font-extrabold">404</h2>
        <span>{presenter.translate("notFound.description.content")}</span>
      </div>
    </PageLayout>
  );
};

export default NotFoundView;
