import { translatingService, cacheService } from "./setupServices";
import { githubAdapter, npmAdapter } from "./setupAdapters";
import { AboutPresenter } from "../../pages/about/AboutPresenter";
import { ContactPresenter } from "../../pages/contact/ContactPresenter";
import { NotFoundPresenter } from "../../pages/notFound/NotFoundPresenter";
import { ResumePresenter } from "../../pages/resume/ResumePresenter";
import { WorksPresenter } from "../../pages/works/WorksPresenter";
import { HeroPresenter } from "../components/hero/HeroPresenter";
import { LangPresenter } from "../components/lang/LangPresenter";
import { NavigationPresenter } from "../components/navigation/NavigationPresenter";
import { RemoteStatsPresenter } from "../components/stats/RemoteStatsPresenter";
import { GitHubRepositoryConfig } from "../ports";

import { store } from "./setupCaches";

const aboutPresenter = new AboutPresenter(store, translatingService);
const langPresenter = new LangPresenter(store);
const navigationPresenter = new NavigationPresenter(store);
const resumePresenter = new ResumePresenter(store, translatingService);
const worksPresenter = new WorksPresenter(store, translatingService);
const contactPresenter = new ContactPresenter(store, translatingService);
const notFoundPresenter = new NotFoundPresenter(store, translatingService);
const heroPresenter = new HeroPresenter(store, translatingService);
const githubStatsPresenter = new RemoteStatsPresenter(
  (config: GitHubRepositoryConfig) => `${config.owner}_${config.repo}`,
  (config) => githubAdapter.fetchRepositoryStats(config),
  cacheService,
  "github_stats"
);
const npmStatsPresenter = new RemoteStatsPresenter(
  (packageName: string) => packageName,
  (packageName) => npmAdapter.fetchPackageStats(packageName),
  cacheService,
  "npm_stats"
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
