import { Site } from "../../domains/Site.ts";
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

export const domainToModel = (domain: Site): SiteModel => {
  return {
    id: domain.id,
    name: domain.name,
    notes: domain.notes,
    siteTypeId: domain.siteTypeId,
    enterpriseId: domain.enterpriseId,
    calculationPeriodId: domain.calculationPeriodId,
    installationDate: domain.installationDate,
    serviceProfileId: domain.serviceProfileId,
    lastUpdated: domain.lastUpdated,
    properties: domain.properties
  };
};
