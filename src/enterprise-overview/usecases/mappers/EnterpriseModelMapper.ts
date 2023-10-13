import { Enterprise } from "../../domains/Enterprise.ts";
import { EnterpriseBackendDto } from "../dtos/EnterpriseBackendDto.ts";
import { EnterpriseModel } from "../models/EnterpriseModel.ts";

export const backendDtoToModel = (dto: EnterpriseBackendDto): EnterpriseModel => {
  return {
    id: dto.id,
    name: dto.name,
    notes: dto.notes,
    address: dto.address,
    phone: dto.phone,
    fax: dto.fax,
    email: dto.email,
    serviceProfileId: dto.serviceProfileId,
    lastUpdated: dto.lastUpdated,
    relationships: dto.relationships,
    sites: dto.sites
  };
};

export const backendDtosToModels = (dtos: EnterpriseBackendDto[]): EnterpriseModel[] => {
  return dtos.map(backendDtoToModel);
};

export const domainToModel = (domain: Enterprise): EnterpriseModel => {
  return {
    id: domain.id,
    name: domain.name,
    notes: domain.notes,
    address: domain.address,
    phone: domain.phone,
    fax: domain.fax,
    email: domain.email,
    serviceProfileId: domain.serviceProfileId,
    lastUpdated: domain.lastUpdated,
    relationships: domain.relationships,
    sites: domain.sites
  };
};

export const domainsToModels = (domains: Enterprise[]): EnterpriseModel[] => {
  return domains.map(domainToModel);
};
