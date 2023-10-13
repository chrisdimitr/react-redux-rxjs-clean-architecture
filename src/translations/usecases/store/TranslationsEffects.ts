import { ofType } from "redux-observable";
import { catchError, map, of, switchMap } from "rxjs";

import { getTranslations, getTranslationsFailure, getTranslationsSuccess } from "./TranslationsStore.ts";
import { translationsInteractor } from "../../infrastructure/TranslationsInstances.ts";

export const getTranslationsEffect = (action$: any) =>
  action$.pipe(
    ofType(getTranslations),
    switchMap(() => translationsInteractor.getTranslations().pipe(map(getTranslationsSuccess))),
    catchError((error) => of(getTranslationsFailure(error)))
  );

export const translationsEffects = [getTranslationsEffect];
