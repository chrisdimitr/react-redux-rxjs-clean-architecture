import { TranslationsRestRepository } from "../gateways/backend/repository/TranslationsRestRepository.ts";
import { TranslationsRestAdapter } from "../gateways/backend/TranslationsRestAdapter.ts";
import { GetTranslationsInteractor } from "../usecases/GetTranslationsInteractor.ts";

export const translationsRestRepository = new TranslationsRestRepository();
export const translationsRestAdapter = new TranslationsRestAdapter(translationsRestRepository);
export const getTranslationsInteractor = new GetTranslationsInteractor(translationsRestAdapter);
