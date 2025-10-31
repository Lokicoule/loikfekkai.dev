export interface NpmDownloadsResponse {
  downloads: number;
  start: string;
  end: string;
  package: string;
}

export interface NpmRangeDownloadsResponse {
  start: string;
  end: string;
  package: string;
  downloads: Array<{
    day: string;
    downloads: number;
  }>;
}

export type NpmDownloadRange = "last-day" | "last-week" | "last-month" | "last-year";

export type NpmDownloadRangeInput = NpmDownloadRange | "all-time" | string;

export class NpmApiAdapter {
  private convertRangeToNpmFormat(range: NpmDownloadRangeInput): string {
    if (range === "all-time") {
      return "2000-01-01:2100-01-01";
    }
    return range;
  }
  private readonly baseUrl: string;

  constructor(baseUrl: string = "https://api.npmjs.org") {
    this.baseUrl = baseUrl;
  }

  async fetchWeeklyDownloads(
    packageName: string
  ): Promise<NpmDownloadsResponse | null> {
    try {
      const response = await fetch(
        `${this.baseUrl}/downloads/point/last-week/${packageName}`
      );

      if (!response.ok) {
        console.warn(
          `npm API returned ${response.status} for weekly downloads of ${packageName}`
        );
        return null;
      }

      const data: NpmDownloadsResponse = await response.json();
      return data;
    } catch (error) {
      console.error("npm API adapter error (weekly):", error);
      return null;
    }
  }

  async fetchRangeDownloads(
    packageName: string,
    range: NpmDownloadRangeInput = "last-year"
  ): Promise<NpmRangeDownloadsResponse | null> {
    try {
      const npmRange = this.convertRangeToNpmFormat(range);
      const response = await fetch(
        `${this.baseUrl}/downloads/range/${npmRange}/${packageName}`
      );

      if (!response.ok) {
        console.warn(
          `npm API returned ${response.status} for range downloads of ${packageName}`
        );
        return null;
      }

      const data: NpmRangeDownloadsResponse = await response.json();
      return data;
    } catch (error) {
      console.error("npm API adapter error (range):", error);
      return null;
    }
  }
}
