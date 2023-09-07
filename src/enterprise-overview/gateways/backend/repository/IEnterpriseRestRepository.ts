import { FieldValues } from "react-hook-form";
import { Observable } from "rxjs";

import { Enterprise } from "../../../domains/Enterprise.ts";

export interface IEnterpriseRestRepository {
  getEnterprises(): Observable<Enterprise[]>;

  saveEnterprise(enterprise: FieldValues): Promise<any>;

  updateEnterprise(enterprise: FieldValues): Promise<any>;
}
