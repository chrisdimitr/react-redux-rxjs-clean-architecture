import { useLocation } from "react-router-dom";

import { LoginModel } from "./LoginModel.ts";
import { authInteractor } from "../../../../auth/infrastructure/AuthInstances.ts";

const LoginHook = (): LoginModel => {
  const location = useLocation();

  const handleLoginClick = (): void => {
    authInteractor.login(location.state);
  };

  return {
    handleLoginClick
  };
};

export default LoginHook;
