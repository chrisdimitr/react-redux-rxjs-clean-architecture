import { ETheme } from "@shared/services/theme/usecases/store/ThemeStoreModels.ts";

export interface LoginToolbarModel {
  selectedTheme: ETheme;
  handleThemeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
