import { Observable } from "rxjs";

import { IGetTranslationsUseCase } from "./ports/in/IGetTranslationsUseCase.ts";
import { ITranslationsStoreUseCase } from "./ports/in/ITranslationsStoreUseCase.ts";
import { ITranslationsBackendGateway } from "./ports/out/ITranslationsBackendGateway.ts";
import { getTranslations } from "./store/TranslationsStore.ts";
import { store } from "../../infrastructure/redux-toolkit/store.ts";
import { Translations } from "../domains/TranslationsDomain.ts";

export class TranslationsInteractor implements ITranslationsStoreUseCase, IGetTranslationsUseCase {
  private readonly getTranslationsPort: ITranslationsBackendGateway;

  constructor(_getTranslationsPort: ITranslationsBackendGateway) {
    this.getTranslationsPort = _getTranslationsPort;
  }

  dispatchGetTranslations(): void {
    store.dispatch(getTranslations());
  }

  getTranslations(): Observable<Translations> {
    return this.getTranslationsPort.getTranslations();
  }
}
