import { GlobalCache } from "../../../persistence/GlobalCache";
import { Presenter } from "../../../presentation/Presenter";
import { GitHubRepository } from "../../../repositories/github/GitHubRepository";
import { GitHubRepositoryConfig, GitHubStats } from "../../../repositories/github/types";
import { CacheService } from "../../../services/cache/CacheService";
import { GitHubStatsViewModel } from "./GitHubStatsViewModel";

export class GitHubStatsPresenter extends Presenter<GitHubStatsViewModel> {
  private readonly githubRepository: GitHubRepository;
  private readonly cacheService: CacheService;

  constructor(
    cache: GlobalCache,
    githubRepository: GitHubRepository,
    cacheService: CacheService
  ) {
    super(cache);
    this.githubRepository = githubRepository;
    this.cacheService = cacheService;
  }

  protected rebuildViewModel(repository: GitHubRepositoryConfig): void {
    this.vm = new GitHubStatsViewModel({
      repository,
      loading: true,
    });
  }

  public async load(
    cb: (vm?: GitHubStatsViewModel) => void,
    repository: GitHubRepositoryConfig
  ): Promise<void> {
    this.rebuildViewModel(repository);
    super.load(cb);

    const cacheKey = `github_stats_${repository.owner}_${repository.repo}`;

    const cachedStats = this.cacheService.get<GitHubStats>(cacheKey);
    if (cachedStats) {
      this.vm = new GitHubStatsViewModel({
        repository,
        stats: cachedStats,
        loading: false,
      });
      this.cb(this.vm);
      return;
    }

    const stats = await this.githubRepository.fetchRepositoryStats(repository);
    if (stats) {
      this.cacheService.set(cacheKey, stats);
    }

    this.vm = new GitHubStatsViewModel({
      repository,
      stats: stats || undefined,
      loading: false,
    });

    this.cb(this.vm);
  }

  public unload(): void {
    super.unload();
  }
}
