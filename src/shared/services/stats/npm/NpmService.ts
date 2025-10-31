import { NpmApiAdapter } from "../../../adapters";

export interface NpmStats {
  weeklyDownloads: number;
  yearlyDownloads: number;
  allTimeDownloads: number;
}

export class NpmService {
  private readonly adapter: NpmApiAdapter;

  constructor(adapter?: NpmApiAdapter) {
    this.adapter = adapter || new NpmApiAdapter();
  }

  async fetchPackageStats(packageName: string): Promise<NpmStats | null> {
    try {
      const [weeklyData, yearlyData, allTimeData] = await Promise.all([
        this.adapter.fetchWeeklyDownloads(packageName),
        this.adapter.fetchRangeDownloads(packageName, "last-year"),
        this.adapter.fetchRangeDownloads(packageName, "all-time"),
      ]);

      const weeklyDownloads = weeklyData?.downloads || 0;

      const yearlyDownloads = yearlyData?.downloads
        ? yearlyData.downloads.reduce((sum, day) => sum + day.downloads, 0)
        : 0;

      const allTimeDownloads = allTimeData?.downloads
        ? allTimeData.downloads.reduce((sum, day) => sum + day.downloads, 0)
        : 0;

      return {
        weeklyDownloads,
        yearlyDownloads,
        allTimeDownloads,
      };
    } catch (error) {
      console.error("Failed to fetch npm stats:", error);
      return null;
    }
  }
}
