import { GlobalStore, WorkFilter } from "../../shared/persistence/GlobalStore";
import { NotificationPort } from "../../shared/ports";
import { Notification } from "../../shared/services/notifications/domainObjects/Notification";

const WORK_FILTERS: readonly WorkFilter[] = ["all", "backend", "frontend", "tools"];

function isWorkFilter(value: string): value is WorkFilter {
  return (WORK_FILTERS as readonly string[]).includes(value);
}

export class WorksController {
  constructor(
    private readonly store: GlobalStore,
    private readonly notifications: NotificationPort
  ) {}

  public setWorkFilter(filter: string): void {
    if (isWorkFilter(filter)) {
      this.store.set("workFilter", filter);
    } else {
      this.notifications.show(
        Notification.createWarning(`Filter ${filter} is not supported!`)
      );
    }
  }
}
