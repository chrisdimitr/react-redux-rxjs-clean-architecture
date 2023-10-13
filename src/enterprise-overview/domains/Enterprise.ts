import { ServiceProfile } from "@shared/models/CommonModel.ts";

import { Site } from "../../site-overview/domains/Site.ts";

export interface Enterprise {
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
  sites?: Site[];
}
