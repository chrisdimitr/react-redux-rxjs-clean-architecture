import { Observable } from "rxjs";

import { AuthUser } from "../../../domains/AuthUser.ts";

export interface IGetAuthUseCase {
  login(): Observable<void>;
  logout(): Observable<void>;
  isAuthenticated(): Observable<boolean>;
  storeAccessToken(): void;
  getAccessToken(): string | null;
  getUser(): Observable<AuthUser | undefined>;
}
