import { lastValueFrom } from "rxjs";

import { siteInteractor } from "../../../infrastructure/SiteInstances.ts";
import { SiteModel } from "../../../usecases/models/SiteModel.ts";

export const SiteOverviewResolver = async (params: any): Promise<SiteModel | undefined> => {
  console.log("SiteOverviewResolver", params);

  if (params.siteId) {
    return await lastValueFrom(siteInteractor.getSite(params.siteId));
  }

  return undefined;
};
