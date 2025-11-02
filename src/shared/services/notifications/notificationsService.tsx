import { toast } from "react-toastify";
import { NotificationPort } from "../../ports";
import { Notification } from "./domainObjects/Notification";

export class NotificationService implements NotificationPort {
  public show(notification: Notification) {
    toast(notification.getMessage(), {
      toastId: notification.getId(),
      type: notification.getType(),
    });
  }

  public update(notification: Notification) {
    toast.update(notification.getId(), {
      render: notification.getMessage(),
      type: notification.getType(),
    });
  }
}
