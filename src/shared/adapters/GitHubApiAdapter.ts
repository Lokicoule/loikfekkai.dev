export interface GitHubRepositoryResponse {
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  watchers_count: number;
}

export class GitHubApiAdapter {
  private readonly baseUrl: string;

  constructor(baseUrl: string = "https://api.github.com") {
    this.baseUrl = baseUrl;
  }

  async fetchRepository(
    owner: string,
    repo: string
  ): Promise<GitHubRepositoryResponse | null> {
    try {
      const response = await fetch(`${this.baseUrl}/repos/${owner}/${repo}`);

      if (!response.ok) {
        // Silent fail for rate limiting (403) and other API errors
        return null;
      }

      const data: GitHubRepositoryResponse = await response.json();
      return data;
    } catch (error) {
      // Silent fail for network errors
      return null;
    }
  }
}
