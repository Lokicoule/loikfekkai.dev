import { GlobalCache } from "../../../shared/persistence/GlobalCache";
import { Presenter } from "../../../shared/presentation/Presenter";
import { SubscriptionManager } from "../../../shared/presentation/SubscriptionManager";

import { NavigationViewModel } from "./NavigationViewModel";

import { navigationData as navigationDataEn } from "./datas/navigationData.en";
import { navigationData as navigationDataFr } from "./datas/navigationData.fr";

export class NavigationPresenter extends Presenter<NavigationViewModel> {
  private subscriptionManager: SubscriptionManager;

  constructor(cache: GlobalCache) {
    super(cache);
    this.subscriptionManager = new SubscriptionManager(
      cache,
      "lang",
      NavigationPresenter.name,
      (lang) => this.handleLangChange(lang)
    );
  }

  private handleLangChange(lang: string) {
    this.rebuildViewModel(lang);
    this.cb(this.vm);
  }

  protected rebuildViewModel(lang: string) {
    this.vm = new NavigationViewModel({
      items: lang === "fr" ? navigationDataFr : navigationDataEn,
    });
  }

  public load(cb: (vm?: NavigationViewModel) => void): void {
    this.rebuildViewModel(this.subscriptionManager.getValue());

    super.load(cb);
  }

  public unload(): void {
    this.subscriptionManager.unsubscribe();

    super.unload();
  }
}
