import { getPropertiesInteractor } from "@shared/services/properties/config/PropertiesIntances.ts";
import { themeInteractor } from "@shared/services/theme/config/ThemeInstances.ts";

import { getTranslationsInteractor } from "../../../translations/config/TranslationsInstances.ts";

class AppInitializer {
  constructor() {}

  setRequiredGlobalData(): void {
    themeInteractor.dispatchSetTheme();
    getTranslationsInteractor.dispatchGetTranslations();
  }

  setRequiredSecuredData(): void {
    getPropertiesInteractor.dispatchGetCalculationPeriods();
  }
}

export const appInitializer = new AppInitializer();
