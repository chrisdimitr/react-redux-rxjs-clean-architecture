import { createSlice } from "@reduxjs/toolkit";

import { PropertiesState } from "@shared/services/properties/usecases/store/PropertiesStoreModels.ts";

import { RootState } from "@config/redux-toolkit/store.ts";

export const PROPERTIES_REDUCER_NAME = "properties";

export const PROPERTIES_INITIAL_STATE: PropertiesState = {
  properties: [],
  isLoading: false,
  error: undefined
};

const propertiesSlice = createSlice({
  name: PROPERTIES_REDUCER_NAME,
  initialState: PROPERTIES_INITIAL_STATE,
  reducers: {
    getProperties: (state) => {
      state.isLoading = true;
    },
    getPropertiesSuccess: (state, action) => {
      state.isLoading = false;
      state.properties = action.payload;
    },
    getPropertiesFailure: (state, action) => {
      state.isLoading = false;
      state.properties = [];
      state.error = action.payload;
    }
  }
});

export const { getProperties, getPropertiesSuccess, getPropertiesFailure } = propertiesSlice.actions;

export const propertiesReducer = propertiesSlice.reducer;

export const selectPropertiesState = (state: RootState) => state[PROPERTIES_REDUCER_NAME];
