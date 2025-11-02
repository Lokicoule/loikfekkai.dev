import { describe, expect, it, vi } from "vitest";
import { RemoteStatsPresenter } from "./RemoteStatsPresenter";
import { CacheService } from "../../services/cache/CacheService";
import { StoragePort } from "../../ports";

function memoryStorage(): StoragePort {
  const data = new Map<string, unknown>();
  return {
    getItem: <T>(key: string) => (data.has(key) ? (data.get(key) as T) : null),
    setItem: (key, value) => void data.set(key, value),
    removeItem: (key) => void data.delete(key),
  };
}

const keyOf = (config: { id: string }) => config.id;

describe("RemoteStatsPresenter", () => {
  it("serves cached stats without fetching", async () => {
    const cache = new CacheService(memoryStorage());
    cache.set("stats_a", { value: 1 });
    const fetchStats = vi.fn();
    const presenter = new RemoteStatsPresenter(keyOf, fetchStats, cache, "stats");
    const view = vi.fn();

    presenter.attach({ id: "a" }, view);
    await vi.waitFor(() =>
      expect(view).toHaveBeenLastCalledWith({
        config: { id: "a" },
        stats: { value: 1 },
        loading: false,
      })
    );

    expect(fetchStats).not.toHaveBeenCalled();
  });

  it("dedupes concurrent fetches for the same key", async () => {
    const cache = new CacheService(memoryStorage());
    let resolveFetch!: (stats: { value: number } | null) => void;
    const fetchStats = vi.fn(
      () => new Promise<{ value: number } | null>((r) => (resolveFetch = r))
    );
    const presenter = new RemoteStatsPresenter(keyOf, fetchStats, cache, "stats");
    const first = vi.fn();
    const second = vi.fn();

    presenter.attach({ id: "a" }, first);
    presenter.attach({ id: "a" }, second);
    resolveFetch({ value: 7 });

    await vi.waitFor(() =>
      expect(second).toHaveBeenLastCalledWith({
        config: { id: "a" },
        stats: { value: 7 },
        loading: false,
      })
    );
    expect(fetchStats).toHaveBeenCalledTimes(1);
  });

  it("stops notifying after detach", async () => {
    const cache = new CacheService(memoryStorage());
    const fetchStats = vi.fn(async () => ({ value: 3 }));
    const presenter = new RemoteStatsPresenter(keyOf, fetchStats, cache, "stats");
    const view = vi.fn();

    const detach = presenter.attach({ id: "a" }, view);
    detach();
    await vi.waitFor(() => expect(fetchStats).toHaveBeenCalled());

    expect(view).toHaveBeenCalledTimes(1);
    expect(view).toHaveBeenCalledWith({ config: { id: "a" }, stats: null, loading: true });
  });
});
