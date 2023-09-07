import { createAuth0Client, Auth0Client } from "@auth0/auth0-spa-js";
import { RedirectLoginResult } from "@auth0/auth0-spa-js/src/global.ts";
import { from, Observable, of, take } from "rxjs";

import Auth0Config from "@config/auth0/Auth0Config.ts";

import { IGetAuthProviderUseCase } from "./ports/in/IGetAuthProviderUseCase.ts";
import { IGetAuthUseCase } from "./ports/in/IGetAuthUseCase.ts";
import { AuthProviderCallback } from "../domains/AuthProviderCallback.ts";
import { AuthUser } from "../domains/AuthUser.ts";

export class GetAuthInteractor implements IGetAuthUseCase, IGetAuthProviderUseCase {
  private static readonly AUTH_TOKEN_LOCALSTORAGE_KEY = "authToken";

  private authClient: Auth0Client | null = null;

  constructor() {
    from(createAuth0Client(Auth0Config)).subscribe({
      next: (auth0Client: Auth0Client) => {
        this.authClient = auth0Client;
      },
      error: (err): any => {
        console.error(err);
      }
    });
  }

  login(targetUrl?: string): Observable<void> {
    return this.authClient
      ? from(this.authClient.loginWithRedirect({ appState: { targetUrl: targetUrl } }))
      : new Observable<void>();
  }

  logout(): Observable<void> {
    if (this.authClient) {
      localStorage.removeItem(GetAuthInteractor.AUTH_TOKEN_LOCALSTORAGE_KEY);
      return from(this.authClient.logout());
    }

    return new Observable<void>();
  }

  isAuthenticated(): Observable<boolean> {
    return this.authClient ? from(this.authClient.isAuthenticated()) : of(false);
  }

  storeAccessToken(): void {
    if (this.authClient) {
      from(this.authClient.getTokenSilently()).subscribe((accessToken: string) => {
        localStorage.setItem(GetAuthInteractor.AUTH_TOKEN_LOCALSTORAGE_KEY, accessToken);
      });
    }
  }

  checkCallback(): Observable<RedirectLoginResult<AuthProviderCallback | undefined>> {
    return this.authClient
      ? from(
          this.authClient.handleRedirectCallback().catch((err) => {
            console.error(err);

            return {};
          })
        ).pipe(
          //filter((callback: RedirectLoginResult<AuthProviderCallback | undefined>) => !!callback?.appState?.targetUrl),
          take(1)
        )
      : of({});
  }

  getAccessToken(): string | null {
    return localStorage.getItem(GetAuthInteractor.AUTH_TOKEN_LOCALSTORAGE_KEY);
  }

  getUser(): Observable<AuthUser | undefined> {
    return this.authClient ? from(this.authClient.getUser()) : of(undefined);
  }
}
