import { Notification } from "../../shared/notifications/domainObjects/Notification";
import { NotificationService } from "../../shared/notifications/notificationsService";
import { GlobalCache } from "../../sharedKernel/persistence/GlobalCache";

enum WorkFilter {
  All = "all",
  Backend = "backend",
  Frontend = "frontend",
}

export class WorksController {
  constructor(
    private readonly globalCache: GlobalCache,
    private readonly notificationService: NotificationService
  ) {}

  public setWorkFilter(filter: string): void {
    if (Object.values(WorkFilter).includes(filter as WorkFilter)) {
      this.globalCache.set("workFilter", filter as WorkFilter);
    } else {
      this.notificationService.showToast(
        Notification.createWarning(`Filter ${filter} is not supported!`)
      );
    }
  }
}
