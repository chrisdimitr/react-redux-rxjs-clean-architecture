import { createSelector, createSlice } from "@reduxjs/toolkit";

import { SiteState } from "./SiteStoreModel.ts";
import { RootState } from "../../../infrastructure/redux-toolkit/store.ts";
import { siteViewPresenter } from "../../infrastructure/SiteInstances.ts";
import { domainToModel } from "../mappers/SiteModelMapper.ts";

export const SITE_REDUCER_NAME = "site";

export const SITE_INITIAL_STATE: SiteState = {
  site: undefined,
  isLoading: false,
  error: undefined
};

const siteSlice = createSlice({
  name: SITE_REDUCER_NAME,
  initialState: SITE_INITIAL_STATE,
  reducers: {
    getSite: (state) => {
      state.isLoading = true;
    },
    getSiteSuccess: (state, action) => {
      state.isLoading = false;
      state.site = action.payload;
    },
    getSiteFailure: (state, action) => {
      state.isLoading = false;
      state.site = undefined;
      state.error = action.payload;
    }
  }
});

export const { getSite, getSiteSuccess, getSiteFailure } = siteSlice.actions;

export const siteReducer = siteSlice.reducer;

export const selectSiteState = (state: RootState) => state[SITE_REDUCER_NAME];

export const selectSite = createSelector(selectSiteState, (siteState) =>
  siteViewPresenter.successView(domainToModel(siteState.site))
);
