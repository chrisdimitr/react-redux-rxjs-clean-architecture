import { SiteResource } from "../../adapters/out/gateways/backend/resources/SiteResource.ts";
import { SiteBackendDto } from "../dtos/SiteBackendDto.ts";

export const resourceToDto = (resource: SiteResource): SiteBackendDto => {
  return {
    id: resource.id,
    name: resource.name,
    notes: resource.notes,
    siteTypeId: resource.siteTypeId,
    enterpriseId: resource.enterpriseId,
    calculationPeriodId: resource.calculationPeriodId,
    installationDate: resource.installationDate,
    serviceProfileId: resource.serviceProfileId,
    lastUpdated: resource.lastUpdated,
    properties: resource.properties
  };
};
