import { ofType } from "redux-observable";
import { catchError, map, of, switchMap } from "rxjs";

import { calculationPeriodsInteractor } from "@shared/services/calculation-periods/infrastructure/CalculationPeriodsntances";

import {
  getCalculationPeriods,
  getCalculationPeriodsFailure,
  getCalculationPeriodsSuccess
} from "./CalculationPeriodsStore";

export const getCalculationPeriodsEffect = (actions$: any) =>
  actions$.pipe(
    ofType(getCalculationPeriods),
    switchMap(() => calculationPeriodsInteractor.getCalculationPeriods().pipe(map(getCalculationPeriodsSuccess))),
    catchError((error) => of(getCalculationPeriodsFailure(error)))
  );

export const calculationPeriodsEffects = [getCalculationPeriodsEffect];
