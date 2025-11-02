import { useEffect, useState } from "react";
import PageLayout from "../../shared/components/layouts/PageLayout";

import { ContactController } from "./ContactController";
import { ContactPresenter } from "./ContactPresenter";
import { ContactViewModel } from "./ContactViewModel";
import ContactFormView from "./components/ContactFormView";
import { ContactFormData } from "./contactFormValidation";

type ContactViewProps = {
  controller: ContactController;
  presenter: ContactPresenter;
};
type ContactViewComponent = React.FC<ContactViewProps>;

const ContactView: ContactViewComponent = ({ controller, presenter }) => {
  const [viewModel, setViewModel] = useState<ContactViewModel | undefined>();

  useEffect(() => {
    presenter.load((vm) => setViewModel(vm));
  }, [presenter]);

  if (!viewModel) {
    return null;
  }

  const handleSubmit = (data: ContactFormData) => {
    return controller.submitContactForm(data);
  };

  return (
    <PageLayout
      head={{
        title: presenter.translateAndSanitize("contact.title"),
        description: presenter.translateAndSanitize("contact.description.meta"),
      }}
      title={presenter.translateAndSanitize("contact.title")}
      className="lg:rounded-2xl lg:bg-primary"
    >
      <div className="mx-4 md:mx-[60px] p-4 md:p-16 border-1 border-primary bg-secondary rounded-xl bg-primary mb-[30px] md:mb-[60px]">
        <h3 className="text-4xl leading-tight bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-500 inline-block text-transparent bg-clip-text">
          {presenter.translateAndSanitize("contact.description.content")}
        </h3>
        <div className="mt-10">
          <ContactFormView onSubmit={handleSubmit} />
        </div>
      </div>
    </PageLayout>
  );
};

export default ContactView;
