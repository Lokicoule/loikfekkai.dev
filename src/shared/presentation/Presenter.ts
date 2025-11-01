import { GlobalStore } from "../persistence/GlobalStore";

export abstract class Presenter<T> {
  protected vm?: T;
  protected cb: (vm?: T) => void;
  protected store: GlobalStore;

  constructor(store: GlobalStore) {
    this.store = store;
    this.cb = () => { };
  }

  protected abstract rebuildViewModel(...args: unknown[]): void;

  public load(cb: (vm?: T) => void, ..._args: unknown[]): void {
    this.cb = cb;
    this.cb(this.vm);
  }

  public unload(): void {
    this.cb = () => { };
  }
}
