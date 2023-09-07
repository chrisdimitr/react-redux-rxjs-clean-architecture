import { ofType } from "redux-observable";
import { catchError, map, of, switchMap } from "rxjs";

import {
  getCalculationPeriods,
  getCalculationPeriodsFailure,
  getCalculationPeriodsSuccess
} from "./CalculationPeriodsStore";
import { getCalculationPeriodsInteractor } from "../../config/CalculationPeriodsntances";

export const getCalculationPeriodsEffect = (actions$: any) =>
  actions$.pipe(
    ofType(getCalculationPeriods),
    switchMap(() => getCalculationPeriodsInteractor.getCalculationPeriods().pipe(map(getCalculationPeriodsSuccess))),
    catchError((error) => of(getCalculationPeriodsFailure(error)))
  );

export const calculationPeriodsEffects = [getCalculationPeriodsEffect];
