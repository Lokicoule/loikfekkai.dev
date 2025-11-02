import { StoragePort } from "../../ports";

interface CacheEntry<T> {
  data: T;
  timestamp: number;
}

const DEFAULT_TTL_MS = 60 * 60 * 1000;

export class CacheService {
  private readonly storage: StoragePort;
  private readonly defaultTTL: number;

  constructor(storage: StoragePort, defaultTTL: number = DEFAULT_TTL_MS) {
    this.storage = storage;
    this.defaultTTL = defaultTTL;
  }

  public get<T>(key: string): T | null {
    const cachedValue = this.storage.getItem<CacheEntry<T>>(key);

    if (!cachedValue) {
      return null;
    }

    const now = Date.now();
    const hasExpired = now - cachedValue.timestamp > this.defaultTTL;

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
