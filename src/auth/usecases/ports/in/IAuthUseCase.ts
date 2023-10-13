import { Observable } from "rxjs";

import { AuthUser } from "../../../domains/AuthUser.ts";

export interface IAuthUseCase {
  login(): Observable<void>;
  logout(): Observable<void>;
  isAuthenticated(): Observable<boolean>;
  storeAccessToken(): void;
  getAccessToken(): string | null;
  getUser(): Observable<AuthUser | undefined>;
}
