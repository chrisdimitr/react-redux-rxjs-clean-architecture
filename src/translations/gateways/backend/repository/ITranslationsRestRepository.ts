import { Observable } from "rxjs";

import { Translations } from "../../../domains/TranslationsDomain.ts";

export interface ITranslationsRestRepository {
  getTranslations(): Observable<Translations>;
}
