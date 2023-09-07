import { CacheLocation } from "@auth0/auth0-react";

const Auth0Config = {
  domain: import.meta.env.ON_UI_AUTH0_DOMAIN,
  clientId: import.meta.env.ON_UI_AUTH0_CLIENT_ID,
  useRefreshTokens: true, // true: refresh tokens are used to fetch new access tokens from the Auth0 server
  cacheLocation: "localstorage" as CacheLocation,
  authorizationParams: {
    redirect_uri: import.meta.env.ON_UI_AUTH0_REDIRECT_URI
  }
};

export default Auth0Config;
