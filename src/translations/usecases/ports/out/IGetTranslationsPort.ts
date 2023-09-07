import { Observable } from "rxjs";

import { Translations } from "../../../domains/TranslationsDomain.ts";

export interface IGetTranslationsPort {
  getTranslations(): Observable<Translations>;
}
