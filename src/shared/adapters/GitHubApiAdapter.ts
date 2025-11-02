import { GitHubPort, GitHubRepositoryConfig, GitHubStats } from "../ports";

export class GitHubApiAdapter implements GitHubPort {
  constructor(private readonly baseUrl: string = "https://api.github.com") {}

  async fetchRepositoryStats(
    config: GitHubRepositoryConfig
  ): Promise<GitHubStats | null> {
    try {
      const response = await fetch(
        `${this.baseUrl}/repos/${config.owner}/${config.repo}`
      );
      if (!response.ok) {
        return null;
      }
      const data: {
        stargazers_count: number;
        forks_count: number;
        open_issues_count: number;
        watchers_count: number;
      } = await response.json();
      return {
        stars: data.stargazers_count,
        forks: data.forks_count,
        issues: data.open_issues_count,
        watchers: data.watchers_count,
      };
    } catch {
      // stats are decorative: the page must render without them
      return null;
    }
  }
}
