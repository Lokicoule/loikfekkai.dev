import { FaStar, FaDownload } from "react-icons/fa";
import { ProjectStats as ProjectStatsType } from "../../../shared/services/stats";

type ProjectStatsProps = {
  stats?: ProjectStatsType;
};

const formatNumber = (num: number): string => {
  if (num >= 1000000) {
    return `${(num / 1000000).toFixed(1)}M`;
  }
  if (num >= 1000) {
    return `${(num / 1000).toFixed(1)}K`;
  }
  return num.toString();
};

export const ProjectStats: React.FC<ProjectStatsProps> = ({ stats }) => {
  if (!stats || (!stats.github && !stats.npm)) {
    return null;
  }

  const hasGithubStats = stats.github?.stars !== undefined && stats.github.stars > 0;
  const hasNpmStats = stats.npm && (
    (stats.npm.weeklyDownloads !== undefined && stats.npm.weeklyDownloads > 0) ||
    (stats.npm.yearlyDownloads !== undefined && stats.npm.yearlyDownloads > 0) ||
    (stats.npm.allTimeDownloads !== undefined && stats.npm.allTimeDownloads > 0)
  );

  if (!hasGithubStats && !hasNpmStats) {
    return null;
  }

  return (
    <div className="flex flex-wrap gap-3 mt-3">
      {hasGithubStats && (
        <div className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800/30">
          <FaStar className="text-yellow-500" size={14} />
          <div className="flex flex-col">
            <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">
              {formatNumber(stats.github!.stars)}
            </span>
            <span className="text-[10px] text-gray-500 dark:text-gray-400">stars</span>
          </div>
        </div>
      )}

      {hasNpmStats && (
        <div className="flex items-center gap-3 px-3 py-2 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg border border-green-200 dark:border-green-800/30">
          <FaDownload className="text-green-500" size={14} />
          <div className="flex gap-3">
            {stats.npm!.weeklyDownloads > 0 && (
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">
                  {formatNumber(stats.npm!.weeklyDownloads)}
                </span>
                <span className="text-[10px] text-gray-500 dark:text-gray-400">week</span>
              </div>
            )}
            {stats.npm!.yearlyDownloads > 0 && (
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">
                  {formatNumber(stats.npm!.yearlyDownloads)}
                </span>
                <span className="text-[10px] text-gray-500 dark:text-gray-400">year</span>
              </div>
            )}
            {stats.npm!.allTimeDownloads > 0 && (
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">
                  {formatNumber(stats.npm!.allTimeDownloads)}
                </span>
                <span className="text-[10px] text-gray-500 dark:text-gray-400">total</span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectStats;
