import { ETheme } from "../../store/ThemeStoreModel.ts";

export interface IThemeStoreUseCase {
  dispatchSetTheme(theme?: ETheme): void;
}
