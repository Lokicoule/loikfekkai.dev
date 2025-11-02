import { useEffect, useState } from "react";
import { FaDownload } from "react-icons/fa";
import { NpmStats } from "../../../ports";
import { formatNumber } from "../../../utils/formatNumber";
import { RemoteStatsPresenter, RemoteStatsViewModel } from "../RemoteStatsPresenter";

type NpmStatsViewProps = {
  packageName: string;
  presenter: RemoteStatsPresenter<string, NpmStats>;
};

export const NpmStatsView: React.FC<NpmStatsViewProps> = ({
  packageName,
  presenter,
}) => {
  const [vm, setVm] = useState<RemoteStatsViewModel<string, NpmStats>>();

  useEffect(
    () => presenter.attach(packageName, setVm),
    [presenter, packageName]
  );

  if (!vm?.stats || vm.loading) {
    return null;
  }

  const { stats } = vm;

  if (
    stats.weeklyDownloads === 0 &&
    stats.yearlyDownloads === 0 &&
    stats.allTimeDownloads === 0
  ) {
    return null;
  }

  return (
    <div className="flex items-center gap-4 text-xs text-secondary">
      {stats.weeklyDownloads > 0 && (
        <div className="flex items-center gap-1">
          <FaDownload className="text-secondary" size={12} />
          <span>{formatNumber(stats.weeklyDownloads)}/week</span>
        </div>
      )}
      {stats.yearlyDownloads > 0 && (
        <div className="flex items-center gap-1">
          <FaDownload className="text-secondary" size={12} />
          <span>{formatNumber(stats.yearlyDownloads)}/year</span>
        </div>
      )}
      {stats.allTimeDownloads > 0 && (
        <div className="flex items-center gap-1">
          <FaDownload className="text-secondary" size={12} />
          <span>{formatNumber(stats.allTimeDownloads)} total</span>
        </div>
      )}
    </div>
  );
};

export default NpmStatsView;
