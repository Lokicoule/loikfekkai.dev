import { GlobalStore } from "../../shared/persistence/GlobalStore";
import { Presenter } from "../../shared/presentation/Presenter";
import { TranslationPort } from "../../shared/ports";
import { WorksViewModel, filterWorks } from "./WorksViewModel";
import { workData as workDataEn } from "./datas/workData.en";
import { workData as workDataFr } from "./datas/workData.fr";

export class WorksPresenter extends Presenter<WorksViewModel> {
  constructor(store: GlobalStore, private readonly translator: TranslationPort) {
    super(store);
  }

  protected onActivate(): Array<() => void> {
    return [
      this.store.subscribe("lang", () => this.notify()),
      this.store.subscribe("workFilter", () => this.notify()),
    ];
  }

  protected buildViewModel(): WorksViewModel {
    const works = this.store.get("lang") === "fr" ? workDataFr : workDataEn;
    const filter = this.store.get("workFilter");
    return {
      works: filterWorks(works, filter),
      filter,
      labels: {
        preview: this.translator.translate("works.preview"),
        keyFeatures: this.translator.translate("works.keyFeatures"),
        description: this.translator.translate("description"),
        technologiesUsed: this.translator.translate("technologiesUsed"),
        client: this.translator.translate("project"),
      },
    };
  }

  public translate(key: string): string {
    return this.translator.translate(key);
  }
}
