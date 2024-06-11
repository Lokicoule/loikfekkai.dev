import {
  GlobalCache,
  type Language,
} from "../../../shared/persistence/GlobalCache";
import { Presenter } from "../../../shared/presentation/Presenter";
import { SubscriptionManager } from "../../../shared/presentation/SubscriptionManager";
import { TranslatingService } from "../../services/translating/translatingService";
import { HeroViewModel } from "./HeroViewModel";
import { contactInfoData as contactInfoDataEn } from "./datas/contactInfoData.en";
import { contactInfoData as contactInfoDataFr } from "./datas/contactInfoData.fr";
export class HeroPresenter extends Presenter<HeroViewModel> {
  private subscriptionManager: SubscriptionManager;
  private translatingService: TranslatingService;

  constructor(cache: GlobalCache, service: TranslatingService) {
    super(cache);
    this.subscriptionManager = new SubscriptionManager(
      cache,
      "lang",
      HeroPresenter.name,
      (lang) => this.handleContactChange(lang)
    );
    this.translatingService = service;
  }

  private handleContactChange(lang: string) {
    this.rebuildViewModel(lang);
    this.cb(this.vm);
  }

  protected rebuildViewModel(lang: string) {
    this.vm = new HeroViewModel({
      infos: lang === "fr" ? contactInfoDataFr : contactInfoDataEn,
    });
  }

  public load(cb: (vm?: HeroViewModel) => void): void {
    this.rebuildViewModel(this.subscriptionManager.getValue());

    super.load(cb);
  }

  public unload(): void {
    this.subscriptionManager.unsubscribe();

    super.unload();
  }

  public translateAndSanitize(key: string): string {
    return this.translatingService.translateAndSanitize(key);
  }

  public getLang(): Language {
    return this.subscriptionManager.getValue() as Language;
  }
}
