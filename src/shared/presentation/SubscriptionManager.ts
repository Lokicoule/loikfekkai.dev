import { Callback, GlobalStore, KeyInCache } from "../persistence/GlobalStore";

export class SubscriptionManager {
  private store: GlobalStore;
  private key: KeyInCache;
  private subscriberName: string;
  private callback: Callback;

  constructor(
    store: GlobalStore,
    key: KeyInCache,
    subscriberName: string,
    callback: Callback
  ) {
    this.store = store;
    this.key = key;
    this.subscriberName = subscriberName;
    this.callback = callback;
    this.setupSubscription();
  }

  private setupSubscription() {
    this.store.subscribe(this.key, this.subscriberName, this.callback);
  }

  public getValue() {
    return this.store.get(this.key);
  }

  public unsubscribe(): void {
    this.store.unsubscribe(this.key, this.subscriberName);
  }
}
