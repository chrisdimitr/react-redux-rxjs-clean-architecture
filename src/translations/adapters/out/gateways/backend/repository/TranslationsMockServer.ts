import { Translations } from "../../../../../domains/TranslationsDomain.ts";

export const getTranslationsByMock = (): Promise<Translations> => {
  return new Promise((resolve) => {
    setTimeout(
      () =>
        resolve({
          en: {
            login: "Login",
            username: "Username",
            password: "Password",
            english: "English",
            german: "German"
          },
          de: {
            login: "Anmeldung",
            username: "Nutzername",
            password: "Passwort",
            english: "Englisch",
            german: "Deutsch"
          }
        }),
      1000
    );
  });
};
