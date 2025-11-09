import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import { NpmStats } from "../../../ports";
import { Language } from "../../../persistence/GlobalStore";
import { formatNumber } from "../../../utils/formatNumber";
import { RemoteStatsPresenter, RemoteStatsViewModel } from "../RemoteStatsPresenter";
import { DURATION } from "../../../motion";

type NpmStatsViewProps = {
  packageName: string;
  presenter: RemoteStatsPresenter<string, NpmStats>;
  lang: Language;
};

export const NpmStatsView: React.FC<NpmStatsViewProps> = ({
  packageName,
  presenter,
  lang,
}) => {
  const [vm, setVm] = useState<RemoteStatsViewModel<string, NpmStats>>();

  useEffect(
    () => presenter.attach(packageName, setVm),
    [presenter, packageName]
  );

  if (!vm || vm.loading) {
    return (
      <div
        className="h-4 w-32 rounded bg-secondary/20 animate-pulse motion-reduce:animate-none"
        aria-hidden
      />
    );
  }

  const { stats } = vm;

  if (
    !stats ||
    (stats.weeklyDownloads === 0 &&
      stats.yearlyDownloads === 0 &&
      stats.allTimeDownloads === 0)
  ) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: DURATION.fast }}
      className="flex items-center gap-4 text-xs text-secondary"
    >
      {stats.weeklyDownloads > 0 && (
        <div className="flex items-center gap-1">
          <FaDownload className="text-secondary" size={12} />
          <span>{formatNumber(stats.weeklyDownloads, lang)}/week</span>
        </div>
      )}
      {stats.yearlyDownloads > 0 && (
        <div className="flex items-center gap-1">
          <FaDownload className="text-secondary" size={12} />
          <span>{formatNumber(stats.yearlyDownloads, lang)}/year</span>
        </div>
      )}
      {stats.allTimeDownloads > 0 && (
        <div className="flex items-center gap-1">
          <FaDownload className="text-secondary" size={12} />
          <span>{formatNumber(stats.allTimeDownloads, lang)} total</span>
        </div>
      )}
    </motion.div>
  );
};

export default NpmStatsView;
