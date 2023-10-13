import { map, Observable } from "rxjs";

import { IPropertiesBackendRestRepository } from "@shared/services/properties/adapters/out/gateways/backend/repository/IPropertiesBackendRestRepository.ts";
import { PropertyBackendDto } from "@shared/services/properties/usecases/dtos/PropertyBackendDto.ts";
import { resourcesToDtos } from "@shared/services/properties/usecases/mappers/PropertyBackendDtoMapper.ts";
import { IPropertiesBackendGateway } from "@shared/services/properties/usecases/ports/out/IPropertiesBackendGateway.ts";

export class PropertiesBackendGateway implements IPropertiesBackendGateway {
  private readonly propertiesRestRepository: IPropertiesBackendRestRepository;

  constructor(_propertiesRestRepository: IPropertiesBackendRestRepository) {
    this.propertiesRestRepository = _propertiesRestRepository;
  }

  getCalculationPeriods(): Observable<PropertyBackendDto[]> {
    return this.propertiesRestRepository.getAllCalculationPeriods().pipe(map(resourcesToDtos));
  }
}
