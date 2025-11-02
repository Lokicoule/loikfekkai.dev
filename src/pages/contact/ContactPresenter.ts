import { TranslationPort } from "../../shared/ports";
import { GlobalStore } from "../../shared/persistence/GlobalStore";
import { Presenter } from "../../shared/presentation/Presenter";
import { ContactViewModel } from "./ContactViewModel";

export class ContactPresenter extends Presenter<ContactViewModel> {
  constructor(store: GlobalStore, private readonly translator: TranslationPort) {
    super(store);
  }

  protected onActivate(): Array<() => void> {
    return [this.store.subscribe("lang", () => this.notify())];
  }

  protected buildViewModel(): ContactViewModel {
    return {
      lang: this.store.get("lang"),
      labels: {
        name: this.translator.translate("contact.form.name"),
        email: this.translator.translate("contact.form.email"),
        message: this.translator.translate("contact.form.message"),
        sending: this.translator.translate("contact.form.sending"),
        submit: this.translator.translate("contact.form.submit"),
        success: this.translator.translate("contact.form.success"),
      },
    };
  }

  public translate(key: string): string {
    return this.translator.translate(key);
  }
}
