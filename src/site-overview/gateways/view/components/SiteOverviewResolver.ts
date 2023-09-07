import { lastValueFrom } from "rxjs";

import { getSiteInteractor } from "../../../config/SiteInstances.ts";
import { Site } from "../../../domains/Site.ts";

export const SiteOverviewResolver = async (params: any): Promise<Site | undefined> => {
  console.log("SiteOverviewResolver", params);

  if (params.siteId) {
    return await lastValueFrom(getSiteInteractor.getSite(params.siteId));
  }

  return undefined;
};
