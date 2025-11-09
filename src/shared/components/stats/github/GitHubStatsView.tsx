import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaStar, FaCodeBranch } from "react-icons/fa";
import { GitHubRepositoryConfig, GitHubStats } from "../../../ports";
import { Language } from "../../../persistence/GlobalStore";
import { formatNumber } from "../../../utils/formatNumber";
import { RemoteStatsPresenter, RemoteStatsViewModel } from "../RemoteStatsPresenter";
import { DURATION } from "../../../motion";

type GitHubStatsViewProps = {
  repository: GitHubRepositoryConfig;
  presenter: RemoteStatsPresenter<GitHubRepositoryConfig, GitHubStats>;
  lang: Language;
};

export const GitHubStatsView: React.FC<GitHubStatsViewProps> = ({
  repository,
  presenter,
  lang,
}) => {
  const [vm, setVm] =
    useState<RemoteStatsViewModel<GitHubRepositoryConfig, GitHubStats>>();

  useEffect(
    () => presenter.attach(repository, setVm),
    [presenter, repository]
  );

  if (!vm || vm.loading) {
    return (
      <div
        className="h-4 w-24 rounded bg-secondary/20 animate-pulse motion-reduce:animate-none"
        aria-hidden
      />
    );
  }
  const { stats } = vm;
  if (!stats || (stats.stars === 0 && stats.forks === 0)) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: DURATION.fast }}
      className="flex items-center gap-4 text-xs text-secondary"
    >
      {stats.stars > 0 && (
        <div className="flex items-center gap-1">
          <FaStar className="text-secondary" size={12} />
          <span>{formatNumber(stats.stars, lang)}</span>
        </div>
      )}
      {stats.forks > 0 && (
        <div className="flex items-center gap-1">
          <FaCodeBranch className="text-secondary" size={12} />
          <span>{formatNumber(stats.forks, lang)}</span>
        </div>
      )}
    </motion.div>
  );
};

export default GitHubStatsView;
