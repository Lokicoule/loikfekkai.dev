import { CacheService } from "../../services/cache/CacheService";

export type RemoteStatsViewModel<TConfig, TStats> = {
  config: TConfig;
  stats: TStats | null;
  loading: boolean;
};

type Subscriber<TConfig, TStats> = (vm: RemoteStatsViewModel<TConfig, TStats>) => void;

export class RemoteStatsPresenter<TConfig, TStats> {
  private readonly subscribers = new Map<string, Set<Subscriber<TConfig, TStats>>>();
  private readonly inFlight = new Map<string, Promise<TStats | null>>();

  constructor(
    private readonly keyOf: (config: TConfig) => string,
    private readonly fetchStats: (config: TConfig) => Promise<TStats | null>,
    private readonly cache: CacheService,
    private readonly cachePrefix: string
  ) {}

  public attach(config: TConfig, subscriber: Subscriber<TConfig, TStats>): () => void {
    const key = this.keyOf(config);
    let keySubscribers = this.subscribers.get(key);
    if (!keySubscribers) {
      keySubscribers = new Set();
      this.subscribers.set(key, keySubscribers);
    }
    keySubscribers.add(subscriber);
    subscriber({ config, stats: null, loading: true });

    void this.resolve(config, key);

    return () => {
      keySubscribers.delete(subscriber);
      if (keySubscribers.size === 0) {
        this.subscribers.delete(key);
      }
    };
  }

  private async resolve(config: TConfig, key: string): Promise<void> {
    const cacheKey = `${this.cachePrefix}_${key}`;
    const cached = this.cache.get<TStats>(cacheKey);
    if (cached) {
      this.publish(key, { config, stats: cached, loading: false });
      return;
    }

    let pending = this.inFlight.get(key);
    if (!pending) {
      pending = this.fetchStats(config);
      this.inFlight.set(key, pending);
      pending.finally(() => this.inFlight.delete(key));
    }

    const stats = await pending;
    if (stats) {
      this.cache.set(cacheKey, stats);
    }
    this.publish(key, { config, stats, loading: false });
  }

  private publish(key: string, vm: RemoteStatsViewModel<TConfig, TStats>): void {
    this.subscribers.get(key)?.forEach((subscriber) => subscriber(vm));
  }
}
