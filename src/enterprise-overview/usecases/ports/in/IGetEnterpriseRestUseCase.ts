import { Observable } from "rxjs";

import { Enterprise } from "../../../domains/Enterprise";

export interface IGetEnterpriseRestUseCase {
  getEnterprises(): Observable<Enterprise[]>;

  postEnterprise(enterprise: Enterprise): Promise<void>;

  editEnterprise(enterprise: Enterprise): Promise<void>;
}
