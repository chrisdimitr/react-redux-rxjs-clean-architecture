import { TranslationsBackendRestRepository } from "../adapters/out/gateways/backend/repository/TranslationsBackendRestRepository.ts";
import { TranslationsBackendGateway } from "../adapters/out/gateways/backend/TranslationsBackendGateway.ts";
import { TranslationsInteractor } from "../usecases/TranslationsInteractor.ts";

export const translationsBackendRestRepository = new TranslationsBackendRestRepository();
export const translationsBackendGateway = new TranslationsBackendGateway(translationsBackendRestRepository);
export const translationsInteractor = new TranslationsInteractor(translationsBackendGateway);
