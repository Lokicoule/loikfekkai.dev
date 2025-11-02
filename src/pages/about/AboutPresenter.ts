import { TranslationPort } from "../../shared/ports";
import { GlobalStore } from "../../shared/persistence/GlobalStore";
import { Presenter } from "../../shared/presentation/Presenter";
import { AboutViewModel } from "./AboutViewModel";
import { aboutDataEn as dataEn } from "./datas/aboutData.en";
import { aboutDataFr as dataFr } from "./datas/aboutData.fr";

export class AboutPresenter extends Presenter<AboutViewModel> {
  constructor(store: GlobalStore, private readonly translator: TranslationPort) {
    super(store);
  }

  protected onActivate(): Array<() => void> {
    return [this.store.subscribe("lang", () => this.notify())];
  }

  protected buildViewModel(): AboutViewModel {
    return this.store.get("lang") === "fr" ? dataFr : dataEn;
  }

  public translate(key: string): string {
    return this.translator.translate(key);
  }
}
