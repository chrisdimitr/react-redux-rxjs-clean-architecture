import { createSelector, createSlice } from "@reduxjs/toolkit";

import { RootState } from "@config/redux-toolkit/store";

import { EnterpriseState } from "./EnterpriseModels";

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

export const selectEnterprises = createSelector(
  selectEnterprisesState,
  (enterpriseState) => enterpriseState.enterprises
);
