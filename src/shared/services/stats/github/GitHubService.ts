import { GitHubApiAdapter } from "../../../adapters";

export interface GitHubStats {
  stars: number;
  forks: number;
  issues: number;
  watchers: number;
}

export interface GitHubRepository {
  owner: string;
  repo: string;
}

export class GitHubService {
  private readonly adapter: GitHubApiAdapter;

  constructor(adapter?: GitHubApiAdapter) {
    this.adapter = adapter || new GitHubApiAdapter();
  }

  async fetchRepositoryStats(
    repository: GitHubRepository
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
