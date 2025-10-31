import { LoggingService } from "../services/logging/loggingService";
import { MailingService } from "../services/mailing/mailingService";
import { NotificationService } from "../services/notifications/notificationsService";
import { RoutingService } from "../services/routing/routingService";
import { GitHubService } from "../services/stats/github/GitHubService";
import { NpmService } from "../services/stats/npm/NpmService";
import { ProjectStatsService } from "../services/stats/ProjectStatsService";
import { LocalStorageService } from "../services/storage/localStorageService";
import { TranslatingService } from "../services/translating/translatingService";
import { githubApiAdapter, npmApiAdapter } from "./setupAdapters";

const mailingService = new MailingService();
const notificationsService = new NotificationService();
const routingService = new RoutingService();
const loggingService = new LoggingService();
const translatingService = new TranslatingService();
const localStorageService = new LocalStorageService();
const githubService = new GitHubService(githubApiAdapter);
const npmService = new NpmService(npmApiAdapter);
const projectStatsService = new ProjectStatsService(githubService, npmService);

loggingService.init();
translatingService.init();

export {
  githubService, localStorageService, loggingService,
  mailingService,
  notificationsService, npmService,
  projectStatsService, routingService,
  translatingService
};

