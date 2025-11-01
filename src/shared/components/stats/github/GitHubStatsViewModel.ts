import { GitHubStats, GitHubRepositoryConfig } from "../../../repositories/github/types";

export interface GitHubStatsAttributes {
  repository: GitHubRepositoryConfig;
  stats?: GitHubStats;
  loading?: boolean;
}

export class GitHubStatsViewModel {
  public attributes: GitHubStatsAttributes;

  constructor(attributes: GitHubStatsAttributes) {
    this.attributes = attributes;
  }
}
