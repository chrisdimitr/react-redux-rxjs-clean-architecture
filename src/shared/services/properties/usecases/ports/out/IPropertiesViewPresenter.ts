import { PropertyModel } from "@shared/services/properties/usecases/models/PropertyModel.ts";

export interface IPropertiesViewPresenter {
  successView(calculationPeriodModels: PropertyModel[]): PropertyModel[];
}
