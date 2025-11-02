import { useEffect, useState } from "react";
import { FaStar, FaCodeBranch } from "react-icons/fa";
import { GitHubRepositoryConfig } from "../../../repositories/github/types";
import { formatNumber } from "../../../utils/formatNumber";
import { GitHubStatsViewModel } from "./GitHubStatsViewModel";
import { GitHubStatsPresenter } from "./GitHubStatsPresenter";

type GitHubStatsViewProps = {
  repository: GitHubRepositoryConfig;
  presenter: GitHubStatsPresenter;
};

export const GitHubStatsView: React.FC<GitHubStatsViewProps> = ({
  repository,
  presenter,
}) => {
  const [vm, setVm] = useState<GitHubStatsViewModel | undefined>();

  useEffect(() => {
    presenter.load(setVm, repository);

    return () => {
      presenter.unload(repository);
    };
  }, [presenter, repository]);

  if (!vm?.attributes.stats || vm.attributes.loading) {
    return null;
  }

  const { stats } = vm.attributes;

  if (stats.stars === 0 && stats.forks === 0) {
    return null;
  }

  return (
    <div className="flex items-center gap-4 text-xs text-secondary">
      {stats.stars > 0 && (
        <div className="flex items-center gap-1">
          <FaStar className="text-secondary" size={12} />
          <span>{formatNumber(stats.stars)}</span>
        </div>
      )}
      {stats.forks > 0 && (
        <div className="flex items-center gap-1">
          <FaCodeBranch className="text-secondary" size={12} />
          <span>{formatNumber(stats.forks)}</span>
        </div>
      )}
    </div>
  );
};

export default GitHubStatsView;
