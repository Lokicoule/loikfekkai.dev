import { useEffect, useState } from "react";
import { FaStar, FaCodeBranch } from "react-icons/fa";
import { GitHubRepositoryConfig, GitHubStats } from "../../../ports";
import { formatNumber } from "../../../utils/formatNumber";
import { RemoteStatsPresenter, RemoteStatsViewModel } from "../RemoteStatsPresenter";

type GitHubStatsViewProps = {
  repository: GitHubRepositoryConfig;
  presenter: RemoteStatsPresenter<GitHubRepositoryConfig, GitHubStats>;
};

export const GitHubStatsView: React.FC<GitHubStatsViewProps> = ({
  repository,
  presenter,
}) => {
  const [vm, setVm] =
    useState<RemoteStatsViewModel<GitHubRepositoryConfig, GitHubStats>>();

  useEffect(
    () => presenter.attach(repository, setVm),
    [presenter, repository]
  );

  if (!vm?.stats || vm.loading) {
    return null;
  }
  const { stats } = vm;
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
