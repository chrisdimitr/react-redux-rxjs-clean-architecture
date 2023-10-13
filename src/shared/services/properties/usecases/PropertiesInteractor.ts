import { map, Observable } from "rxjs";

import { PropertyBackendDto } from "@shared/services/properties/usecases/dtos/PropertyBackendDto.ts";
import { PropertyModel } from "@shared/services/properties/usecases/models/PropertyModel.ts";
import { IGetPropertiesRestUseCase } from "@shared/services/properties/usecases/ports/in/IGetPropertiesRestUseCase.ts";
import { IPropertiesStoreUseCase } from "@shared/services/properties/usecases/ports/in/IPropertiesStoreUseCase.ts";
import { IPropertiesBackendGateway } from "@shared/services/properties/usecases/ports/out/IPropertiesBackendGateway.ts";
import { IPropertiesViewPresenter } from "@shared/services/properties/usecases/ports/out/IPropertiesViewPresenter.ts";

import { getProperties } from "./store/PropertiesStore.ts";
import { store } from "../../../../infrastructure/redux-toolkit/store.ts";

export class PropertiesInteractor implements IGetPropertiesRestUseCase, IPropertiesStoreUseCase {
  private readonly propertiesBackendGateway: IPropertiesBackendGateway;
  private readonly propertiesViewPresenter: IPropertiesViewPresenter;

  constructor(
    _propertiesBackendGateway: IPropertiesBackendGateway,
    _propertiesViewPresenter: IPropertiesViewPresenter
  ) {
    this.propertiesBackendGateway = _propertiesBackendGateway;
    this.propertiesViewPresenter = _propertiesViewPresenter;
  }

  dispatchGetCalculationPeriods(): void {
    store.dispatch(getProperties());
  }

  getCalculationPeriods(): Observable<PropertyModel[]> {
    return this.propertiesBackendGateway
      .getCalculationPeriods()
      .pipe(
        map((propertyBackendDtos: PropertyBackendDto[]) =>
          this.propertiesViewPresenter.successView(propertyBackendDtos)
        )
      );
  }
}
