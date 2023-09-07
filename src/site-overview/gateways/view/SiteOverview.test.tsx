import { render, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import createMockStore from "redux-mock-store";

import SiteOverview from "./components/SiteOverview.tsx";
import { SITE_REDUCER_NAME } from "../../usecases/store/SiteStore.ts";
import { SiteState } from "../../usecases/store/SiteStoreModels.ts";

describe("SiteOverview component tests", () => {
  const mockStore = createMockStore();
  const MOCK_SITE_STORE_INITIAL_STATE: any = {};

  MOCK_SITE_STORE_INITIAL_STATE[SITE_REDUCER_NAME] = {
    site: {
      id: "206f56c4-0f2e-11ee-b17b-acde48001121",
      name: "My Site #1",
      notes: "",
      siteTypeId: "e7865d9e-9633-11de-94e6-0019bbc9165c",
      enterpriseId: "206a8842-0f2e-11ee-b17b-acde48001122",
      calculationPeriodId: "8bcb4132-bf61-11e5-9ebd-0019bbc9165c",
      installationDate: "2020-01-01T21:15:30+02:00",
      serviceProfileId: "b63bdb84-35c8-11e0-93cb-0019bbc9165c",
      lastUpdated: "2023-06-20T08:48:48.161399+03:00"
    },
    isLoading: false,
    error: undefined
  } as SiteState;

  let store;

  it("Site name exists and is visible", () => {
    store = mockStore(MOCK_SITE_STORE_INITIAL_STATE);

    const { container } = render(
      <Provider store={store}>
        <SiteOverview />
      </Provider>
    );

    const spanEl = container.querySelector("h1 span:not(:empty)")?.closest("h1");

    waitFor(() => expect(spanEl).toBeVisible());
  });
});
