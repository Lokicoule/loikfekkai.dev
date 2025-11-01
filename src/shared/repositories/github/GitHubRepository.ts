import { GitHubApiAdapter } from "../../adapters";
import type { GitHubRepositoryConfig, GitHubStats } from "./types";

export class GitHubRepository {
  private readonly adapter: GitHubApiAdapter;

  constructor(adapter?: GitHubApiAdapter) {
    this.adapter = adapter || new GitHubApiAdapter();
  }

  async fetchRepositoryStats(
    repository: GitHubRepositoryConfig
  ): Promise<GitHubStats | null> {
    const { owner, repo } = repository;
    const data = await this.adapter.fetchRepository(owner, repo);

    if (!data) {
      return null;
    }

    return {
      stars: data.stargazers_count || 0,
      forks: data.forks_count || 0,
      issues: data.open_issues_count || 0,
      watchers: data.watchers_count || 0,
    };
  }
}
