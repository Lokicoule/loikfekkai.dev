import { TranslationPort } from "../../shared/ports";
import { GlobalStore } from "../../shared/persistence/GlobalStore";
import { Presenter } from "../../shared/presentation/Presenter";
import { ResumeViewModel } from "./ResumeViewModel";
import { educationData as educationDataEn } from "./datas/educationData.en";
import { educationData as educationDataFr } from "./datas/educationData.fr";
import { experienceData as experienceDataEn } from "./datas/experienceData.en";
import { experienceData as experienceDataFr } from "./datas/experienceData.fr";
import { knowledgeData } from "./datas/knowledgeData";
import { skillData as skillDataEn } from "./datas/skillData.en";
import { skillData as skillDataFr } from "./datas/skillData.fr";

export class ResumePresenter extends Presenter<ResumeViewModel> {
  constructor(store: GlobalStore, private readonly translator: TranslationPort) {
    super(store);
  }

  protected onActivate(): Array<() => void> {
    return [this.store.subscribe("lang", () => this.notify())];
  }

  protected buildViewModel(): ResumeViewModel {
    const lang = this.store.get("lang");

    return {
      experiences: lang === "fr" ? experienceDataFr : experienceDataEn,
      educations: lang === "fr" ? educationDataFr : educationDataEn,
      skills: lang === "fr" ? skillDataFr : skillDataEn,
      knowledges: knowledgeData,
      labels: {
        description: this.translator.translate("description"),
        technologiesUsed: this.translator.translate("technologiesUsed"),
        keyAchievements: this.translator.translate(
          "resume.experience.keyAchievements"
        ),
        personalExperience: this.translator.translate(
          "resume.experience.personalExperience"
        ),
        duration: this.translator.translate("duration"),
        company: this.translator.translate("company"),
        place: this.translator.translate("place"),
        client: this.translator.translate("client"),
        project: this.translator.translate("project"),
        roleAndResponsibilities: this.translator.translate(
          "roleAndResponsibilities"
        ),
      },
    };
  }

  public translate(key: string): string {
    return this.translator.translate(key);
  }
}
