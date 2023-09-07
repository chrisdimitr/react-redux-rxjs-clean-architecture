import { ETheme } from "../../store/ThemeStoreModels.ts";

export interface ISetThemeStoreUseCase {
  dispatchSetTheme(theme?: ETheme): void;
}
