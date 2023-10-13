import { CalculationPeriodsBackendRestRepository } from "@shared/services/calculation-periods/adapters/out/gateways/backend/repository/CalculationPeriodsBackendRestRepository.ts";
import { CalculationPeriodViewPresenter } from "@shared/services/calculation-periods/adapters/out/presenters/view/CalculationPeriodViewPresenter.ts";

import { CalculationPeriodsBackendGateway } from "../adapters/out/gateways/backend/CalculationPeriodsBackendGateway.ts";
import { CalculationPeriodsInteractor } from "../usecases/CalculationPeriodsInteractor.ts";

export const calculationPeriodsBackendRestRepository = new CalculationPeriodsBackendRestRepository();

export const calculationPeriodsGateway = new CalculationPeriodsBackendGateway(calculationPeriodsBackendRestRepository);

export const calculationPeriodViewPresenter = new CalculationPeriodViewPresenter();

export const calculationPeriodsInteractor = new CalculationPeriodsInteractor(
  calculationPeriodsGateway,
  calculationPeriodViewPresenter
);
