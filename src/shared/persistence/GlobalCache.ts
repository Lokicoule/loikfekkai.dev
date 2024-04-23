export type Language = "en" | "fr";
export type WorkFilter =
  | "all"
  | "backend"
  | "frontend"
  | "fullstack"
  | "other"
  | "tools";

type GlobalState = {
  lang: Language;
  workFilter: WorkFilter;
};

type State = GlobalState[keyof GlobalState];

export type Callback = (data: State) => void;

export type KeyInCache = "lang" | "workFilter";

export class GlobalCache {
  private subscribers: Map<KeyInCache, Map<string, Callback>>;
  private data: Record<KeyInCache, GlobalState[KeyInCache]>;

  public constructor(lang: Language, workFilter: WorkFilter) {
    this.subscribers = new Map();

    this.data = {
      lang,
      workFilter,
    } as Record<KeyInCache, GlobalState[KeyInCache]>;
  }

  public subscribe(key: KeyInCache, subscriberName: string, cb: Callback) {
    let keySubscribers = this.subscribers.get(key);

    if (!keySubscribers) {
      keySubscribers = new Map();
    }

    if (keySubscribers.has(subscriberName)) {
      console.log(`${subscriberName} already subscribed to ${key}, skipping.`);
    }

    keySubscribers.set(subscriberName, cb);
    this.subscribers.set(key, keySubscribers);
  }

  public get(key: KeyInCache) {
    return this.data[key];
  }

  public set(key: KeyInCache, data: GlobalState[KeyInCache]) {
    this.data[key] = data;
    this.notify(key);
  }

  public notify(key: KeyInCache) {
    const newState = this.get(key);

    const keySubscribers = this.subscribers.get(key);
    if (!keySubscribers) {
      return;
    }

    keySubscribers.forEach((cb) => {
      cb(newState);
    });
  }

  public unsubscribe(key: KeyInCache, subscriberName: string) {
    const keySubscribers = this.subscribers.get(key);

    if (keySubscribers) {
      keySubscribers.delete(subscriberName);
    }
  }
}
