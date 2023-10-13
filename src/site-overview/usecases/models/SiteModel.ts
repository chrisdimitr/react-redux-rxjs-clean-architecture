import { CalculationPeriod, Property, ServiceProfile } from "@shared/models/CommonModel.ts";

import { Enterprise } from "../../../enterprise-overview/domains/Enterprise.ts";

export interface SiteModel {
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
  relationships?: SiteRelationshipsModel;
}

export interface SiteRelationshipsModel {
  siteType: SiteTypeModel;
  enterprise: Enterprise;
  calculationPeriod: CalculationPeriod;
  serviceProfile: ServiceProfile;
}

export interface SiteTypeModel {
  id: string;
  apcode: string;
  name: string;
}
