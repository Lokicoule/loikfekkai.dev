import { useLocation, useNavigate } from "react-router-dom";
import { GlobalCache, Language } from "../../../shared/persistence/GlobalCache";
import { translatingService } from "../../composition";
import { Notification } from "../../services/notifications/domainObjects/Notification";
import { NotificationService } from "../../services/notifications/notificationsService";

export class LangController {
  constructor(
    private readonly cache: GlobalCache,
    private readonly notificationService: NotificationService
  ) {}

  public createHook() {
    const cache = this.cache;
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
          cache.set("lang", language as Language);

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
