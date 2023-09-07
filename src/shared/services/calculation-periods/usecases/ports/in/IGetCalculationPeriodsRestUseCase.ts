import { Observable } from "rxjs";

import { CalculationPeriod } from "@shared/models/CommonModels.ts";

export interface IGetCalculationPeriodsRestUseCase {
  getCalculationPeriods(): Observable<CalculationPeriod[]>;
}
