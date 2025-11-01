import { GlobalStore } from "../../shared/persistence/GlobalStore";
import { translatingService } from "./setupServices";

const store = new GlobalStore(translatingService.language, "all");

export { store };
