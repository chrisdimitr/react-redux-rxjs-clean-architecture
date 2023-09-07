import { Theme } from "@mui/material";

import { ETheme } from "../../store/ThemeStoreModels.ts";

export interface IGetThemeUseCase {
  getTheme(selectedTheme: ETheme): Theme;
}
