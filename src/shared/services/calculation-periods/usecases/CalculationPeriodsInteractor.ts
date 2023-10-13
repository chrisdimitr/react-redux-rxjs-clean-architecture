import { map, Observable } from "rxjs";

import { CalculationPeriodBackendDto } from "@shared/services/calculation-periods/usecases/dtos/CalculationPeriodBackendDto.ts";
import { backendDtosToModels } from "@shared/services/calculation-periods/usecases/mappers/CalculationPeriodModelMapper.ts";
import { CalculationPeriodModel } from "@shared/services/calculation-periods/usecases/models/CalculationPeriodModel.ts";
import { ICalculationPeriodViewPresenter } from "@shared/services/calculation-periods/usecases/ports/out/ICalculationPeriodViewPresenter.ts";

import { ICalculationPeriodsStoreUseCase } from "./ports/in/ICalculationPeriodsStoreUseCase.ts";
import { IGetCalculationPeriodsRestUseCase } from "./ports/in/IGetCalculationPeriodsRestUseCase.ts";
import { ICalculationPeriodsGateway } from "./ports/out/ICalculationPeriodsGateway.ts";
import { getCalculationPeriods as getCalculationPeriods } from "./store/CalculationPeriodsStore.ts";
import { store } from "../../../../infrastructure/redux-toolkit/store.ts";

export class CalculationPeriodsInteractor
  implements IGetCalculationPeriodsRestUseCase, ICalculationPeriodsStoreUseCase
{
  private readonly calculationPeriodsGateway: ICalculationPeriodsGateway;
  private readonly calculationPeriodViewPresenter: ICalculationPeriodViewPresenter;

  constructor(
    _calculationPeriodsGateway: ICalculationPeriodsGateway,
    _calculationPeriodViewPresenter: ICalculationPeriodViewPresenter
  ) {
    this.calculationPeriodsGateway = _calculationPeriodsGateway;
    this.calculationPeriodViewPresenter = _calculationPeriodViewPresenter;
  }

  dispatchGetCalculationPeriods(): void {
    store.dispatch(getCalculationPeriods());
  }

  getCalculationPeriods(): Observable<CalculationPeriodModel[]> {
    return this.calculationPeriodsGateway
      .getCalculationPeriods()
      .pipe(
        map((calculationPeriodBackendDtos: CalculationPeriodBackendDto[]) =>
          this.calculationPeriodViewPresenter.successView(backendDtosToModels(calculationPeriodBackendDtos))
        )
      );
  }
}
