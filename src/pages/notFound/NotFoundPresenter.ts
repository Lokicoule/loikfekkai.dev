import { TranslatingService } from "../../shared/services/translating/translatingService";
import { GlobalStore } from "../../shared/persistence/GlobalStore";
import { Presenter } from "../../shared/presentation/Presenter";
import { SubscriptionManager } from "../../shared/presentation/SubscriptionManager";
import { NotFoundViewModel } from "./NotFoundViewModel";

export class NotFoundPresenter extends Presenter<NotFoundViewModel> {
  private subscriptionManager: SubscriptionManager;
  private translatingService: TranslatingService;

  constructor(store: GlobalStore, service: TranslatingService) {
    super(store);
    this.subscriptionManager = new SubscriptionManager(
      store,
      "lang",
      NotFoundPresenter.name,
      (lang) => this.handleNotFoundChange(lang)
    );
    this.translatingService = service;
  }

  private handleNotFoundChange(lang: string) {
    this.rebuildViewModel(lang);
    this.cb(this.vm);
  }

  protected rebuildViewModel(lang: string) {
    this.vm = new NotFoundViewModel({
      lang,
    });
  }

  public load(cb: (vm?: NotFoundViewModel) => void): void {
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
