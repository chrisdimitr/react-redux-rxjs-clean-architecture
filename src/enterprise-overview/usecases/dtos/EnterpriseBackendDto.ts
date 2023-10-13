import { ServiceProfile } from "@shared/models/CommonModel.ts";

import { SiteBackendDto } from "../../../site-overview/usecases/dtos/SiteBackendDto.ts";

export interface EnterpriseBackendDto {
  id: string;
  name: string;
  notes?: string;
  address?: string;
  phone?: string;
  fax?: string;
  email?: string;
  serviceProfileId: string;
  lastUpdated: string;
  relationships: {
    serviceProfile: ServiceProfile;
  };
  sites?: SiteBackendDto[];
}
