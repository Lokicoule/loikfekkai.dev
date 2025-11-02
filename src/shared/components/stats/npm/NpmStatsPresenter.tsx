import { NpmRepository } from "../../../repositories/npm/NpmRepository";
import { NpmStats } from "../../../repositories/npm/types";
import { CacheService } from "../../../services/cache/CacheService";
import { NpmStatsViewModel } from "./NpmStatsViewModel";

type ViewModelCallback = (vm?: NpmStatsViewModel) => void;

export class NpmStatsPresenter {
  private readonly npmRepository: NpmRepository;
  private readonly cacheService: CacheService;
  private readonly callbacks: Map<string, ViewModelCallback>;

  constructor(
    npmRepository: NpmRepository,
    cacheService: CacheService
  ) {
    this.npmRepository = npmRepository;
    this.cacheService = cacheService;
    this.callbacks = new Map();
  }

  public async load(cb: ViewModelCallback, packageName: string): Promise<void> {
    this.callbacks.set(packageName, cb);

    cb(new NpmStatsViewModel({ packageName, loading: true }));

    const cacheKey = `npm_stats_${packageName}`;
    const cachedStats = this.cacheService.get<NpmStats>(cacheKey);

    if (cachedStats) {
      const callback = this.callbacks.get(packageName);
      callback?.(new NpmStatsViewModel({ packageName, stats: cachedStats, loading: false }));
      return;
    }

    const stats = await this.npmRepository.fetchPackageStats(packageName);

    if (stats) {
      this.cacheService.set(cacheKey, stats);
    }

    const callback = this.callbacks.get(packageName);
    callback?.(new NpmStatsViewModel({ packageName, stats: stats || undefined, loading: false }));
  }

  public unload(packageName?: string): void {
    if (packageName) {
      this.callbacks.delete(packageName);
    } else {
      this.callbacks.clear();
    }
  }
}
