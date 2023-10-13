import { CalculationPeriod, Property, ServiceProfile } from "@shared/models/CommonModel.ts";

import { Enterprise } from "../../../enterprise-overview/domains/Enterprise.ts";

export interface SiteBackendDto {
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
  relationships?: SiteRelationshipsBackendDto;
}

export interface SiteRelationshipsBackendDto {
  siteType: SiteTypeBackendDto;
  enterprise: Enterprise;
  calculationPeriod: CalculationPeriod;
  serviceProfile: ServiceProfile;
}

export interface SiteTypeBackendDto {
  id: string;
  apcode: string;
  name: string;
}
