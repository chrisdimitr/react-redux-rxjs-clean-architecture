import { Observable } from "rxjs";

import { CalculationPeriod } from "@shared/models/CommonModels.ts";

import { store } from "@config/redux-toolkit/store.ts";

import { IGetCalculationPeriodsRestUseCase } from "./ports/in/IGetCalculationPeriodsRestUseCase.ts";
import { IGetCalculationPeriodsStoreUseCase } from "./ports/in/IGetCalculationPeriodsStoreUseCase.ts";
import { IGetCalculationPeriodsPort } from "./ports/out/IGetCalculationPeriodsPort.ts";
import { getCalculationPeriods as getCalculationPeriods } from "./store/CalculationPeriodsStore.ts";

export class GetCalculationPeriodsInteractor
  implements IGetCalculationPeriodsRestUseCase, IGetCalculationPeriodsStoreUseCase
{
  private readonly getCalculationPeriodsPort: IGetCalculationPeriodsPort;

  constructor(_getCalculationPeriodsPort: IGetCalculationPeriodsPort) {
    this.getCalculationPeriodsPort = _getCalculationPeriodsPort;
  }

  dispatchGetCalculationPeriods(): void {
    store.dispatch(getCalculationPeriods());
  }

  getCalculationPeriods(): Observable<CalculationPeriod[]> {
    return this.getCalculationPeriodsPort.getCalculationPeriods();
  }
}
