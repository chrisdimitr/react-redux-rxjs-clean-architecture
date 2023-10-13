import { PropertyBackendDto } from "@shared/services/properties/usecases/dtos/PropertyBackendDto.ts";
import { PropertyModel } from "@shared/services/properties/usecases/models/PropertyModel.ts";

export const backendDtoToModel = (resource: PropertyBackendDto): PropertyModel => {
  return {
    id: resource.id,
    name: resource.name,
    apcode: resource.apcode,
    measurementTypeId: resource.measurementTypeId,
    engineeringUnitId: resource.engineeringUnitId,
    relationships: resource.relationships
  };
};

export const backendDtosToModels = (resources: PropertyBackendDto[]): PropertyModel[] => {
  return resources.map(backendDtoToModel);
};
