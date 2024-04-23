import { TranslatingService } from "../../shared/services/translating/translatingService";
import { GlobalCache } from "../../shared/persistence/GlobalCache";
import { Presenter } from "../../shared/presentation/Presenter";
import { SubscriptionManager } from "../../shared/presentation/SubscriptionManager";
import { ResumeViewModel } from "./ResumeViewModel";
import { educationData as educationDataEn } from "./datas/educationData.en";
import { educationData as educationDataFr } from "./datas/educationData.fr";
import { experienceData as experienceDataEn } from "./datas/experienceData.en";
import { experienceData as experienceDataFr } from "./datas/experienceData.fr";
import { knowledgeData } from "./datas/knowledgeData";
import { skillData as skillDataEn } from "./datas/skillData.en";
import { skillData as skillDataFr } from "./datas/skillData.fr";

export class ResumePresenter extends Presenter<ResumeViewModel> {
  private subscriptionManager: SubscriptionManager;
  private translatingService: TranslatingService;

  constructor(cache: GlobalCache, translatingService: TranslatingService) {
    super(cache);
    this.subscriptionManager = new SubscriptionManager(
      cache,
      "lang",
      ResumePresenter.name,
      (lang) => this.handleLangChange(lang)
    );
    this.translatingService = translatingService;
  }

  private handleLangChange(lang: string) {
    this.rebuildViewModel(lang);
    this.cb(this.vm);
  }

  protected rebuildViewModel(lang: string) {
    const experiences = lang === "fr" ? experienceDataFr : experienceDataEn;
    const educations = lang === "fr" ? educationDataFr : educationDataEn;
    const skills = lang === "fr" ? skillDataFr : skillDataEn;
    const knowledges = knowledgeData;

    this.vm = new ResumeViewModel({
      experiences,
      educations,
      skills,
      knowledges,
    });
  }

  public load(cb: (vm?: ResumeViewModel) => void): void {
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
