import { Observable } from "rxjs";

import { ITranslationsRestRepository } from "./repository/ITranslationsRestRepository.ts";
import { Translations } from "../../domains/TranslationsDomain.ts";
import { IGetTranslationsPort } from "../../usecases/ports/out/IGetTranslationsPort.ts";

export class TranslationsRestAdapter implements IGetTranslationsPort {
  private readonly translationsRestRepository: ITranslationsRestRepository;

  constructor(_translationsRestRepository: ITranslationsRestRepository) {
    this.translationsRestRepository = _translationsRestRepository;
  }

  getTranslations(): Observable<Translations> {
    return this.translationsRestRepository.getTranslations();
  }
}
