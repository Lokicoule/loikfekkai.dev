import { LoggingService } from "../services/logging/loggingService";
import { MailingService } from "../services/mailing/mailingService";
import { NotificationService } from "../services/notifications/notificationsService";
import { LocalStorageService } from "../services/storage/localStorageService";
import { TranslatingService } from "../services/translating/translatingService";
import { CacheService } from "../services/cache/CacheService";
import { GlobalStore } from "../persistence/GlobalStore";
import { GitHubApiAdapter } from "../adapters/GitHubApiAdapter";
import { NpmApiAdapter } from "../adapters/NpmApiAdapter";
import { AboutPresenter } from "../../pages/about/AboutPresenter";
import { ContactPresenter } from "../../pages/contact/ContactPresenter";
import { NotFoundPresenter } from "../../pages/notFound/NotFoundPresenter";
import { ResumePresenter } from "../../pages/resume/ResumePresenter";
import { WorksPresenter } from "../../pages/works/WorksPresenter";
import { HeroPresenter } from "../components/hero/HeroPresenter";
import { LangPresenter } from "../components/lang/LangPresenter";
import { NavigationPresenter } from "../components/navigation/NavigationPresenter";
import { RemoteStatsPresenter } from "../components/stats/RemoteStatsPresenter";
import { GitHubPort, GitHubRepositoryConfig, NpmPort } from "../ports";
import { ContactController } from "../../pages/contact/ContactController";
import { WorksController } from "../../pages/works/WorksController";
import { LangController } from "../components/lang/LangController";

const mailingService = new MailingService();
const notificationsService = new NotificationService();
const loggingService = new LoggingService();
const translatingService = new TranslatingService();
const localStorageService = new LocalStorageService();
const cacheService = new CacheService(localStorageService);

loggingService.init();

const store = new GlobalStore("en", "all");

const githubAdapter: GitHubPort = new GitHubApiAdapter();
const npmAdapter: NpmPort = new NpmApiAdapter();

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

export {
  store,
  translatingService,
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
  contactController,
  langController,
  worksController,
};
