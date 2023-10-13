import { Observable } from "rxjs";

import { CalculationPeriodBackendDto } from "@shared/services/calculation-periods/usecases/dtos/CalculationPeriodBackendDto.ts";

export interface ICalculationPeriodsGateway {
  getCalculationPeriods(): Observable<CalculationPeriodBackendDto[]>;
}
