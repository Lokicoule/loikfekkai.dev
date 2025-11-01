import { translatingService, cacheService } from "./setupServices";
import { githubRepository, npmRepository } from "./setupRepositories";
import { AboutPresenter } from "../../pages/about/AboutPresenter";
import { ContactPresenter } from "../../pages/contact/ContactPresenter";
import { NotFoundPresenter } from "../../pages/notFound/NotFoundPresenter";
import { ResumePresenter } from "../../pages/resume/ResumePresenter";
import { WorksPresenter } from "../../pages/works/WorksPresenter";
import { HeroPresenter } from "../components/hero/HeroPresenter";
import { LangPresenter } from "../components/lang/LangPresenter";
import { NavigationPresenter } from "../components/navigation/NavigationPresenter";
import { GitHubStatsPresenter } from "../components/stats/github/GitHubStatsPresenter";
import { NpmStatsPresenter } from "../components/stats/npm/NpmStatsPresenter";

import { store } from "./setupCaches";

const aboutPresenter = new AboutPresenter(store, translatingService);
const langPresenter = new LangPresenter(store);
const navigationPresenter = new NavigationPresenter(store);
const resumePresenter = new ResumePresenter(store, translatingService);
const worksPresenter = new WorksPresenter(store, translatingService);
const contactPresenter = new ContactPresenter(store, translatingService);
const notFoundPresenter = new NotFoundPresenter(store, translatingService);
const heroPresenter = new HeroPresenter(store, translatingService);
const githubStatsPresenter = new GitHubStatsPresenter(
  store,
  githubRepository,
  cacheService
);
const npmStatsPresenter = new NpmStatsPresenter(
  store,
  npmRepository,
  cacheService
);

export {
  aboutPresenter,
  langPresenter,
  navigationPresenter,
  resumePresenter,
  worksPresenter,
  contactPresenter,
  notFoundPresenter,
  heroPresenter,
  githubStatsPresenter,
  npmStatsPresenter,
};
