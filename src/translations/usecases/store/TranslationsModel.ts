import { StandardState } from "@shared/models/StoreStateModel.ts";

export interface TranslationsState extends StandardState {
  defaultLanguage: string;
  selectedLanguage: string;
  supportedLanguages: { [Key: string]: string };
  data: { [Key: string]: { [Key: string]: string } };
}
