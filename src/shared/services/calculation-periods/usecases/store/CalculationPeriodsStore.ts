import { createSlice } from "@reduxjs/toolkit";

import { RootState } from "@config/redux-toolkit/store.ts";

import { CalculationPeriodsState } from "./CalculationPeriodsStoreModels";

export const CALCULATION_PERIODS_REDUCER_NAME = "calculationperiods";

export const CALCULATION_PERIODS_INITIAL_STATE: CalculationPeriodsState = {
  calculation_periods: [],
  isLoading: false,
  error: undefined
};

const calculationPeriodsSlice = createSlice({
  name: CALCULATION_PERIODS_REDUCER_NAME,
  initialState: CALCULATION_PERIODS_INITIAL_STATE,
  reducers: {
    getCalculationPeriods: (state) => {
      state.isLoading = true;
    },
    getCalculationPeriodsSuccess: (state, action) => {
      state.isLoading = false;
      state.calculation_periods = action.payload;
    },
    getCalculationPeriodsFailure: (state, action) => {
      state.isLoading = false;
      state.calculation_periods = [];
      state.error = action.payload;
    }
  }
});

export const { getCalculationPeriods, getCalculationPeriodsSuccess, getCalculationPeriodsFailure } =
  calculationPeriodsSlice.actions;

export const calculationPeriodsReducer = calculationPeriodsSlice.reducer;

export const selectCalculationPeriodsState = (state: RootState) => state[CALCULATION_PERIODS_REDUCER_NAME];
