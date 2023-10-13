import { Observable } from "rxjs";

import { Translations } from "../../../domains/TranslationsDomain.ts";

export interface IGetTranslationsUseCase {
  getTranslations(): Observable<Translations>;
}
