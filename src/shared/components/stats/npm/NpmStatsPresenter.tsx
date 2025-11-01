import { GlobalCache } from "../../../persistence/GlobalCache";
import { Presenter } from "../../../presentation/Presenter";
import { NpmRepository } from "../../../repositories/npm/NpmRepository";
import { NpmStats } from "../../../repositories/npm/types";
import { CacheService } from "../../../services/cache/CacheService";
import { NpmStatsViewModel } from "./NpmStatsViewModel";

export class NpmStatsPresenter extends Presenter<NpmStatsViewModel> {
  private readonly npmRepository: NpmRepository;
  private readonly cacheService: CacheService;

  constructor(
    cache: GlobalCache,
    npmRepository: NpmRepository,
    cacheService: CacheService
  ) {
    super(cache);
    this.npmRepository = npmRepository;
    this.cacheService = cacheService;
  }

  protected rebuildViewModel(packageName: string): void {
    this.vm = new NpmStatsViewModel({
      packageName,
      loading: true,
    });
  }

  public async load(
    cb: (vm?: NpmStatsViewModel) => void,
    packageName: string
  ): Promise<void> {
    this.rebuildViewModel(packageName);
    super.load(cb);

    const cacheKey = `npm_stats_${packageName}`;

    const cachedStats = this.cacheService.get<NpmStats>(cacheKey);
    if (cachedStats) {
      this.vm = new NpmStatsViewModel({
        packageName,
        stats: cachedStats,
        loading: false,
      });
      this.cb(this.vm);
      return;
    }

    const stats = await this.npmRepository.fetchPackageStats(packageName);
    if (stats) {
      this.cacheService.set(cacheKey, stats);
    }

    this.vm = new NpmStatsViewModel({
      packageName,
      stats: stats || undefined,
      loading: false,
    });

    this.cb(this.vm);
  }

  public unload(): void {
    super.unload();
  }
}
