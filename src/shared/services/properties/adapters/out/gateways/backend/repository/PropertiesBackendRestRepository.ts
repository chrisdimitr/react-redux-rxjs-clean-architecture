import { from, Observable } from "rxjs";

import { jsonHttpClient } from "@shared/services/http-client/HttpClient.ts";
import { IPropertiesBackendRestRepository } from "@shared/services/properties/adapters/out/gateways/backend/repository/IPropertiesBackendRestRepository.ts";
import { getPropertiesMock } from "@shared/services/properties/adapters/out/gateways/backend/repository/PropertiesMockServer.ts";
import { PropertyResource } from "@shared/services/properties/adapters/out/gateways/backend/resources/PropertyResource.ts";

export class PropertiesBackendRestRepository implements IPropertiesBackendRestRepository {
  private static readonly PROPERTIES_REST_URI = "/properties";

  getAllCalculationPeriods(): Observable<PropertyResource[]> {
    return import.meta.env.ON_UI_USE_MOCK_SERVER === "true"
      ? from(getPropertiesMock())
      : from(
          jsonHttpClient
            .get<PropertyResource[]>(PropertiesBackendRestRepository.PROPERTIES_REST_URI)
            .then((response) => response.data)
        );
  }
}
