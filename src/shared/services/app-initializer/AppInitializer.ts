import { propertiesInteractor } from "@shared/services/properties/infrastructure/PropertiesIntances.ts";
import { themeInteractor } from "@shared/services/theme/infrastructure/ThemeInstances.ts";

import { translationsInteractor } from "../../../translations/infrastructure/TranslationsInstances.ts";

class AppInitializer {
  constructor() {}

  setRequiredGlobalData(): void {
    themeInteractor.dispatchSetTheme();
    translationsInteractor.dispatchGetTranslations();
  }

  setRequiredSecuredData(): void {
    propertiesInteractor.dispatchGetCalculationPeriods();
  }
}

export const appInitializer = new AppInitializer();
