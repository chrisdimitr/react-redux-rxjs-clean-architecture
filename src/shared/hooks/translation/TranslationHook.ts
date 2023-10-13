import { useSelector } from "react-redux";

import { selectTranslationsState } from "../../../translations/usecases/store/TranslationsStore.ts";

export const TranslationHook = () => {
  const translations = useSelector(selectTranslationsState);

  const translation = (key: string) => {
    if (translations.isLoading || !translations.selectedLanguage) {
      return "";
    }

    return (
      translations.data[translations.selectedLanguage][key] || translations.data[translations.defaultLanguage][key]
    );
  };

  return { translation };
};
