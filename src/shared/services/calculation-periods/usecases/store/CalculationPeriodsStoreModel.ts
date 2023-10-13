import { CalculationPeriod } from "@shared/models/CommonModel.ts";
import { StandardState } from "@shared/models/StoreStateModel.ts";

export interface CalculationPeriodsState extends StandardState {
  calculation_periods: CalculationPeriod[];
}
