import { createTheme, PaletteOptions, Theme } from "@mui/material";

import { darkColorPallete, lightColorPallete } from "@config/mui/ColorPalleteConfig.ts";

import { store } from "@config/redux-toolkit/store.ts";

import { IGetThemeUseCase } from "./ports/in/IGetThemeUseCase.ts";
import { ISetThemeStoreUseCase } from "./ports/in/ISetThemeStoreUseCase.ts";
import { setTheme } from "./store/ThemeStore.ts";
import { ETheme } from "./store/ThemeStoreModels.ts";

export class ThemeInteractor implements ISetThemeStoreUseCase, IGetThemeUseCase {
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
