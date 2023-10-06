import { TranslatingService } from "../../shared/services/translating/translatingService";
import { GlobalCache } from "../../sharedKernel/persistence/GlobalCache";
import { Presenter } from "../../sharedKernel/presentation/Presenter";
import { SubscriptionManager } from "../../sharedKernel/presentation/SubscriptionManager";
import { ContactViewModel } from "./ContactViewModel";

export class ContactPresenter extends Presenter<ContactViewModel> {
  private subscriptionManager: SubscriptionManager;
  private translatingService: TranslatingService;

  constructor(cache: GlobalCache, service: TranslatingService) {
    super(cache);
    this.subscriptionManager = new SubscriptionManager(
      cache,
      "lang",
      ContactPresenter.name,
      (lang) => this.handleContactChange(lang)
    );
    this.translatingService = service;
  }

  private handleContactChange(lang: string) {
    this.rebuildViewModel(lang);
    this.cb(this.vm);
  }

  protected rebuildViewModel(lang: string) {
    this.vm = new ContactViewModel({
      lang,
    });
  }

  public load(cb: (vm?: ContactViewModel) => void): void {
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
