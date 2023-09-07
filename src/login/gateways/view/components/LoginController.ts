import { useLocation } from "react-router-dom";

import { LoginModel } from "./LoginModels.ts";
import { getAuthInteractor } from "../../../../auth/config/AuthInstances.ts";

const LoginController = (): LoginModel => {
  const location = useLocation();

  const handleLoginClick = (): void => {
    getAuthInteractor.login(location.state);
  };

  return {
    handleLoginClick
  };
};

export default LoginController;
