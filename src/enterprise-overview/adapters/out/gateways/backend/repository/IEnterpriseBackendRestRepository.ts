import { FieldValues } from "react-hook-form";
import { Observable } from "rxjs";

import { EnterpriseResource } from "../resources/EnterpriseResource.ts";

export interface IEnterpriseBackendRestRepository {
  getEnterprises(): Observable<EnterpriseResource[]>;

  saveEnterprise(enterprise: FieldValues): Promise<any>;

  updateEnterprise(enterprise: FieldValues): Promise<any>;
}
