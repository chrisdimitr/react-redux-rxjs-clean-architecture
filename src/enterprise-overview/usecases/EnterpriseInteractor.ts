import { FieldValues } from "react-hook-form";
import { Observable } from "rxjs";

import { store } from "@config/redux-toolkit/store.ts";

import { IEnterprisesStoreUseCase } from "./ports/in/IEnterpriseStoreUseCase.ts";
import { IGetEnterpriseRestUseCase } from "./ports/in/IGetEnterpriseRestUseCase.ts";
import { IGetEnterprisePort } from "./ports/out/IGetEnterprisePort.ts";
import { Enterprise } from "../domains/Enterprise.ts";
import { getEnterprises } from "../usecases/store/EnterpriseStore.ts";

export class EnterpriseInteractor implements IGetEnterpriseRestUseCase, IEnterprisesStoreUseCase {
  private readonly getEnterprisesPort: IGetEnterprisePort;

  constructor(_getEnterprisesPort: IGetEnterprisePort) {
    this.getEnterprisesPort = _getEnterprisesPort;
  }

  dispatchGetEnterprises(): void {
    store.dispatch(getEnterprises());
  }

  getEnterprises(): Observable<Enterprise[]> {
    return this.getEnterprisesPort.getEnterprises();
  }

  postEnterprise(enterprise: FieldValues) {
    return this.getEnterprisesPort.postEnterprise(enterprise);
  }

  editEnterprise(enterprise: FieldValues) {
    return this.getEnterprisesPort.editEnterprise(enterprise);
  }
}
