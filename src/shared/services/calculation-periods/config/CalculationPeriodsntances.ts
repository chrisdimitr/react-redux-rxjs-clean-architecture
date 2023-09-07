import { CalculationPeriodsRestAdapter } from "../gateways/backend/CalculationPeriodsRestAdapter";
import { CalculationPeriodsRestRepository } from "../gateways/backend/repository/CalculationPeriodsRestRepository";
import { GetCalculationPeriodsInteractor } from "../usecases/GetCalculationPeriodsInteractor";

export const calculationPeriodsRestRepository = new CalculationPeriodsRestRepository();

export const calculationPeriodsRestAdapter = new CalculationPeriodsRestAdapter(calculationPeriodsRestRepository);

export const getCalculationPeriodsInteractor = new GetCalculationPeriodsInteractor(calculationPeriodsRestAdapter);
