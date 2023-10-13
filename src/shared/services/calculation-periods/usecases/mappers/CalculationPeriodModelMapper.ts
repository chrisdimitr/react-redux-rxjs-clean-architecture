import { CalculationPeriodBackendDto } from "@shared/services/calculation-periods/usecases/dtos/CalculationPeriodBackendDto.ts";
import { CalculationPeriodModel } from "@shared/services/calculation-periods/usecases/models/CalculationPeriodModel.ts";

export const backendDtoToModel = (resource: CalculationPeriodBackendDto): CalculationPeriodModel => {
  return {
    id: resource.id,
    name: resource.name,
    notes: resource.notes,
    isAggregated: resource.isAggregated
  };
};

export const backendDtosToModels = (resources: CalculationPeriodBackendDto[]): CalculationPeriodModel[] => {
  return resources.map(backendDtoToModel);
};
