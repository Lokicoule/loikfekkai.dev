import { GlobalStore } from "../../shared/persistence/GlobalStore";
import { Presenter } from "../../shared/presentation/Presenter";
import { TranslationPort } from "../../shared/ports";
import { WorksViewModel, filterWorks } from "./WorksViewModel";
import { workData } from "./datas/workData";

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
    const lang = this.store.get("lang");
    const filter = this.store.get("workFilter");
    const works = workData.map((work) => ({
      ...work,
      tag: work.tag[lang],
      description: work.description[lang],
      keyFeatures: work.keyFeatures?.map((feature) => ({
        ...feature,
        key: feature.key[lang],
        features: feature.features[lang],
      })),
    }));
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
