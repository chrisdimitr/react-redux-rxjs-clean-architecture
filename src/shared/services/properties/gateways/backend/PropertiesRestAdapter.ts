import { Observable } from "rxjs";

import { Property } from "@shared/models/CommonModels.ts";
import { IPropertiesRestRepository } from "@shared/services/properties/gateways/backend/repository/IPropertiesRestRepository.ts";
import { IGetPropertiesPort } from "@shared/services/properties/usecases/ports/out/IGetPropertiesPort.ts";

export class PropertiesRestAdapter implements IGetPropertiesPort {
  private readonly propertiesRestRepository: IPropertiesRestRepository;

  constructor(_propertiesRestRepository: IPropertiesRestRepository) {
    this.propertiesRestRepository = _propertiesRestRepository;
  }

  getCalculationPeriods(): Observable<Property[]> {
    return this.propertiesRestRepository.getAllCalculationPeriods();
  }
}
