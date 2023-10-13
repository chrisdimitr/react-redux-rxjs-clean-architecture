import { Theme } from "@mui/material";

import { ETheme } from "../../store/ThemeStoreModel.ts";

export interface IGetThemeUseCase {
  getTheme(selectedTheme: ETheme): Theme;
}
