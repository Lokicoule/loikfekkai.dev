import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { CacheService } from "./CacheService";
import { StoragePort } from "../../ports";

function memoryStorage(): StoragePort {
  const data = new Map<string, unknown>();
  return {
    getItem: <T>(key: string) => (data.has(key) ? (data.get(key) as T) : null),
    setItem: (key, value) => void data.set(key, value),
    removeItem: (key) => void data.delete(key),
  };
}

describe("CacheService", () => {
  beforeEach(() => vi.useFakeTimers());
  afterEach(() => vi.useRealTimers());

  it("returns a fresh entry", () => {
    const cache = new CacheService(memoryStorage());
    cache.set("k", { n: 1 });
    expect(cache.get("k")).toEqual({ n: 1 });
  });

  it("expires an entry past the ttl and evicts it", () => {
    const storage = memoryStorage();
    const cache = new CacheService(storage, 1000);
    cache.set("k", { n: 1 });

    vi.advanceTimersByTime(1001);

    expect(cache.get("k")).toBeNull();
    expect(storage.getItem("k")).toBeNull();
  });

  it("keeps an entry within the ttl", () => {
    const cache = new CacheService(memoryStorage(), 1000);
    cache.set("k", { n: 1 });

    vi.advanceTimersByTime(999);

    expect(cache.get("k")).toEqual({ n: 1 });
  });
});
