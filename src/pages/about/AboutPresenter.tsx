import { TranslatingService } from "../../shared/services/translating/translatingService";
import { GlobalCache } from "../../shared/persistence/GlobalCache";
import { Presenter } from "../../shared/presentation/Presenter";
import { SubscriptionManager } from "../../shared/presentation/SubscriptionManager";
import { AboutViewModel } from "./AboutViewModel";
import { serviceData as serviceDataEn } from "./datas/serviceData.en";
import { serviceData as serviceDataFr } from "./datas/serviceData.fr";

export class AboutPresenter extends Presenter<AboutViewModel> {
  private subscriptionManager: SubscriptionManager;
  private translatingService: TranslatingService;

  constructor(cache: GlobalCache, translatingService: TranslatingService) {
    super(cache);
    this.subscriptionManager = new SubscriptionManager(
      cache,
      "lang",
      AboutPresenter.name,
      (lang) => this.handleLangChange(lang)
    );
    this.translatingService = translatingService;
  }

  private handleLangChange(lang: string) {
    this.rebuildViewModel(lang);
    this.cb(this.vm);
  }

  protected rebuildViewModel(lang: string) {
    const services = lang === "fr" ? serviceDataFr : serviceDataEn;

    this.vm = new AboutViewModel({
      services,
    });
  }

  public load(cb: (vm?: AboutViewModel) => void): void {
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
}
