import { SiteRestRepository } from "../gateways/backend/repository/SiteRestRepository.ts";
import { SiteRestAdapter } from "../gateways/backend/SiteRestAdapter.ts";
import { GetSiteInteractor } from "../usecases/GetSiteInteractor.ts";

export const siteRestRepository = new SiteRestRepository();
export const siteRestAdapter = new SiteRestAdapter(siteRestRepository);
export const getSiteInteractor = new GetSiteInteractor(siteRestAdapter);
