import { useEffect } from "react";
import { useSelector } from "react-redux";

import { appInitializer } from "@shared/services/app-initializer/AppInitializer.ts";
import { themeInteractor } from "@shared/services/theme/infrastructure/ThemeInstances.ts";
import { selectTheme } from "@shared/services/theme/usecases/store/ThemeStore.ts";

import { AppModel } from "./AppModel.tsx";
import { RootState } from "./infrastructure/redux-toolkit/store.ts";

const AppHook = (): AppModel => {
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

export default AppHook;
