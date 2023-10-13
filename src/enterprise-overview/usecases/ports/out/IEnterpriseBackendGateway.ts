import { FieldValues } from "react-hook-form";
import { Observable } from "rxjs";

import { EnterpriseBackendDto } from "../../dtos/EnterpriseBackendDto.ts";

export interface IEnterpriseBackendGateway {
  getEnterprises(): Observable<EnterpriseBackendDto[]>;

  postEnterprise(enterprise: FieldValues): Promise<any>;

  editEnterprise(enterprise: FieldValues): Promise<any>;
}
