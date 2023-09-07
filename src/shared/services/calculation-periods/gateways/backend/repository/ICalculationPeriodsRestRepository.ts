import { Observable } from "rxjs";

import { CalculationPeriod } from "@shared/models/CommonModels.ts";

export interface ICalculationPeriodsRestRepository {
  getAllCalculationPeriods(): Observable<CalculationPeriod[]>;
}
