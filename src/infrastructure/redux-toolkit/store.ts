import { configureStore, createSelector } from "@reduxjs/toolkit";
import { combineEpics, createEpicMiddleware } from "redux-observable";

import {
  CALCULATION_PERIODS_REDUCER_NAME,
  calculationPeriodsReducer
} from "@shared/services/calculation-periods/usecases/store/CalculationPeriodsStore.ts";
import { propertiesEffects } from "@shared/services/properties/usecases/store/PropertiesEffect.ts";
import {
  PROPERTIES_REDUCER_NAME,
  propertiesReducer
} from "@shared/services/properties/usecases/store/PropertiesStore.ts";
import { THEME_REDUCER_NAME, themeReducer } from "@shared/services/theme/usecases/store/ThemeStore.ts";

import { enterprisesEffects } from "../../enterprise-overview/usecases/store/EnterpriseEffects.ts";
import {
  ENTERPRISE_REDUCER_NAME,
  enterpriseReducer
} from "../../enterprise-overview/usecases/store/EnterpriseStore.ts";
import { siteEffects } from "../../site-overview/usecases/store/SiteEffects.ts";
import { SITE_REDUCER_NAME, siteReducer } from "../../site-overview/usecases/store/SiteStore.ts";
import { translationsEffects } from "../../translations/usecases/store/TranslationsEffects.ts";
import { TRANSLATIONS_REDUCER_NAME, translationsReducer } from "../../translations/usecases/store/TranslationsStore.ts";

const reduxObservableMiddleware = createEpicMiddleware();

export const effects = combineEpics(
  ...translationsEffects,
  ...propertiesEffects,
  ...enterprisesEffects,
  ...siteEffects
);

const combinedReducers: any = {};

combinedReducers[THEME_REDUCER_NAME] = themeReducer;
combinedReducers[TRANSLATIONS_REDUCER_NAME] = translationsReducer;
combinedReducers[PROPERTIES_REDUCER_NAME] = propertiesReducer;
combinedReducers[CALCULATION_PERIODS_REDUCER_NAME] = calculationPeriodsReducer;
combinedReducers[ENTERPRISE_REDUCER_NAME] = enterpriseReducer;
combinedReducers[SITE_REDUCER_NAME] = siteReducer;

export const store = configureStore({
  reducer: combinedReducers,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      thunk: true // or true if you want to use thunks
    }),
    reduxObservableMiddleware
  ]
});

reduxObservableMiddleware.run(effects);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const selectAppState = (state: RootState) => state;

export const selectAppSecureInitialized = createSelector(
  selectAppState,
  (siteState) => siteState[PROPERTIES_REDUCER_NAME].isLoading
);
