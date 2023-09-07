import { Observable } from "rxjs";

import { Translations } from "../../../domains/TranslationsDomain.ts";

export interface IGetTranslationsRestUseCase {
  getTranslations(): Observable<Translations>;
}
