import { Site } from "../../domains/Site.ts";
import { SiteBackendDto } from "../dtos/SiteBackendDto.ts";

export const backendDtoToDomain = (dto: SiteBackendDto): Site => {
  return {
    id: dto.id,
    name: dto.name,
    notes: dto.notes,
    siteTypeId: dto.siteTypeId,
    enterpriseId: dto.enterpriseId,
    calculationPeriodId: dto.calculationPeriodId,
    installationDate: dto.installationDate,
    serviceProfileId: dto.serviceProfileId,
    lastUpdated: dto.lastUpdated,
    properties: dto.properties,
    relationships: dto.relationships
  };
};
