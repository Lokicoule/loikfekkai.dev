import { useLocation, useNavigate } from "react-router-dom";
import { GlobalStore } from "../../../shared/persistence/GlobalStore";
import { translatingService } from "../../composition";
import { Notification } from "../../services/notifications/domainObjects/Notification";
import { NotificationService } from "../../services/notifications/notificationsService";

export class LangController {
  constructor(
    private readonly store: GlobalStore,
    private readonly notificationService: NotificationService
  ) { }

  public createHook() {
    const store = this.store;
    const notificationService = this.notificationService;

    function useLangController() {
      const navigate = useNavigate();
      const location = useLocation();

      const handleLanguageChange = (language: string) => {
        if (language === "en" || language === "fr") {
          const newPath = location.pathname.replace(
            /\/(en|fr)(\/|$)/,
            `/${language}/`
          );

          translatingService.setLanguage(language);
          store.set("lang", language);

          navigate(newPath, { replace: true });
        } else {
          notificationService.showToast(
            Notification.createError(`Language ${language} is not supported!`)
          );
        }
      };

      return { handleLanguageChange };
    }

    return useLangController;
  }
}
