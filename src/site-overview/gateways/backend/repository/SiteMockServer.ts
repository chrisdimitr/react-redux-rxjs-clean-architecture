import { SiteResource } from "../SiteResources.ts";

export const getSiteByIdMock = (siteId: string): Promise<SiteResource> => {
  return new Promise((resolve) => {
    setTimeout(
      () =>
        resolve({
          id: siteId,
          name: "Achladokampos",
          notes: "",
          siteTypeId: "",
          enterpriseId: "",
          calculationPeriodId: "",
          installationDate: "",
          serviceProfileId: "",
          lastUpdated: "",
          properties: []
        }),
      1000
    );
  });
};
