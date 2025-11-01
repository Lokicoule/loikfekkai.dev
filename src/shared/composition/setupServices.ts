import { LoggingService } from "../services/logging/loggingService";
import { MailingService } from "../services/mailing/mailingService";
import { NotificationService } from "../services/notifications/notificationsService";
import { RoutingService } from "../services/routing/routingService";
import { LocalStorageService } from "../services/storage/localStorageService";
import { TranslatingService } from "../services/translating/translatingService";
import { CacheService } from "../services/cache/CacheService";

const mailingService = new MailingService();
const notificationsService = new NotificationService();
const routingService = new RoutingService();
const loggingService = new LoggingService();
const translatingService = new TranslatingService();
const localStorageService = new LocalStorageService();
const cacheService = new CacheService(localStorageService);

loggingService.init();
translatingService.init();

export {
  localStorageService,
  loggingService,
  mailingService,
  notificationsService,
  routingService,
  translatingService,
  cacheService
};

