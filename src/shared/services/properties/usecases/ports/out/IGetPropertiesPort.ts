import { Observable } from "rxjs";

import { Property } from "@shared/models/CommonModels.ts";

export interface IGetPropertiesPort {
  getCalculationPeriods(): Observable<Property[]>;
}
