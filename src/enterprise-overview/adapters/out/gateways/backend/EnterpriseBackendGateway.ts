import { map, Observable } from "rxjs";

import { IEnterpriseBackendRestRepository } from "./repository/IEnterpriseBackendRestRepository.ts";
import { EnterpriseBackendDto } from "../../../../usecases/dtos/EnterpriseBackendDto.ts";
import { resourcesToDtos } from "../../../../usecases/mappers/EnterpriseBackendDtoMapper.ts";
import { IEnterpriseBackendGateway } from "../../../../usecases/ports/out/IEnterpriseBackendGateway.ts";
import { EnterpriseFormInstance } from "../../../in/components/CreateEditEnterpriseForm/CreateEditEnterpriseFormModel.ts";

export class EnterpriseBackendGateway implements IEnterpriseBackendGateway {
  private readonly enterprisesRestRepository: IEnterpriseBackendRestRepository;

  constructor(_enterprisesRestRepository: IEnterpriseBackendRestRepository) {
    this.enterprisesRestRepository = _enterprisesRestRepository;
  }

  getEnterprises(): Observable<EnterpriseBackendDto[]> {
    return this.enterprisesRestRepository.getEnterprises().pipe(map(resourcesToDtos));
  }

  postEnterprise(enterprise: EnterpriseFormInstance) {
    return this.enterprisesRestRepository.saveEnterprise(enterprise);
  }

  editEnterprise(enterprise: EnterpriseFormInstance) {
    return this.enterprisesRestRepository.updateEnterprise(enterprise);
  }
}
