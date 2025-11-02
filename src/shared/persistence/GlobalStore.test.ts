import { describe, expect, it, vi } from "vitest";
import { GlobalStore } from "./GlobalStore";

describe("GlobalStore", () => {
  it("delivers the new value to every subscriber of the key", () => {
    const store = new GlobalStore("en", "all");
    const first = vi.fn();
    const second = vi.fn();
    store.subscribe("lang", first);
    store.subscribe("lang", second);

    store.set("lang", "fr");

    expect(first).toHaveBeenCalledWith("fr");
    expect(second).toHaveBeenCalledWith("fr");
  });

  it("stops delivering after the disposer runs", () => {
    const store = new GlobalStore("en", "all");
    const cb = vi.fn();
    const dispose = store.subscribe("workFilter", cb);

    dispose();
    store.set("workFilter", "backend");

    expect(cb).not.toHaveBeenCalled();
    expect(store.get("workFilter")).toBe("backend");
  });

  it("scopes notifications to the written key", () => {
    const store = new GlobalStore("en", "all");
    const langCb = vi.fn();
    store.subscribe("lang", langCb);

    store.set("workFilter", "tools");

    expect(langCb).not.toHaveBeenCalled();
  });
});
