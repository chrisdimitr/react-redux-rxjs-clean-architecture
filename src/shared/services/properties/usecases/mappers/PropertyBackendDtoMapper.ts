import { PropertyResource } from "@shared/services/properties/adapters/out/gateways/backend/resources/PropertyResource.ts";
import { PropertyBackendDto } from "@shared/services/properties/usecases/dtos/PropertyBackendDto.ts";

export const resourceToDto = (resource: PropertyResource): PropertyBackendDto => {
  return {
    id: resource.id,
    name: resource.name,
    apcode: resource.apcode,
    measurementTypeId: resource.measurementTypeId,
    engineeringUnitId: resource.engineeringUnitId,
    relationships: resource.relationships
  };
};

export const resourcesToDtos = (resources: PropertyResource[]): PropertyBackendDto[] => {
  return resources.map(resourceToDto);
};
