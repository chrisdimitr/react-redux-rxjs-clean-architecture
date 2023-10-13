import { Observable } from "rxjs";

import { CalculationPeriodModel } from "@shared/services/calculation-periods/usecases/models/CalculationPeriodModel.ts";

export interface IGetCalculationPeriodsRestUseCase {
  getCalculationPeriods(): Observable<CalculationPeriodModel[]>;
}
