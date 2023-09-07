import { SiteResource } from "./SiteResources.ts";
import { Site } from "../../domains/Site.ts";

export const toDomain = (resource: SiteResource): Site => {
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
