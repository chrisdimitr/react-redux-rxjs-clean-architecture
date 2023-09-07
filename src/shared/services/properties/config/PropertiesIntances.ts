import { PropertiesRestAdapter } from "@shared/services/properties/gateways/backend/PropertiesRestAdapter.ts";
import { PropertiesRestRepository } from "@shared/services/properties/gateways/backend/repository/PropertiesRestRepository.ts";
import { GetPropertiesInteractor } from "@shared/services/properties/usecases/GetPropertiesInteractor.ts";

export const propertiesRestRepository = new PropertiesRestRepository();

export const propertiesRestAdapter = new PropertiesRestAdapter(propertiesRestRepository);

export const getPropertiesInteractor = new GetPropertiesInteractor(propertiesRestAdapter);
