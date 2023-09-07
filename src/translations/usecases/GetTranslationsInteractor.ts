import { Observable } from "rxjs";

import { store } from "@config/redux-toolkit/store.ts";

import { IGetTranslationsRestUseCase } from "./ports/in/IGetTranslationsRestUseCase.ts";
import { ITranslationsStoreUseCase } from "./ports/in/ITranslationsStoreUseCase.ts";
import { IGetTranslationsPort } from "./ports/out/IGetTranslationsPort.ts";
import { getTranslations } from "./store/TranslationsStore.ts";
import { Translations } from "../domains/TranslationsDomain.ts";

export class GetTranslationsInteractor implements ITranslationsStoreUseCase, IGetTranslationsRestUseCase {
  private readonly getTranslationsPort: IGetTranslationsPort;

  constructor(_getTranslationsPort: IGetTranslationsPort) {
    this.getTranslationsPort = _getTranslationsPort;
  }

  dispatchGetTranslations(): void {
    store.dispatch(getTranslations());
  }

  getTranslations(): Observable<Translations> {
    return this.getTranslationsPort.getTranslations();
  }
}
