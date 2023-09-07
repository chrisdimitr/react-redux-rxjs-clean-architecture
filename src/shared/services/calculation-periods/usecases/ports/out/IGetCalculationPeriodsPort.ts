import { Observable } from "rxjs";

import { CalculationPeriod } from "@shared/models/CommonModels.ts";

export interface IGetCalculationPeriodsPort {
  getCalculationPeriods(): Observable<CalculationPeriod[]>;
}
