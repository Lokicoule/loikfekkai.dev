import { NpmPort, NpmStats } from "../ports";

type NpmPointResponse = { downloads: number };
type NpmRangeResponse = { downloads: Array<{ day: string; downloads: number }> };

export class NpmApiAdapter implements NpmPort {
  constructor(private readonly baseUrl: string = "https://api.npmjs.org") {}

  async fetchPackageStats(packageName: string): Promise<NpmStats | null> {
    const [weekly, yearly, allTime] = await Promise.all([
      this.fetchJson<NpmPointResponse>(`/downloads/point/last-week/${packageName}`),
      this.fetchJson<NpmRangeResponse>(`/downloads/range/last-year/${packageName}`),
      this.fetchJson<NpmRangeResponse>(
        `/downloads/range/2000-01-01:2100-01-01/${packageName}`
      ),
    ]);

    if (!weekly && !yearly && !allTime) {
      return null;
    }

    const sum = (range: NpmRangeResponse | null) =>
      range ? range.downloads.reduce((total, day) => total + day.downloads, 0) : 0;

    return {
      weeklyDownloads: weekly?.downloads ?? 0,
      yearlyDownloads: sum(yearly),
      allTimeDownloads: sum(allTime),
    };
  }

  private async fetchJson<T>(path: string): Promise<T | null> {
    try {
      const response = await fetch(`${this.baseUrl}${path}`);
      if (!response.ok) {
        return null;
      }
      return await response.json();
    } catch {
      return null;
    }
  }
}
