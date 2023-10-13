import { useEffect, useState } from "react";

import { unsubscribe } from "@shared/utils/ObservableUtils.ts";

import { AuthCallbackModel } from "./AuthCallbackModel.ts";
import { authInteractor } from "../../../infrastructure/AuthInstances.ts";

const AuthCallbackHook = (): AuthCallbackModel => {
  const [targetUrl, setTargetUrl] = useState<string | undefined>(undefined);

  useEffect(() => {
    const sub = authInteractor.checkCallback().subscribe((checkAuthProviderCallback) => {
      setTargetUrl(checkAuthProviderCallback?.appState?.targetUrl);

      authInteractor.storeAccessToken();
    });

    return () => unsubscribe([sub]);
  }, []);

  return {
    targetUrl
  };
};

export default AuthCallbackHook;
