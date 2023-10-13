import { createSelector, createSlice } from "@reduxjs/toolkit";

import { THEME_LOCALSTORAGE_KEY } from "@shared/services/theme/infrastructure/ThemeConfig.ts";

import { ETheme, ThemeState } from "./ThemeStoreModel.ts";
import { RootState } from "../../../../../infrastructure/redux-toolkit/store.ts";

export const THEME_REDUCER_NAME = "theme";

export const THEME_INITIAL_STATE: ThemeState = {
  selectedTheme: ETheme.LIGHT
};

export const themeSlice = createSlice({
  name: THEME_REDUCER_NAME,
  initialState: THEME_INITIAL_STATE,
  reducers: {
    setTheme: (state, { payload }) => {
      // Update browser state on change
      const selectedTheme =
        payload || localStorage.getItem(THEME_LOCALSTORAGE_KEY) || THEME_INITIAL_STATE.selectedTheme;

      localStorage.setItem(THEME_LOCALSTORAGE_KEY, selectedTheme);

      state.selectedTheme = selectedTheme;
    }
  }
});

export const { setTheme } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;

export const selectThemeState = (state: RootState) => state[THEME_REDUCER_NAME];

export const selectTheme = createSelector(selectThemeState, (themeState) => themeState.selectedTheme);
