import { GlobalState, GlobalStore } from "../persistence/GlobalStore";

export class SubscriptionManager<K extends keyof GlobalState = "lang"> {
  private readonly dispose: () => void;

  constructor(
    private readonly store: GlobalStore,
    private readonly key: K,
    _subscriberName: string,
    callback: (value: GlobalState[K]) => void
  ) {
    this.dispose = store.subscribe(key, callback);
  }

  public getValue(): GlobalState[K] {
    return this.store.get(this.key);
  }

  public unsubscribe(): void {
    this.dispose();
  }
}
