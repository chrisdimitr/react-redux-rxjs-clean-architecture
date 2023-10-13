import { FieldValues } from "react-hook-form";
import { from, Observable } from "rxjs";

import { jsonHttpClient } from "@shared/services/http-client/HttpClient.ts";

import { updateEnterpriseByMock, getEnterprisesByMock, saveEnterpriseByMock } from "./EnterpriseMockServer.ts";
import { IEnterpriseBackendRestRepository } from "./IEnterpriseBackendRestRepository.ts";
import { EnterpriseResource } from "../resources/EnterpriseResource.ts";

export class EnterpriseBackendRestRepository implements IEnterpriseBackendRestRepository {
  private static readonly ENTERPRISES_REST_URI = "/enterprises";

  getEnterprises(): Observable<EnterpriseResource[]> {
    return import.meta.env.ON_UI_USE_MOCK_SERVER === "true"
      ? from(getEnterprisesByMock())
      : from(
          jsonHttpClient
            .get<EnterpriseResource[]>(`${EnterpriseBackendRestRepository.ENTERPRISES_REST_URI}`)
            .then((response) => response.data)
        );
  }

  saveEnterprise(enterprise: FieldValues) {
    return import.meta.env.ON_UI_USE_MOCK_SERVER === "true"
      ? saveEnterpriseByMock()
      : jsonHttpClient
          .post(`${EnterpriseBackendRestRepository.ENTERPRISES_REST_URI}`, { data: enterprise })
          .then((response) => response.data);
  }

  updateEnterprise(enterprise: FieldValues) {
    return import.meta.env.ON_UI_USE_MOCK_SERVER === "true"
      ? updateEnterpriseByMock()
      : jsonHttpClient
          .put(`${EnterpriseBackendRestRepository.ENTERPRISES_REST_URI}`, { data: enterprise })
          .then((response) => response.data);
  }
}
