import { Observable } from "rxjs";

import { Property } from "@shared/models/CommonModels.ts";
import { IGetPropertiesRestUseCase } from "@shared/services/properties/usecases/ports/in/IGetPropertiesRestUseCase.ts";
import { IGetPropertiesStoreUseCase } from "@shared/services/properties/usecases/ports/in/IGetPropertiesStoreUseCase.ts";
import { IGetPropertiesPort } from "@shared/services/properties/usecases/ports/out/IGetPropertiesPort.ts";

import { store } from "@config/redux-toolkit/store.ts";

import { getProperties } from "./store/PropertiesStore.ts";

export class GetPropertiesInteractor implements IGetPropertiesRestUseCase, IGetPropertiesStoreUseCase {
  private readonly getPropertiesPort: IGetPropertiesPort;

  constructor(_getPropertiesPort: IGetPropertiesPort) {
    this.getPropertiesPort = _getPropertiesPort;
  }

  dispatchGetCalculationPeriods(): void {
    store.dispatch(getProperties());
  }

  getCalculationPeriods(): Observable<Property[]> {
    return this.getPropertiesPort.getCalculationPeriods();
  }
}
