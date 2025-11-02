import { Presenter } from "../../../shared/presentation/Presenter";
import { NavigationViewModel } from "./NavigationViewModel";
import { navigationData } from "./datas/navigationData";

export class NavigationPresenter extends Presenter<NavigationViewModel> {
  protected onActivate(): Array<() => void> {
    return [this.store.subscribe("lang", () => this.notify())];
  }

  protected buildViewModel(): NavigationViewModel {
    const lang = this.store.get("lang");
    return {
      items: navigationData.map((item) => ({ ...item, name: item.name[lang] })),
    };
  }
}
