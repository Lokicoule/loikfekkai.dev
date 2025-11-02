export type Language = "en" | "fr";
export type WorkFilter = "all" | "backend" | "frontend" | "tools";

export type GlobalState = {
  lang: Language;
  workFilter: WorkFilter;
};

type Subscribers = {
  [K in keyof GlobalState]: Set<(value: GlobalState[K]) => void>;
};

export class GlobalStore {
  private readonly subscribers: Subscribers = {
    lang: new Set(),
    workFilter: new Set(),
  };
  private readonly state: GlobalState;

  public constructor(lang: Language, workFilter: WorkFilter) {
    this.state = { lang, workFilter };
  }

  public get<K extends keyof GlobalState>(key: K): GlobalState[K] {
    return this.state[key];
  }

  public set<K extends keyof GlobalState>(key: K, value: GlobalState[K]): void {
    this.state[key] = value;
    this.subscribers[key].forEach((cb) => cb(value));
  }

  public subscribe<K extends keyof GlobalState>(
    key: K,
    cb: (value: GlobalState[K]) => void
  ): () => void {
    this.subscribers[key].add(cb);
    return () => this.subscribers[key].delete(cb);
  }
}
