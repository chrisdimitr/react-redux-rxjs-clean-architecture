import { PropertiesBackendGateway } from "@shared/services/properties/adapters/out/gateways/backend/PropertiesBackendGateway.ts";
import { PropertiesBackendRestRepository } from "@shared/services/properties/adapters/out/gateways/backend/repository/PropertiesBackendRestRepository.ts";
import { PropertiesViewPresenter } from "@shared/services/properties/adapters/out/presenters/view/PropertiesViewPresenter.ts";
import { PropertiesInteractor } from "@shared/services/properties/usecases/PropertiesInteractor.ts";

export const propertiesBackendRestRepository = new PropertiesBackendRestRepository();

export const propertiesBackendGateway = new PropertiesBackendGateway(propertiesBackendRestRepository);

export const propertiesViewPresenter = new PropertiesViewPresenter();

export const propertiesInteractor = new PropertiesInteractor(propertiesBackendGateway, propertiesViewPresenter);
