import { Observable } from "rxjs";

import { PropertyModel } from "@shared/services/properties/usecases/models/PropertyModel.ts";

export interface IGetPropertiesRestUseCase {
  getCalculationPeriods(): Observable<PropertyModel[]>;
}
