import { GlobalCache } from "../../shared/persistence/GlobalCache";
import { Presenter } from "../../shared/presentation/Presenter";
import { SubscriptionManager } from "../../shared/presentation/SubscriptionManager";
import { ProjectStatsService } from "../../shared/services/stats/ProjectStatsService";
import { TranslatingService } from "../../shared/services/translating/translatingService";
import { WorkProps, WorksViewModel } from "./WorksViewModel";
import { workData as workDataEn } from "./datas/workData.en";
import { workData as workDataFr } from "./datas/workData.fr";

export class WorksPresenter extends Presenter<WorksViewModel> {
  private langSubscriptionManager: SubscriptionManager;
  private filterSubscriptionManager: SubscriptionManager;
  private translatingService: TranslatingService;
  private projectStatsService: ProjectStatsService;

  constructor(
    cache: GlobalCache,
    translatingService: TranslatingService,
    projectStatsService: ProjectStatsService
  ) {
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
    this.projectStatsService = projectStatsService;
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

  private async loadStatsForWorks(works: WorkProps[]): Promise<WorkProps[]> {
    const worksWithStats = await Promise.all(
      works.map(async (work) => {
        if (work.statsConfig) {
          const stats = await this.projectStatsService.fetchProjectStats(
            work.statsConfig
          );
          return { ...work, stats };
        }
        return work;
      })
    );
    return worksWithStats;
  }

  protected rebuildViewModel(lang: string) {
    const works = lang === "fr" ? workDataFr : workDataEn;

    this.vm = new WorksViewModel({
      works,
      filter: this.filterSubscriptionManager.getValue(),
    });
  }

  public async load(cb: (vm?: WorksViewModel) => void): Promise<void> {
    this.rebuildViewModel(this.langSubscriptionManager.getValue());

    if (this.vm) {
      const worksWithStats = await this.loadStatsForWorks(
        this.vm.attributes.works
      );
      this.vm = new WorksViewModel({
        works: worksWithStats,
        filter: this.filterSubscriptionManager.getValue(),
      });
    }

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
