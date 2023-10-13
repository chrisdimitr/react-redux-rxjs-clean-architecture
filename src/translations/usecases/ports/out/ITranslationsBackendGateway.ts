import { Observable } from "rxjs";

import { Translations } from "../../../domains/TranslationsDomain.ts";

export interface ITranslationsBackendGateway {
  getTranslations(): Observable<Translations>;
}
