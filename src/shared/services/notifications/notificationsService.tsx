import { toast } from "react-toastify";
import { Notification } from "./domainObjects/Notification";

export class NotificationService {
  public showToast(notification: Notification) {
    toast(notification.getMessage(), {
      toastId: notification.getId().getValue(),
      type: notification.getType(),
    });
  }

  public updateToast(notification: Notification) {
    toast.update(notification.getId().getValue(), {
      render: notification.getMessage(),
      type: notification.getType(),
    });
  }
}
