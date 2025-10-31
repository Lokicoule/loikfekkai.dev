import { translatingService, projectStatsService } from "./setupServices";
import { AboutPresenter } from "../../pages/about/AboutPresenter";
import { ContactPresenter } from "../../pages/contact/ContactPresenter";
import { NotFoundPresenter } from "../../pages/notFound/NotFoundPresenter";
import { ResumePresenter } from "../../pages/resume/ResumePresenter";
import { WorksPresenter } from "../../pages/works/WorksPresenter";
import { HeroPresenter } from "../components/hero/HeroPresenter";
import { LangPresenter } from "../components/lang/LangPresenter";
import { NavigationPresenter } from "../components/navigation/NavigationPresenter";

import { cache } from "./setupCaches";

const aboutPresenter = new AboutPresenter(cache, translatingService);
const langPresenter = new LangPresenter(cache);
const navigationPresenter = new NavigationPresenter(cache);
const resumePresenter = new ResumePresenter(cache, translatingService);
const worksPresenter = new WorksPresenter(
  cache,
  translatingService,
  projectStatsService
);
const contactPresenter = new ContactPresenter(cache, translatingService);
const notFoundPresenter = new NotFoundPresenter(cache, translatingService);
const heroPresenter = new HeroPresenter(cache, translatingService);

export {
  aboutPresenter,
  langPresenter,
  navigationPresenter,
  resumePresenter,
  worksPresenter,
  contactPresenter,
  notFoundPresenter,
  heroPresenter,
};
