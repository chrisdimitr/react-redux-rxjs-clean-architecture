import { EnterpriseModel } from "../../../../usecases/models/EnterpriseModel.ts";
import { IEnterpriseViewPresenter } from "../../../../usecases/ports/out/IEnterpriseViewPresenter.ts";

export class EnterpriseViewPresenter implements IEnterpriseViewPresenter {
  constructor() {}

  successView(enterpriseModels: EnterpriseModel[]): EnterpriseModel[] {
    return enterpriseModels;
  }
}
