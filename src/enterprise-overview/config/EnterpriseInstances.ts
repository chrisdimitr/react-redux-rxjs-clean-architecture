import { EnterpriseRestAdapter } from "../gateways/backend/EnterpriseRestAdapter.ts";
import { EnterprisesRestRepository } from "../gateways/backend/repository/EnterpriseRestRepository.ts";
import { EnterpriseInteractor } from "../usecases/EnterpriseInteractor.ts";

export const enterpriseRestRepository = new EnterprisesRestRepository();
export const enterpriseRestAdapter = new EnterpriseRestAdapter(enterpriseRestRepository);
export const enterpriseInteractor = new EnterpriseInteractor(enterpriseRestAdapter);
