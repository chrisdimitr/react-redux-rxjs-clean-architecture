import { PropertyModel } from "@shared/services/properties/usecases/models/PropertyModel.ts";
import { IPropertiesViewPresenter } from "@shared/services/properties/usecases/ports/out/IPropertiesViewPresenter.ts";

export class PropertiesViewPresenter implements IPropertiesViewPresenter {
  constructor() {}

  successView(calculationPeriodModels: PropertyModel[]): PropertyModel[] {
    return calculationPeriodModels;
  }
}
