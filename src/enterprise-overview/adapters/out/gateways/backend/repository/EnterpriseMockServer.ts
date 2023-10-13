import { EnterpriseResource } from "../resources/EnterpriseResource.ts";

export const getEnterprisesByMock = (): Promise<EnterpriseResource[]> => {
  return new Promise((resolve) => {
    setTimeout(
      () =>
        resolve([
          {
            id: "206a8842-0f2e-11ee-b17b-acde48001122",
            name: "My Enterprise",
            notes: "",
            address: "Here \u0026 There",
            phone: "30210000000",
            fax: "30211111111",
            email: "me@example.com",
            serviceProfileId: "b63bdb84-35c8-11e0-93cb-0019bbc9165c",
            lastUpdated: "2023-06-20T08:48:48.161399+03:00",
            sites: [
              {
                id: "206f56c4-0f2e-11ee-b17b-acde48001121",
                name: "My Site #1",
                notes: "",
                siteTypeId: "e7865d9e-9633-11de-94e6-0019bbc9165c",
                enterpriseId: "206a8842-0f2e-11ee-b17b-acde48001122",
                calculationPeriodId: "8bcb4132-bf61-11e5-9ebd-0019bbc9165c",
                installationDate: "2020-01-01T21:15:30+02:00",
                serviceProfileId: "b63bdb84-35c8-11e0-93cb-0019bbc9165c",
                lastUpdated: "2023-06-20T08:48:48.161399+03:00"
              }
            ],
            relationships: {
              serviceProfile: {
                id: "b63bdb84-35c8-11e0-93cb-0019bbc9165c",
                apcode: "InSolarStandard",
                name: "InSolar Standard",
                notes: "InSolar Standard"
              }
            }
          },
          {
            id: "24b15624-0f2e-11ee-b17b-acde48001122",
            name: "ΑΙΟΛΙΚΗ ΕΝΕΡΓΕΙΑΚΗ ΑΧΛΑΔΟΤΟΠΟΣ ΑΕ",
            notes: "",
            address: "ΓΡΑΒΙΑΣ 4Α - ΜΑΡΟΥΣΙ ΤΚ 15125",
            phone: "210.6302000",
            fax: "210.6302510-1",
            email: "elperes@helpe.gr",
            serviceProfileId: "b63bdb84-35c8-11e0-93cb-0019bbc9165c",
            lastUpdated: "2023-06-20T08:48:55.350851+03:00",
            sites: [
              {
                id: "24b3fee2-0f2e-11ee-b17b-acde48001122",
                name: "Trikorfo",
                notes: "",
                siteTypeId: "259b772c-5675-11e7-8bb5-42010afa010f",
                enterpriseId: "24b15624-0f2e-11ee-b17b-acde48001122",
                calculationPeriodId: "ec96dd64-bfb3-11de-94e6-0019bbc9165c",
                installationDate: "2023-05-24T03:00:00+03:00",
                serviceProfileId: "b63bdb84-35c8-11e0-93cb-0019bbc9165c",
                lastUpdated: "2023-06-20T08:48:55.350851+03:00"
              }
            ],
            relationships: {
              serviceProfile: {
                id: "b63bdb84-35c8-11e0-93cb-0019bbc9165c",
                apcode: "InSolarStandard",
                name: "InSolar Standard",
                notes: "InSolar Standard"
              }
            }
          },
          {
            id: "2833a9f0-0f2e-11ee-b17b-acde48001122",
            name: "Rokas Renewables",
            notes: "",
            address: "",
            phone: "",
            fax: "",
            email: "",
            serviceProfileId: "d89bf8d0-9685-11e0-924a-0019bbc9165c",
            lastUpdated: "2023-06-20T08:49:01.237985+03:00",
            sites: [
              {
                id: "28366384-0f2e-11ee-b17b-acde48001123",
                name: "Meligalas",
                notes: "",
                siteTypeId: "e7865d9e-9633-11de-94e6-0019bbc9165c",
                enterpriseId: "2833a9f0-0f2e-11ee-b17b-acde48001122",
                calculationPeriodId: "a8b83ee8-0514-11df-94e6-0019bbc9165c",
                installationDate: "2023-05-24T03:00:00+03:00",
                serviceProfileId: "d89bf8d0-9685-11e0-924a-0019bbc9165c",
                lastUpdated: "2023-06-20T08:49:01.237985+03:00"
              }
            ],
            relationships: {
              serviceProfile: {
                id: "d89bf8d0-9685-11e0-924a-0019bbc9165c",
                apcode: "InSolarPremium",
                name: "InSolar Premium",
                notes: "InSolar Premium"
              }
            }
          }
        ]),
      1000
    );
  });
};

export const saveEnterpriseByMock = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ message: "Enterprise was created." }), 1000);
  });
};

export const updateEnterpriseByMock = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ message: "Enterprise was edited." }), 1000);
  });
};
