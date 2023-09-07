import { CalculationPeriod, Property, ServiceProfile } from "@shared/models/CommonModels.ts";

import { Enterprise } from "../../enterprise-overview/domains/Enterprise.ts";

export interface Site {
  id: string;
  name: string;
  notes: string;
  siteTypeId: string;
  enterpriseId: string;
  calculationPeriodId: string;
  installationDate: string;
  serviceProfileId: string;
  lastUpdated: string;
  properties?: Property[];
  relationships?: SiteRelationships;
}

export interface SiteRelationships {
  siteType: SiteType;
  enterprise: Enterprise;
  calculationPeriod: CalculationPeriod;
  serviceProfile: ServiceProfile;
}

export interface SiteType {
  id: string;
  apcode: string;
  name: string;
}
