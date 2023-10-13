import { ServiceProfile } from "@shared/models/CommonModel.ts";

import { SiteModel } from "../../../site-overview/usecases/models/SiteModel.ts";

export interface EnterpriseModel {
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
  sites?: SiteModel[];
}
