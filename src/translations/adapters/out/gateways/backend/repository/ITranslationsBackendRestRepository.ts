import { Observable } from "rxjs";

import { Translations } from "../../../../../domains/TranslationsDomain.ts";

export interface ITranslationsBackendRestRepository {
  getTranslations(): Observable<Translations>;
}
