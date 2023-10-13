import { from, Observable } from "rxjs";

import { CalculationPeriodResource } from "@shared/services/calculation-periods/adapters/out/gateways/backend/resources/CalculationPeriodResource.ts";
import { jsonHttpClient } from "@shared/services/http-client/HttpClient.ts";

import { getCalculationPeriodsMock } from "./CalculationPeriodsMockServer.ts";
import { ICalculationPeriodsBackendRestRepository } from "./ICalculationPeriodsBackendRestRepository.ts";

export class CalculationPeriodsBackendRestRepository implements ICalculationPeriodsBackendRestRepository {
  private static readonly CALCULATION_PERIODS_REST_URI = "/properties";

  getAllCalculationPeriods(): Observable<CalculationPeriodResource[]> {
    return import.meta.env.ON_UI_USE_MOCK_SERVER === "true"
      ? from(getCalculationPeriodsMock())
      : from(
          jsonHttpClient
            .get<CalculationPeriodResource[]>(CalculationPeriodsBackendRestRepository.CALCULATION_PERIODS_REST_URI)
            .then((response) => response.data)
        );
  }
}
