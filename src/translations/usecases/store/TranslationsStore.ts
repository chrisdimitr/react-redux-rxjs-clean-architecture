import { createSelector, createSlice } from "@reduxjs/toolkit";

import { RootState } from "@config/redux-toolkit/store.ts";
import { DEFAULT_LANGUAGE, ESupportedLanguages } from "@config/translation/TranslationConfig.ts";

import { TranslationsState } from "./TranslationsModels.ts";

export const TRANSLATIONS_REDUCER_NAME = "translations";

export const TRANSLATIONS_INITIAL_STATE: TranslationsState = {
  isLoading: false,
  error: undefined,
  defaultLanguage: DEFAULT_LANGUAGE,
  selectedLanguage: ESupportedLanguages.EN,
  supportedLanguages: ESupportedLanguages,
  // Temporally initialize data
  data: {
    en: {
      login: "login"
    }
  }
};

const translationsSlice = createSlice({
  name: TRANSLATIONS_REDUCER_NAME,
  initialState: TRANSLATIONS_INITIAL_STATE,
  reducers: {
    getTranslations: (state) => {
      state.isLoading = true;
    },
    getTranslationsSuccess: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    getTranslationsFailure: (state, action) => {
      state.isLoading = false;
      // state.data = {};
      state.error = action.payload;
    }
  }
});

export const { getTranslations, getTranslationsSuccess, getTranslationsFailure } = translationsSlice.actions;

export const translationsReducer = translationsSlice.reducer;

export const selectTranslationsState = (state: RootState) => state[TRANSLATIONS_REDUCER_NAME];

export const selectTranslations = createSelector(
  selectTranslationsState,
  (translationsState) => translationsState.data
);
