import { Observable } from "rxjs";

import { IEnterpriseRestRepository } from "./repository/IEnterpriseRestRepository.ts";
import { Enterprise } from "../../domains/Enterprise.ts";
import { IGetEnterprisePort } from "../../usecases/ports/out/IGetEnterprisePort.ts";
import { EnterpriseFormInstance } from "../view/components/CreateEditEnterpriseForm/CreateEditEnterpriseFormModels.ts";

export class EnterpriseRestAdapter implements IGetEnterprisePort {
  private readonly enterprisesRestRepository: IEnterpriseRestRepository;

  constructor(_enterprisesRestRepository: IEnterpriseRestRepository) {
    this.enterprisesRestRepository = _enterprisesRestRepository;
  }

  getEnterprises(): Observable<Enterprise[]> {
    return this.enterprisesRestRepository.getEnterprises();
  }

  postEnterprise(enterprise: EnterpriseFormInstance) {
    return this.enterprisesRestRepository.saveEnterprise(enterprise);
  }

  editEnterprise(enterprise: EnterpriseFormInstance) {
    return this.enterprisesRestRepository.updateEnterprise(enterprise);
  }
}
