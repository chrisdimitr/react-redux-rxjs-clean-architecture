import { useSelector } from "react-redux";

import { themeInteractor } from "@shared/services/theme/config/ThemeInstances.ts";
import { selectTheme } from "@shared/services/theme/usecases/store/ThemeStore.ts";
import { ETheme } from "@shared/services/theme/usecases/store/ThemeStoreModels.ts";

import { LoginToolbarModel } from "./LoginToolbarModels.ts";

const LoginToolbarController = (): LoginToolbarModel => {
  const selectedTheme = useSelector(selectTheme);

  const handleThemeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    themeInteractor.dispatchSetTheme(e.target.checked ? ETheme.LIGHT : ETheme.DARK);
  };

  return {
    selectedTheme,
    handleThemeChange
  };
};

export default LoginToolbarController;
