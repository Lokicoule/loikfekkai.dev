import { GlobalCache } from "../../../shared/persistence/GlobalCache";
import { Presenter } from "../../../shared/presentation/Presenter";
import { SubscriptionManager } from "../../../shared/presentation/SubscriptionManager";
import { LangViewModel } from "./LangViewModel";

export class LangPresenter extends Presenter<LangViewModel> {
  private subscriptionManager: SubscriptionManager;

  constructor(cache: GlobalCache) {
    super(cache);
    this.subscriptionManager = new SubscriptionManager(
      cache,
      "lang",
      LangPresenter.name,
      (lang) => this.handleLangChange(lang)
    );
  }

  private handleLangChange(lang: string) {
    this.rebuildViewModel(lang);
    this.cb(this.vm);
  }

  protected rebuildViewModel(lang: string) {
    this.vm = new LangViewModel({
      lang,
    });
  }

  public load(cb: (vm?: LangViewModel) => void): void {
    this.rebuildViewModel(this.subscriptionManager.getValue());

    super.load(cb);
  }

  public unload(): void {
    this.subscriptionManager.unsubscribe();

    super.unload();
  }
}
