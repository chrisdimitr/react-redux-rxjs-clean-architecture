import { map, Observable } from "rxjs";

import { ICalculationPeriodsBackendRestRepository } from "@shared/services/calculation-periods/adapters/out/gateways/backend/repository/ICalculationPeriodsBackendRestRepository.ts";
import { CalculationPeriodBackendDto } from "@shared/services/calculation-periods/usecases/dtos/CalculationPeriodBackendDto.ts";
import { resourcesToDtos } from "@shared/services/calculation-periods/usecases/mappers/CalculationPeriodBackendDtoMapper.ts";

import { ICalculationPeriodsGateway } from "../../../../usecases/ports/out/ICalculationPeriodsGateway.ts";

export class CalculationPeriodsBackendGateway implements ICalculationPeriodsGateway {
  private readonly calculationPeriodsBackendRestRepository: ICalculationPeriodsBackendRestRepository;

  constructor(_calculationPeriodsBackendRestRepository: ICalculationPeriodsBackendRestRepository) {
    this.calculationPeriodsBackendRestRepository = _calculationPeriodsBackendRestRepository;
  }

  getCalculationPeriods(): Observable<CalculationPeriodBackendDto[]> {
    return this.calculationPeriodsBackendRestRepository.getAllCalculationPeriods().pipe(map(resourcesToDtos));
  }
}
