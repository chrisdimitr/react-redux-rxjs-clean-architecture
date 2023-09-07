import { FieldValues } from "react-hook-form";
import { from, Observable } from "rxjs";

import { jsonHttpClient } from "@shared/services/http-client/HttpClient.ts";

import { updateEnterpriseByMock, getEnterprisesByMock, saveEnterpriseByMock } from "./EnterpriseMockServer.ts";
import { IEnterpriseRestRepository } from "./IEnterpriseRestRepository.ts";
import { Enterprise } from "../../../domains/Enterprise.ts";

export class EnterprisesRestRepository implements IEnterpriseRestRepository {
  private static readonly ENTERPRISES_REST_URI = "/enterprises";

  getEnterprises(): Observable<Enterprise[]> {
    return import.meta.env.ON_UI_USE_MOCK_SERVER === "true"
      ? from(getEnterprisesByMock())
      : from(
          jsonHttpClient
            .get<Enterprise[]>(`${EnterprisesRestRepository.ENTERPRISES_REST_URI}`)
            .then((response) => response.data)
        );
  }

  saveEnterprise(enterprise: FieldValues) {
    return import.meta.env.ON_UI_USE_MOCK_SERVER === "true"
      ? saveEnterpriseByMock()
      : jsonHttpClient
          .post(`${EnterprisesRestRepository.ENTERPRISES_REST_URI}`, { data: enterprise })
          .then((response) => response.data);
  }

  updateEnterprise(enterprise: FieldValues) {
    return import.meta.env.ON_UI_USE_MOCK_SERVER === "true"
      ? updateEnterpriseByMock()
      : jsonHttpClient
          .put(`${EnterprisesRestRepository.ENTERPRISES_REST_URI}`, { data: enterprise })
          .then((response) => response.data);
  }
}
