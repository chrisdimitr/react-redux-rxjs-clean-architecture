import { SiteBackendDto } from "../dtos/SiteBackendDto.ts";
import { SiteModel } from "../models/SiteModel.ts";

export const backendDtoToModel = (dto: SiteBackendDto): SiteModel => {
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
    properties: dto.properties
  };
};
