import { Presenter } from "../../../shared/presentation/Presenter";
import { LangViewModel } from "./LangViewModel";

export class LangPresenter extends Presenter<LangViewModel> {
  protected onActivate(): Array<() => void> {
    return [this.store.subscribe("lang", () => this.notify())];
  }

  protected buildViewModel(): LangViewModel {
    return {
      lang: this.store.get("lang"),
    };
  }
}
