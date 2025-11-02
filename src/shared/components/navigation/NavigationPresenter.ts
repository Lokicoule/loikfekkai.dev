import { Presenter } from "../../../shared/presentation/Presenter";
import { NavigationViewModel } from "./NavigationViewModel";
import { navigationData as navigationDataEn } from "./datas/navigationData.en";
import { navigationData as navigationDataFr } from "./datas/navigationData.fr";

export class NavigationPresenter extends Presenter<NavigationViewModel> {
  protected onActivate(): Array<() => void> {
    return [this.store.subscribe("lang", () => this.notify())];
  }

  protected buildViewModel(): NavigationViewModel {
    return {
      items: this.store.get("lang") === "fr" ? navigationDataFr : navigationDataEn,
    };
  }
}
