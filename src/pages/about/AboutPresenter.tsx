import { TranslatingService } from "../../shared/services/translating/translatingService";
import { GlobalCache } from "../../shared/persistence/GlobalCache";
import { Presenter } from "../../shared/presentation/Presenter";
import { SubscriptionManager } from "../../shared/presentation/SubscriptionManager";
import { AboutViewModel } from "./AboutViewModel";
import { aboutDataEn as dataEn } from "./datas/aboutData.en";
import { aboutDataFr as dataFr } from "./datas/aboutData.fr";

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
    const data = lang === "fr" ? dataFr : dataEn;

    this.vm = new AboutViewModel(data);
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
