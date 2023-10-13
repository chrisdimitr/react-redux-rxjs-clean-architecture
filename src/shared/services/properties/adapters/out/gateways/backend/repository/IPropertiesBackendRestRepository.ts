import { Observable } from "rxjs";

import { PropertyResource } from "@shared/services/properties/adapters/out/gateways/backend/resources/PropertyResource.ts";

export interface IPropertiesBackendRestRepository {
  getAllCalculationPeriods(): Observable<PropertyResource[]>;
}
