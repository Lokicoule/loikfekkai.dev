import { LocalStorageService } from "../storage/localStorageService";

interface CacheEntry<T> {
  data: T;
  timestamp: number;
}

export class CacheService {
  private readonly storage: LocalStorageService;
  private readonly defaultTTL: number;

  constructor(
    storage: LocalStorageService,
    defaultTTL: number = 60 * 60 * 1000 // 1 hour by default
  ) {
    this.storage = storage;
    this.defaultTTL = defaultTTL;
  }

  public get<T>(key: string, ttl?: number): T | null {
    const cachedValue = this.storage.getItem<CacheEntry<T>>(key);

    if (!cachedValue) {
      return null;
    }

    const now = Date.now();
    const cacheTTL = ttl ?? this.defaultTTL;
    const hasExpired = now - cachedValue.timestamp > cacheTTL;

    if (hasExpired) {
      this.storage.removeItem(key);
      return null;
    }

    return cachedValue.data;
  }

  public set<T>(key: string, data: T): void {
    const entry: CacheEntry<T> = {
      data,
      timestamp: Date.now(),
    };

    this.storage.setItem(key, entry);
  }

  public remove(key: string): void {
    this.storage.removeItem(key);
  }
}
