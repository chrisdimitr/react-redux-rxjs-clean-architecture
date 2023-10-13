import { FieldValues } from "react-hook-form";
import { map, Observable } from "rxjs";

import { EnterpriseBackendDto } from "./dtos/EnterpriseBackendDto.ts";
import { backendDtosToModels } from "./mappers/EnterpriseModelMapper.ts";
import { EnterpriseModel } from "./models/EnterpriseModel.ts";
import { IEnterprisesStoreUseCase } from "./ports/in/IEnterpriseStoreUseCase.ts";
import { IGetEnterpriseUseCase } from "./ports/in/IGetEnterpriseUseCase.ts";
import { IEnterpriseBackendGateway } from "./ports/out/IEnterpriseBackendGateway.ts";
import { IEnterpriseViewPresenter } from "./ports/out/IEnterpriseViewPresenter.ts";
import { getEnterprises } from "./store/EnterpriseStore.ts";
import { store } from "../../infrastructure/redux-toolkit/store.ts";

export class EnterpriseInteractor implements IGetEnterpriseUseCase, IEnterprisesStoreUseCase {
  private readonly enterpriseBackendGateway: IEnterpriseBackendGateway;
  private readonly enterpriseViewPresenter: IEnterpriseViewPresenter;

  constructor(
    _enterpriseBackendGateway: IEnterpriseBackendGateway,
    _enterpriseViewPresenter: IEnterpriseViewPresenter
  ) {
    this.enterpriseBackendGateway = _enterpriseBackendGateway;
    this.enterpriseViewPresenter = _enterpriseViewPresenter;
  }

  dispatchGetEnterprises(): void {
    store.dispatch(getEnterprises());
  }

  getEnterprises(): Observable<EnterpriseModel[]> {
    return this.enterpriseBackendGateway
      .getEnterprises()
      .pipe(
        map((enterpriseBackendDtos: EnterpriseBackendDto[]) =>
          this.enterpriseViewPresenter.successView(backendDtosToModels(enterpriseBackendDtos))
        )
      );
  }

  addEnterprise(enterprise: FieldValues) {
    return this.enterpriseBackendGateway.postEnterprise(enterprise);
  }

  updateEnterprise(enterprise: FieldValues) {
    return this.enterpriseBackendGateway.editEnterprise(enterprise);
  }
}
