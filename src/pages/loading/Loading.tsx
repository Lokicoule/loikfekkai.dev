import PageLayout from "../../shared/components/layouts/PageLayout";
import { store } from "../../shared/composition";

type LoadingProps = {
  className?: string;
};

type LoadingComponent = React.FC<LoadingProps>;

const Loading: LoadingComponent = ({ className }) => {
  return (
    <div className="animate-pulse motion-reduce:animate-none">
      <PageLayout
        title=""
        className={`${className}  h-full lg:rounded-2xl lg:bg-primary`}
        lang={store.get("lang")}
      />
    </div>
  );
};

export default Loading;
