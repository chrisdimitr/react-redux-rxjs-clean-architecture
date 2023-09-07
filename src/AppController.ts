import { useEffect } from "react";
import { useSelector } from "react-redux";

import { appInitializer } from "@shared/services/app-initializer/AppInitializer.ts";
import { themeInteractor } from "@shared/services/theme/config/ThemeInstances.ts";
import { selectTheme } from "@shared/services/theme/usecases/store/ThemeStore.ts";

import { RootState } from "@config/redux-toolkit/store.ts";

import { AppModel } from "./AppModels.tsx";

const AppController = (): AppModel => {
  const selectedTheme = useSelector(selectTheme);
  const { isLoading } = useSelector((state: RootState) => state.translations);

  useEffect(() => {
    console.log("AppController - setRequiredGlobalData");
    appInitializer.setRequiredGlobalData();
  }, []);

  return {
    theme: themeInteractor.getTheme(selectedTheme),
    isInitialized: isLoading
  };
};

export default AppController;
