import { lastValueFrom } from "rxjs";

import { enterpriseInteractor } from "../../../config/EnterpriseInstances.ts";
import { Enterprise } from "../../../domains/Enterprise.ts";

export const EnterprisesOverviewResolver = async (params: any): Promise<Enterprise[] | undefined> => {
  console.log("EnterprisesOverviewResolver", params);
  return await lastValueFrom(enterpriseInteractor.getEnterprises());
};
