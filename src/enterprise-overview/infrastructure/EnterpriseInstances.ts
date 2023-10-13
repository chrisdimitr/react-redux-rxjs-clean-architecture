import { EnterpriseBackendGateway } from "../adapters/out/gateways/backend/EnterpriseBackendGateway.ts";
import { EnterpriseBackendRestRepository } from "../adapters/out/gateways/backend/repository/EnterpriseBackendRestRepository.ts";
import { EnterpriseViewPresenter } from "../adapters/out/presenters/view/EnterpriseViewPresenter.ts";
import { EnterpriseInteractor } from "../usecases/EnterpriseInteractor.ts";

export const enterpriseBackendRestRepository = new EnterpriseBackendRestRepository();
export const enterpriseBackendGateway = new EnterpriseBackendGateway(enterpriseBackendRestRepository);
export const enterpriseViewPresenter = new EnterpriseViewPresenter();
export const enterpriseInteractor = new EnterpriseInteractor(enterpriseBackendGateway, enterpriseViewPresenter);
