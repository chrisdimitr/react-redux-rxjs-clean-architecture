import { CalculationPeriodResource } from "@shared/services/calculation-periods/adapters/out/gateways/backend/resources/CalculationPeriodResource.ts";

export const getCalculationPeriodsMock = (): Promise<CalculationPeriodResource[]> => {
  return new Promise((resolve) => {
    setTimeout(
      () =>
        resolve([
          {
            id: "5c324630-6093-11e7-a5b1-ac162d1048b3",
            name: "1s",
            notes: "",
            isAggregated: true
          },
          {
            id: "f42abefe-a1c6-11eb-adbe-a196f26081b2",
            name: "5s",
            notes: "",
            isAggregated: true
          },
          {
            id: "dead651a-4d31-11ec-a16c-42010afa010f",
            name: "30s",
            notes: "",
            isAggregated: true
          },
          {
            id: "25ce1cc8-b5cc-11e4-b8de-0019bbc9165c",
            name: "1m",
            notes: "",
            isAggregated: true
          },
          {
            id: "8bcb4132-bf61-11e5-9ebd-0019bbc9165c",
            name: "5m",
            notes: "",
            isAggregated: true
          },
          {
            id: "ec96dd64-bfb3-11de-94e6-0019bbc9165c",
            name: "10m",
            notes: "",
            isAggregated: true
          },
          {
            id: "a8b83ee8-0514-11df-94e6-0019bbc9165c",
            name: "15m",
            notes: "",
            isAggregated: true
          },
          {
            id: "4147edbc-100e-11df-94e6-0019bbc9165c",
            name: "20m",
            notes: "",
            isAggregated: true
          },
          {
            id: "b874200c-7f65-11e8-bb53-42010afa010f",
            name: "30m",
            notes: "",
            isAggregated: true
          },
          {
            id: "75238491-c9b7-4492-87b5-145ac11ae687",
            name: "60m",
            notes: "",
            isAggregated: true
          },
          {
            id: "0a15db62-069f-432f-9df6-61558e5d26c8",
            name: "1d",
            notes: "",
            isAggregated: false
          },
          {
            id: "9de9796c-507f-4674-bd0a-9ee7b8ef0797",
            name: "1mo",
            notes: "",
            isAggregated: false
          },
          {
            id: "076ade6e-9869-11de-94e6-0019bbc9165c",
            name: "1y",
            notes: "",
            isAggregated: false
          },
          {
            id: "e44d12d6-5f86-4362-86ba-58c53d19bcd8",
            name: "1h",
            notes: "",
            isAggregated: false
          },
          {
            id: "366dcdb2-3c00-11df-94e6-0019bbc9165c",
            name: "Variant",
            notes: "",
            isAggregated: false
          }
        ]),
      1000
    );
  });
};
