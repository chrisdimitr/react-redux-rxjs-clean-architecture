import { ofType } from "redux-observable";
import { catchError, map, of, switchMap } from "rxjs";

import { getEnterprises, getEnterprisesFailure, getEnterprisesSuccess } from "./EnterpriseStore.ts";
import { enterpriseInteractor } from "../../config/EnterpriseInstances.ts";

export const getEnterprisesEffect /*: Epic<AnyAction, AnyAction, void, ReturnType<typeof getEnterprises>>*/ = (
  action$: any
) =>
  action$.pipe(
    ofType(getEnterprises),
    switchMap(() => enterpriseInteractor.getEnterprises().pipe(map(getEnterprisesSuccess))),
    catchError((error) => of(getEnterprisesFailure(error)))
  );

export const enterprisesEffects = [getEnterprisesEffect];
