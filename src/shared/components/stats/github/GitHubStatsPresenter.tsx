import { GlobalStore } from "../../../persistence/GlobalStore";
import { Presenter } from "../../../presentation/Presenter";
import { GitHubRepository } from "../../../repositories/github/GitHubRepository";
import { GitHubRepositoryConfig, GitHubStats } from "../../../repositories/github/types";
import { CacheService } from "../../../services/cache/CacheService";
import { GitHubStatsViewModel } from "./GitHubStatsViewModel";

export class GitHubStatsPresenter extends Presenter<GitHubStatsViewModel> {
  private readonly githubRepository: GitHubRepository;
  private readonly cacheService: CacheService;
  private readonly callbacks: Map<string, (vm?: GitHubStatsViewModel) => void>;

  constructor(
    store: GlobalStore,
    githubRepository: GitHubRepository,
    cacheService: CacheService
  ) {
    super(store);
    this.githubRepository = githubRepository;
    this.cacheService = cacheService;
    this.callbacks = new Map();
  }

  public async load(
    cb: (vm?: GitHubStatsViewModel) => void,
    repository: GitHubRepositoryConfig
  ): Promise<void> {
    const repoKey = this.getRepositoryKey(repository);
    this.callbacks.set(repoKey, cb);

    cb(new GitHubStatsViewModel({ repository, loading: true }));

    const cacheKey = `github_stats_${repoKey}`;
    const cachedStats = this.cacheService.get<GitHubStats>(cacheKey);
    if (cachedStats) {
      this.notifyCallback(repoKey, repository, cachedStats, false);
      return;
    }

    const stats = await this.githubRepository.fetchRepositoryStats(repository);
    if (stats) {
      this.cacheService.set(cacheKey, stats);
    }

    this.notifyCallback(repoKey, repository, stats, false);
  }

  public unload(repository?: GitHubRepositoryConfig): void {
    if (repository) {
      this.callbacks.delete(this.getRepositoryKey(repository));
    } else {
      this.callbacks.clear();
    }
    super.unload();
  }

  private notifyCallback(
    repoKey: string,
    repository: GitHubRepositoryConfig,
    stats: GitHubStats | null,
    loading: boolean
  ): void {
    const callback = this.callbacks.get(repoKey);
    if (callback) {
      callback(new GitHubStatsViewModel({ repository, stats: stats || undefined, loading }));
    }
  }

  private getRepositoryKey(repository: GitHubRepositoryConfig): string {
    return `${repository.owner}_${repository.repo}`;
  }

  protected rebuildViewModel(repository: GitHubRepositoryConfig): void {
    this.vm = new GitHubStatsViewModel({ repository, loading: true });
  }
}
