import { Observable } from "rxjs";

import { Enterprise } from "../../../domains/Enterprise";

export interface IGetEnterpriseUseCase {
  getEnterprises(): Observable<Enterprise[]>;

  addEnterprise(enterprise: Enterprise): Promise<void>;

  updateEnterprise(enterprise: Enterprise): Promise<void>;
}
