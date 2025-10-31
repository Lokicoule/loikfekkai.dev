import { GitHubService, type GitHubStats } from "./github/GitHubService";
import { NpmService, type NpmStats } from "./npm/NpmService";

export interface ProjectStats {
  github?: GitHubStats;
  npm?: NpmStats;
}

export interface ProjectStatsConfig {
  github?: { owner: string; repo: string };
  npm?: string;
}

export class ProjectStatsService {
  private readonly githubService: GitHubService;
  private readonly npmService: NpmService;
  private cache: Map<string, { data: ProjectStats; timestamp: number }> =
    new Map();
  private readonly CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

  constructor(githubService: GitHubService, npmService: NpmService) {
    this.githubService = githubService;
    this.npmService = npmService;
  }

  async fetchProjectStats(
    config: ProjectStatsConfig
  ): Promise<ProjectStats> {
    const cacheKey = JSON.stringify(config);
    const cached = this.cache.get(cacheKey);

    if (cached && Date.now() - cached.timestamp < this.CACHE_DURATION) {
      return cached.data;
    }

    const stats: ProjectStats = {};

    if (config.github) {
      const githubStats = await this.githubService.fetchRepositoryStats({
        owner: config.github.owner,
        repo: config.github.repo,
      });
      if (githubStats) stats.github = githubStats;
    }

    if (config.npm) {
      const npmStats = await this.npmService.fetchPackageStats(config.npm);
      if (npmStats) stats.npm = npmStats;
    }

    this.cache.set(cacheKey, { data: stats, timestamp: Date.now() });
    return stats;
  }

  clearCache(): void {
    this.cache.clear();
  }
}
