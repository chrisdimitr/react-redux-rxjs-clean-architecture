import { createTheme, PaletteOptions, Theme } from "@mui/material";

import { IGetThemeUseCase } from "./ports/in/IGetThemeUseCase.ts";
import { IThemeStoreUseCase } from "./ports/in/IThemeStoreUseCase.ts";
import { setTheme } from "./store/ThemeStore.ts";
import { ETheme } from "./store/ThemeStoreModel.ts";
import { darkColorPallete, lightColorPallete } from "../../../../infrastructure/mui/ColorPalleteConfig.ts";
import { store } from "../../../../infrastructure/redux-toolkit/store.ts";

export class ThemeInteractor implements IThemeStoreUseCase, IGetThemeUseCase {
  constructor() {}

  dispatchSetTheme(theme?: ETheme): void {
    store.dispatch(setTheme(theme));
  }

  getTheme(selectedTheme: ETheme): Theme {
    const palette: PaletteOptions = selectedTheme === ETheme.LIGHT ? lightColorPallete : darkColorPallete;

    return createTheme({
      palette: palette,
      spacing: 8
    });
  }
}
