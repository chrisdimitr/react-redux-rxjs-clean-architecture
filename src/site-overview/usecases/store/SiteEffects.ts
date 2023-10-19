import { ofType } from "redux-observable";
import { catchError, map, of, switchMap } from "rxjs";

import { getSite, getSiteFailure, getSiteSuccess } from "./SiteStore.ts";
import { siteBackendGateway } from "../../infrastructure/SiteInstances.ts";
import { backendDtoToDomain } from "../mappers/SiteDomainMapper.ts";

export const getSiteEffect /*: Epic<AnyAction, AnyAction, void, ReturnType<typeof getSite>>*/ = (action$: any) =>
  action$.pipe(
    ofType(getSite),
    switchMap(({ payload }: any) =>
      siteBackendGateway.getSite(payload).pipe(map(backendDtoToDomain), map(getSiteSuccess))
    ),
    catchError((error) => of(getSiteFailure(error)))
  );

export const siteEffects = [getSiteEffect];
