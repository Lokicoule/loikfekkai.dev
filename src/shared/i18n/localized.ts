import { Language } from "../persistence/GlobalStore";

export type Localized<T> = Record<Language, T>;
