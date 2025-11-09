import PageLayout from "../../shared/components/layouts/PageLayout";
import { usePresenter } from "../../shared/presentation/usePresenter";
import FilterWorksList from "./components/FilterWorksList";
import WorkList from "./components/WorkList";
import { WorksController } from "./WorksController";
import { WorksPresenter } from "./WorksPresenter";

type WorksViewProps = {
  presenter: WorksPresenter;
  controller: WorksController;
};

type WorksViewComponent = React.FC<WorksViewProps>;

const WorksView: WorksViewComponent = ({ presenter, controller }) => {
  const viewModel = usePresenter(presenter);

  if (!viewModel) {
    return null;
  }

  const handleFilterChange = (event: React.MouseEvent<HTMLLIElement>) => {
    const filter = event.currentTarget.dataset.filter;
    if (filter) {
      controller.setWorkFilter(filter);
    }
  };

  return (
    <PageLayout
      title={presenter.translate("works.title")}
      head={{
        title: presenter.translate("works.title"),
        description: presenter.translate("works.description.meta"),
      }}
      className="lg:rounded-2xl lg:bg-primary"
      lang={viewModel.lang}
    >
      <div className="flex flex-col space-y-8 pb-8">
        <div className="container mx-auto px-4 md:px-10 lg:px-14">
          <FilterWorksList
            onFilterChange={handleFilterChange}
            filter={viewModel.filter}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 md:px-10 lg:px-14">
          <WorkList
            works={viewModel.works}
            labels={viewModel.labels}
            lang={viewModel.lang}
          />
        </div>
      </div>
    </PageLayout>
  );
};

export default WorksView;
