import { from, Observable } from "rxjs";

import { CalculationPeriod } from "@shared/models/CommonModels.ts";
import { jsonHttpClient } from "@shared/services/http-client/HttpClient.ts";

import { getCalculationPeriodsMock } from "./CalculationPeriodsMockServer";
import { ICalculationPeriodsRestRepository } from "./ICalculationPeriodsRestRepository";

export class CalculationPeriodsRestRepository implements ICalculationPeriodsRestRepository {
  private static readonly CALCULATION_PERIODS_REST_URI = "/properties";

  getAllCalculationPeriods(): Observable<CalculationPeriod[]> {
    return import.meta.env.ON_UI_USE_MOCK_SERVER === "true"
      ? from(getCalculationPeriodsMock())
      : from(
          jsonHttpClient
            .get<CalculationPeriod[]>(CalculationPeriodsRestRepository.CALCULATION_PERIODS_REST_URI)
            .then((response) => response.data)
        );
  }
}
