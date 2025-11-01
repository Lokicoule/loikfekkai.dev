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

import { cache } from "./setupCaches";

const aboutPresenter = new AboutPresenter(cache, translatingService);
const langPresenter = new LangPresenter(cache);
const navigationPresenter = new NavigationPresenter(cache);
const resumePresenter = new ResumePresenter(cache, translatingService);
const worksPresenter = new WorksPresenter(cache, translatingService);
const contactPresenter = new ContactPresenter(cache, translatingService);
const notFoundPresenter = new NotFoundPresenter(cache, translatingService);
const heroPresenter = new HeroPresenter(cache, translatingService);
const githubStatsPresenter = new GitHubStatsPresenter(
  cache,
  githubRepository,
  cacheService
);
const npmStatsPresenter = new NpmStatsPresenter(
  cache,
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
