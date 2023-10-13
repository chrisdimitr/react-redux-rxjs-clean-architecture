import { RedirectLoginResult } from "@auth0/auth0-spa-js/src/global.ts";
import { Observable } from "rxjs";

import { AuthProviderCallback } from "../../../domains/AuthProviderCallback.ts";

export interface IAuthProviderUseCase {
  checkCallback(): Observable<RedirectLoginResult<AuthProviderCallback | undefined>>;
}
