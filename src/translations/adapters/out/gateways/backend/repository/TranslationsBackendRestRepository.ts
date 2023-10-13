import { from, Observable } from "rxjs";

import { jsonHttpClient } from "@shared/services/http-client/HttpClient.ts";

import { ITranslationsBackendRestRepository } from "./ITranslationsBackendRestRepository.ts";
import { getTranslationsByMock } from "./TranslationsMockServer.ts";
import { Translations } from "../../../../../domains/TranslationsDomain.ts";

export class TranslationsBackendRestRepository implements ITranslationsBackendRestRepository {
  private static readonly TRANSLATIONS_REST_URI = "/translations";

  getTranslations(): Observable<Translations> {
    return import.meta.env.ON_UI_USE_MOCK_SERVER === "true"
      ? from(getTranslationsByMock())
      : from(
          jsonHttpClient
            .get<Translations>(`${TranslationsBackendRestRepository.TRANSLATIONS_REST_URI}`)
            .then((response) => response.data)
        );
  }
}
