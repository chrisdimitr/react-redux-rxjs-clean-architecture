import { Navigate } from "react-router-dom";

import AuthCallbackHook from "./AuthCallbackHook.ts";
import { homePath } from "../../../../AppRouter.tsx";

const AuthCallback = () => {
  const { targetUrl } = AuthCallbackHook();

  if (targetUrl !== undefined) {
    if (targetUrl?.length) {
      return <Navigate to={targetUrl} replace />;
    }

    return <Navigate to={homePath} replace />;
  }

  return <div>Logging in...</div>;
};

export default AuthCallback;
