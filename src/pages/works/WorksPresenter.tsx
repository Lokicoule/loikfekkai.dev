import { TranslatingService } from "../../shared/services/translating/translatingService";
import { GlobalCache } from "../../shared/persistence/GlobalCache";
import { Presenter } from "../../shared/presentation/Presenter";
import { SubscriptionManager } from "../../shared/presentation/SubscriptionManager";
import { WorksViewModel } from "./WorksViewModel";
import { workData as workDataEn } from "./datas/workData.en";
import { workData as workDataFr } from "./datas/workData.fr";

export class WorksPresenter extends Presenter<WorksViewModel> {
  private langSubscriptionManager: SubscriptionManager;
  private filterSubscriptionManager: SubscriptionManager;
  private translatingService: TranslatingService;

  constructor(cache: GlobalCache, translatingService: TranslatingService) {
    super(cache);
    this.langSubscriptionManager = new SubscriptionManager(
      cache,
      "lang",
      WorksPresenter.name,
      (lang) => this.handleLangChange(lang)
    );
    this.filterSubscriptionManager = new SubscriptionManager(
      cache,
      "workFilter",
      WorksPresenter.name,
      (filter) => this.handleFilterChange(filter)
    );
    this.translatingService = translatingService;
  }

  private handleLangChange(lang: string) {
    this.rebuildViewModel(lang);
    this.cb(this.vm);
  }

  private handleFilterChange(filter: string) {
    if (this.vm) {
      this.vm = new WorksViewModel({
        works: this.vm.attributes.works,
        filter,
      });
      this.cb(this.vm);
    }
  }

  protected rebuildViewModel(lang: string) {
    const works = lang === "fr" ? workDataFr : workDataEn;

    this.vm = new WorksViewModel({
      works,
      filter: this.filterSubscriptionManager.getValue(),
    });
  }

  public load(cb: (vm?: WorksViewModel) => void): void {
    this.rebuildViewModel(this.langSubscriptionManager.getValue());

    super.load(cb);
  }

  public unload(): void {
    this.langSubscriptionManager.unsubscribe();

    super.unload();
  }

  public translateAndSanitize(key: string): string {
    return this.translatingService.translateAndSanitize(key);
  }
}
