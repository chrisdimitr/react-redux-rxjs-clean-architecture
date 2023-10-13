import { ETheme } from "@shared/services/theme/usecases/store/ThemeStoreModel.ts";

export interface LoginToolbarModel {
  selectedTheme: ETheme;
  handleThemeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
