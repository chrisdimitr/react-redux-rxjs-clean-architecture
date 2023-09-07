import { FieldValues } from "react-hook-form";
import { Observable } from "rxjs";

import { Enterprise } from "../../../domains/Enterprise.ts";

export interface IGetEnterprisePort {
  getEnterprises(): Observable<Enterprise[]>;

  postEnterprise(enterprise: FieldValues): Promise<any>;

  editEnterprise(enterprise: FieldValues): Promise<any>;
}
