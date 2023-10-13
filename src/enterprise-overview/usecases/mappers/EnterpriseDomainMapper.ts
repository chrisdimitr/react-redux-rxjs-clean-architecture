import { Enterprise } from "../../domains/Enterprise.ts";
import { EnterpriseBackendDto } from "../dtos/EnterpriseBackendDto.ts";

export const backendDtoToDomain = (dto: EnterpriseBackendDto): Enterprise => {
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

export const backendDtosToDomains = (dtos: EnterpriseBackendDto[]): Enterprise[] => {
  return dtos.map(backendDtoToDomain);
};
