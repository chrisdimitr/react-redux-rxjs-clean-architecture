import { Observable } from "rxjs";

import { Property } from "@shared/models/CommonModels.ts";

export interface IGetPropertiesRestUseCase {
  getCalculationPeriods(): Observable<Property[]>;
}
