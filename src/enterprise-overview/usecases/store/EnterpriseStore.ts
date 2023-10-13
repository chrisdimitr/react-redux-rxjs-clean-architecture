import { createSelector, createSlice } from "@reduxjs/toolkit";

import { EnterpriseState } from "./EnterpriseModel.ts";
import { RootState } from "../../../infrastructure/redux-toolkit/store.ts";
import { enterpriseViewPresenter } from "../../infrastructure/EnterpriseInstances.ts";
import { domainsToModels } from "../mappers/EnterpriseModelMapper.ts";

export const ENTERPRISE_REDUCER_NAME = "enterprise";

export const INITIAL_ENTERPRISE_STATE: EnterpriseState = {
  enterprises: [],
  isLoading: false,
  error: undefined
};

export const enterpriseSlice = createSlice({
  name: ENTERPRISE_REDUCER_NAME,
  initialState: INITIAL_ENTERPRISE_STATE,
  reducers: {
    getEnterprises: (state) => {
      state.isLoading = true;
    },
    getEnterprisesSuccess: (state, action) => {
      state.isLoading = false;
      state.enterprises = action.payload;
    },
    getEnterprisesFailure: (state, action) => {
      state.isLoading = false;
      state.enterprises = [];
      state.error = action.payload;
    }
  }
});

export const { getEnterprises, getEnterprisesSuccess, getEnterprisesFailure } = enterpriseSlice.actions;

export const enterpriseReducer = enterpriseSlice.reducer;

export const selectEnterprisesState = (state: RootState) => state[ENTERPRISE_REDUCER_NAME];

export const selectEnterprises = createSelector(selectEnterprisesState, (enterpriseState) =>
  enterpriseViewPresenter.successView(domainsToModels(enterpriseState.enterprises))
);
