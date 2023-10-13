import { CalculationPeriodModel } from "@shared/services/calculation-periods/usecases/models/CalculationPeriodModel.ts";
import { ICalculationPeriodViewPresenter } from "@shared/services/calculation-periods/usecases/ports/out/ICalculationPeriodViewPresenter.ts";

export class CalculationPeriodViewPresenter implements ICalculationPeriodViewPresenter {
  constructor() {}

  successView(calculationPeriodModels: CalculationPeriodModel[]): CalculationPeriodModel[] {
    return calculationPeriodModels;
  }
}
