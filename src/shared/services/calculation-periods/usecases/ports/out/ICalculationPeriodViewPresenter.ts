import { CalculationPeriodModel } from "@shared/services/calculation-periods/usecases/models/CalculationPeriodModel.ts";

export interface ICalculationPeriodViewPresenter {
  successView(calculationPeriodModels: CalculationPeriodModel[]): CalculationPeriodModel[];
}
