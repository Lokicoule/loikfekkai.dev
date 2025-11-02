import { ContactController } from "../../pages/contact/ContactController";
import { WorksController } from "../../pages/works/WorksController";
import { LangController } from "../components/lang/LangController";
import { store } from "./setupCaches";

import {
  loggingService,
  mailingService,
  notificationsService,
  translatingService,
} from "./setupServices";

const contactController = new ContactController(
  notificationsService,
  mailingService,
  loggingService,
  translatingService
);

const langController = new LangController(
  store,
  notificationsService,
  translatingService
);

const worksController = new WorksController(store, notificationsService);

export { contactController, langController, worksController };
