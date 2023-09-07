import { ofType } from "redux-observable";
import { catchError, map, of, switchMap } from "rxjs";

import { getPropertiesInteractor } from "@shared/services/properties/config/PropertiesIntances.ts";
import {
  getProperties,
  getPropertiesFailure,
  getPropertiesSuccess
} from "@shared/services/properties/usecases/store/PropertiesStore.ts";

export const getPropertiesEffect = (actions$: any) =>
  actions$.pipe(
    ofType(getProperties),
    switchMap(() => getPropertiesInteractor.getCalculationPeriods().pipe(map(getPropertiesSuccess))),
    catchError((error) => of(getPropertiesFailure(error)))
  );

export const propertiesEffects = [getPropertiesEffect];
