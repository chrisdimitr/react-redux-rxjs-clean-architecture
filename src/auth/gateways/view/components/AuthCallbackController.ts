import { useEffect, useState } from "react";

import { unsubscribe } from "@shared/utils/ObservableUtils.ts";

import { AuthCallbackControllerModel } from "./AuthCallbackModels.ts";
import { getAuthInteractor } from "../../../config/AuthInstances.ts";

const AuthCallbackController = (): AuthCallbackControllerModel => {
  const [targetUrl, setTargetUrl] = useState<string | undefined>(undefined);

  useEffect(() => {
    const sub = getAuthInteractor.checkCallback().subscribe((checkAuthProviderCallback) => {
      setTargetUrl(checkAuthProviderCallback?.appState?.targetUrl);

      getAuthInteractor.storeAccessToken();
    });

    return () => unsubscribe([sub]);
  }, []);

  return {
    targetUrl
  };
};

export default AuthCallbackController;
