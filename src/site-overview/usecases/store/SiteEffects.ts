import { ofType } from "redux-observable";
import { catchError, map, of, switchMap } from "rxjs";

import { getSite, getSiteFailure, getSiteSuccess } from "./SiteStore.ts";
import { siteInteractor } from "../../infrastructure/SiteInstances.ts";

export const getSiteEffect /*: Epic<AnyAction, AnyAction, void, ReturnType<typeof getSite>>*/ = (action$: any) =>
  action$.pipe(
    ofType(getSite),
    switchMap(({ payload }: any) => siteInteractor.getSite(payload).pipe(map(getSiteSuccess))),
    catchError((error) => of(getSiteFailure(error)))
  );

export const siteEffects = [getSiteEffect];
