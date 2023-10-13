import { Observable } from "rxjs";

import { PropertyBackendDto } from "@shared/services/properties/usecases/dtos/PropertyBackendDto.ts";

export interface IPropertiesBackendGateway {
  getCalculationPeriods(): Observable<PropertyBackendDto[]>;
}
