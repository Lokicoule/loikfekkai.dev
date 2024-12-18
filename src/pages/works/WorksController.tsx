import { GlobalCache } from "../../shared/persistence/GlobalCache";
import {
  Notification,
  NotificationService,
} from "../../shared/services/notifications";

enum WorkFilter {
  All = "all",
  Backend = "backend",
  Frontend = "frontend",
  Tools = "tools",
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
