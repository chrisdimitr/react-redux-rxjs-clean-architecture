import { ofType } from "redux-observable";
import { catchError, map, of, switchMap } from "rxjs";

import { getEnterprises, getEnterprisesFailure, getEnterprisesSuccess } from "./EnterpriseStore.ts";
import { enterpriseBackendGateway } from "../../infrastructure/EnterpriseInstances.ts";
import { backendDtosToDomains } from "../mappers/EnterpriseDomainMapper.ts";

export const getEnterprisesEffect /*: Epic<AnyAction, AnyAction, void, ReturnType<typeof getEnterprises>>*/ = (
  action$: any
) =>
  action$.pipe(
    ofType(getEnterprises),
    switchMap(() =>
      enterpriseBackendGateway.getEnterprises().pipe(map(backendDtosToDomains), map(getEnterprisesSuccess))
    ),
    catchError((error) => of(getEnterprisesFailure(error)))
  );

export const enterprisesEffects = [getEnterprisesEffect];
