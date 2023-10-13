import { Observable } from "rxjs";

import { CalculationPeriodResource } from "@shared/services/calculation-periods/adapters/out/gateways/backend/resources/CalculationPeriodResource.ts";

export interface ICalculationPeriodsBackendRestRepository {
  getAllCalculationPeriods(): Observable<CalculationPeriodResource[]>;
}
