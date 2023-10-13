import { EnterpriseResource } from "../../adapters/out/gateways/backend/resources/EnterpriseResource.ts";
import { EnterpriseBackendDto } from "../dtos/EnterpriseBackendDto.ts";

export const resourceToDto = (resource: EnterpriseResource): EnterpriseBackendDto => {
  return {
    id: resource.id,
    name: resource.name,
    notes: resource.notes,
    address: resource.address,
    phone: resource.phone,
    fax: resource.fax,
    email: resource.email,
    serviceProfileId: resource.serviceProfileId,
    lastUpdated: resource.lastUpdated,
    relationships: resource.relationships,
    sites: resource.sites
  };
};

export const resourcesToDtos = (resources: EnterpriseResource[]): EnterpriseBackendDto[] => {
  return resources.map(resourceToDto);
};
