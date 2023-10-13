import { SiteBackendRestRepository } from "../adapters/out/gateways/backend/repository/SiteBackendRestRepository.ts";
import { SiteBackendGateway } from "../adapters/out/gateways/backend/SiteBackendGateway.ts";
import { SiteViewPresenter } from "../adapters/out/presenters/view/SiteViewPresenter.ts";
import { SiteInteractor } from "../usecases/SiteInteractor.ts";

export const siteBackendRestRepository = new SiteBackendRestRepository();
export const siteBackendGateway = new SiteBackendGateway(siteBackendRestRepository);
export const siteViewPresenter = new SiteViewPresenter();
export const siteInteractor = new SiteInteractor(siteBackendGateway, siteViewPresenter);
