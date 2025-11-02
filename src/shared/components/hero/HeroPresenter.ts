import { GlobalStore } from "../../../shared/persistence/GlobalStore";
import { Presenter } from "../../../shared/presentation/Presenter";
import { TranslationPort } from "../../ports";
import { HeroViewModel } from "./HeroViewModel";
import { contactInfoData as contactInfoDataEn } from "./datas/contactInfoData.en";
import { contactInfoData as contactInfoDataFr } from "./datas/contactInfoData.fr";

export class HeroPresenter extends Presenter<HeroViewModel> {
  constructor(store: GlobalStore, private readonly translator: TranslationPort) {
    super(store);
  }

  protected onActivate(): Array<() => void> {
    return [this.store.subscribe("lang", () => this.notify())];
  }

  protected buildViewModel(): HeroViewModel {
    const lang = this.store.get("lang");
    return {
      infos: lang === "fr" ? contactInfoDataFr : contactInfoDataEn,
      lang,
    };
  }

  public translate(key: string): string {
    return this.translator.translate(key);
  }
}
