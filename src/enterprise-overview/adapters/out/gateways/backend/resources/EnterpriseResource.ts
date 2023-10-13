import { ServiceProfile } from "@shared/models/CommonModel.ts";

import { SiteResource } from "../../../../../../site-overview/adapters/out/gateways/backend/resources/SiteResource.ts";

export interface EnterpriseResource {
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
  sites?: SiteResource[];
}
