import { Observable } from "rxjs";

import { ITranslationsBackendRestRepository } from "./repository/ITranslationsBackendRestRepository.ts";
import { Translations } from "../../../../domains/TranslationsDomain.ts";
import { ITranslationsBackendGateway } from "../../../../usecases/ports/out/ITranslationsBackendGateway.ts";

export class TranslationsBackendGateway implements ITranslationsBackendGateway {
  private readonly translationsRestRepository: ITranslationsBackendRestRepository;

  constructor(_translationsRestRepository: ITranslationsBackendRestRepository) {
    this.translationsRestRepository = _translationsRestRepository;
  }

  getTranslations(): Observable<Translations> {
    return this.translationsRestRepository.getTranslations();
  }
}
