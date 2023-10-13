import { EnterpriseModel } from "../../../usecases/models/EnterpriseModel.ts";

export interface EnterprisesOverviewModel {
  latestEnterprises: EnterpriseModel[];
  handleCreateEnterprise?: () => void;
}
