import { Observable } from "rxjs";

import { Property } from "@shared/models/CommonModels.ts";

export interface IPropertiesRestRepository {
  getAllCalculationPeriods(): Observable<Property[]>;
}
