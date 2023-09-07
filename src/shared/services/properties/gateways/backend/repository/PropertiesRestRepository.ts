import { from, Observable } from "rxjs";

import { Property } from "@shared/models/CommonModels.ts";
import { jsonHttpClient } from "@shared/services/http-client/HttpClient.ts";
import { IPropertiesRestRepository } from "@shared/services/properties/gateways/backend/repository/IPropertiesRestRepository.ts";
import { getPropertiesMock } from "@shared/services/properties/gateways/backend/repository/PropertiesMockServer.ts";

export class PropertiesRestRepository implements IPropertiesRestRepository {
  private static readonly PROPERTIES_REST_URI = "/properties";

  getAllCalculationPeriods(): Observable<Property[]> {
    return import.meta.env.ON_UI_USE_MOCK_SERVER === "true"
      ? from(getPropertiesMock())
      : from(
          jsonHttpClient.get<Property[]>(PropertiesRestRepository.PROPERTIES_REST_URI).then((response) => response.data)
        );
  }
}
