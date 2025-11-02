import { describe, expect, it, vi } from "vitest";
import { GlobalStore } from "../persistence/GlobalStore";
import { Presenter } from "./Presenter";

class LangEcho extends Presenter<{ lang: string }> {
  protected onActivate() {
    return [this.store.subscribe("lang", () => this.notify())];
  }
  protected buildViewModel() {
    return { lang: this.store.get("lang") };
  }
}

describe("Presenter", () => {
  it("delivers the current vm on attach and rebuilds on store change", () => {
    const store = new GlobalStore("en", "all");
    const presenter = new LangEcho(store);
    const view = vi.fn();

    presenter.attach(view);
    store.set("lang", "fr");

    expect(view).toHaveBeenNthCalledWith(1, { lang: "en" });
    expect(view).toHaveBeenNthCalledWith(2, { lang: "fr" });
  });

  it("serves several simultaneous subscribers", () => {
    const store = new GlobalStore("en", "all");
    const presenter = new LangEcho(store);
    const desktop = vi.fn();
    const mobile = vi.fn();

    presenter.attach(desktop);
    presenter.attach(mobile);
    store.set("lang", "fr");

    expect(desktop).toHaveBeenLastCalledWith({ lang: "fr" });
    expect(mobile).toHaveBeenLastCalledWith({ lang: "fr" });
  });

  it("disposes store subscriptions on last detach and reactivates on re-attach", () => {
    const store = new GlobalStore("en", "all");
    const presenter = new LangEcho(store);
    const first = vi.fn();

    const detach = presenter.attach(first);
    detach();
    store.set("lang", "fr");
    expect(first).toHaveBeenCalledTimes(1);

    const second = vi.fn();
    presenter.attach(second);
    expect(second).toHaveBeenCalledWith({ lang: "fr" });
    store.set("lang", "en");
    expect(second).toHaveBeenLastCalledWith({ lang: "en" });
  });

  it("keeps store subscriptions while at least one subscriber remains", () => {
    const store = new GlobalStore("en", "all");
    const presenter = new LangEcho(store);
    const staying = vi.fn();
    const leaving = vi.fn();

    presenter.attach(staying);
    const detach = presenter.attach(leaving);
    detach();
    store.set("lang", "fr");

    expect(staying).toHaveBeenLastCalledWith({ lang: "fr" });
    expect(leaving).toHaveBeenCalledTimes(1);
  });
});
