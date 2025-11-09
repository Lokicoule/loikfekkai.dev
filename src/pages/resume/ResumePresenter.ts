import { TranslationPort } from "../../shared/ports";
import { GlobalStore } from "../../shared/persistence/GlobalStore";
import { Presenter } from "../../shared/presentation/Presenter";
import { ResumeViewModel } from "./ResumeViewModel";
import { educationData } from "./datas/educationData";
import { experienceData } from "./datas/experienceData";
import { knowledgeData } from "./datas/knowledgeData";
import { skillData } from "./datas/skillData";

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
      experiences: experienceData.map((exp) => ({
        ...exp,
        name: exp.name[lang],
        tag: exp.tag[lang],
        description: exp.description?.[lang],
        duration: exp.duration[lang],
        roleAndResponsibilities: exp.roleAndResponsibilities[lang],
        client: exp.client && { ...exp.client, name: exp.client.name[lang] },
        internship: exp.internship && { duration: exp.internship.duration[lang] },
        technologiesUsed: {
          ...exp.technologiesUsed,
          architectures: exp.technologiesUsed.architectures?.[lang],
        },
        keyAchievements: exp.keyAchievements?.[lang],
        personalExperience: exp.personalExperience?.[lang],
      })),
      educations: educationData.map((edu) => ({
        ...edu,
        date: edu.date[lang],
        title: edu.title[lang],
        level: edu.level?.[lang],
        internship: edu.internship && {
          ...edu.internship,
          duration: edu.internship.duration[lang],
        },
      })),
      skills: skillData.map((skill) => ({ ...skill, name: skill.name[lang] })),
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
      lang,
    };
  }

  public translate(key: string): string {
    return this.translator.translate(key);
  }
}
