import { GlobalStore } from "../persistence/GlobalStore";

export type Subscriber<T> = (vm: T) => void;

export abstract class Presenter<T> {
  private readonly subscribers = new Set<Subscriber<T>>();
  private disposers: Array<() => void> = [];
  protected vm?: T;

  constructor(protected readonly store: GlobalStore) {}

  public attach(subscriber: Subscriber<T>): () => void {
    if (this.subscribers.size === 0) {
      this.disposers = this.onActivate();
      this.vm = this.buildViewModel();
    }
    this.subscribers.add(subscriber);
    subscriber(this.vm as T);
    return () => this.detach(subscriber);
  }

  protected notify(): void {
    this.vm = this.buildViewModel();
    this.subscribers.forEach((subscriber) => subscriber(this.vm as T));
  }

  protected abstract onActivate(): Array<() => void>;
  protected abstract buildViewModel(): T;

  private detach(subscriber: Subscriber<T>): void {
    this.subscribers.delete(subscriber);
    if (this.subscribers.size === 0) {
      this.disposers.forEach((dispose) => dispose());
      this.disposers = [];
    }
  }
}

// Transitional shell for not-yet-migrated subclasses; deleted with the last migration.
export abstract class LegacyPresenter<T> {
  protected vm?: T;
  protected cb: (vm?: T) => void;
  protected store: GlobalStore;

  constructor(store: GlobalStore) {
    this.store = store;
    this.cb = () => {};
  }

  protected abstract rebuildViewModel(...args: never[]): void;

  public load(cb: (vm?: T) => void, ..._args: unknown[]): void {
    this.cb = cb;
    this.cb(this.vm);
  }

  public unload(): void {
    this.cb = () => {};
  }
}
