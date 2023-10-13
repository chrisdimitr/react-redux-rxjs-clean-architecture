import { CalculationPeriodResource } from "@shared/services/calculation-periods/adapters/out/gateways/backend/resources/CalculationPeriodResource.ts";
import { CalculationPeriodBackendDto } from "@shared/services/calculation-periods/usecases/dtos/CalculationPeriodBackendDto.ts";

export const resourceToDto = (resource: CalculationPeriodResource): CalculationPeriodBackendDto => {
  return {
    id: resource.id,
    name: resource.name,
    notes: resource.notes,
    isAggregated: resource.isAggregated
  };
};

export const resourcesToDtos = (resources: CalculationPeriodResource[]): CalculationPeriodBackendDto[] => {
  return resources.map(resourceToDto);
};
