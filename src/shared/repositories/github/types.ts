export interface GitHubStats {
  stars: number;
  forks: number;
  issues: number;
  watchers: number;
}

export interface GitHubRepositoryConfig {
  owner: string;
  repo: string;
}
