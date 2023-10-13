import { lastValueFrom } from "rxjs";

import { Enterprise } from "../../../domains/Enterprise.ts";
import { enterpriseInteractor } from "../../../infrastructure/EnterpriseInstances.ts";

export const EnterprisesOverviewResolver = async (params: any): Promise<Enterprise[] | undefined> => {
  console.log("EnterprisesOverviewResolver", params);
  return await lastValueFrom(enterpriseInteractor.getEnterprises());
};
