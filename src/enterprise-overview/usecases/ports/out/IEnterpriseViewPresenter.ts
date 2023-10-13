import { EnterpriseModel } from "../../models/EnterpriseModel.ts";

export interface IEnterpriseViewPresenter {
  successView(enterpriseModels: EnterpriseModel[]): EnterpriseModel[];
}
