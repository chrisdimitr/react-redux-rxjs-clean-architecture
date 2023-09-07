import { Observable } from "rxjs";

import { CalculationPeriod } from "@shared/models/CommonModels";

import { ICalculationPeriodsRestRepository } from "./repository/ICalculationPeriodsRestRepository";
import { IGetCalculationPeriodsPort } from "../../usecases/ports/out/IGetCalculationPeriodsPort";

export class CalculationPeriodsRestAdapter implements IGetCalculationPeriodsPort {
  private readonly calculationPeriodsRestRepository: ICalculationPeriodsRestRepository;

  constructor(_calclulationPeriodsRestRepository: ICalculationPeriodsRestRepository) {
    this.calculationPeriodsRestRepository = _calclulationPeriodsRestRepository;
  }

  getCalculationPeriods(): Observable<CalculationPeriod[]> {
    return this.calculationPeriodsRestRepository.getAllCalculationPeriods();
  }
}
