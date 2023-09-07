import { CalculationPeriod } from "@shared/models/CommonModels.ts";
import { StandardState } from "@shared/models/StoreStateModels.ts";

export interface CalculationPeriodsState extends StandardState {
  calculation_periods: CalculationPeriod[];
}
