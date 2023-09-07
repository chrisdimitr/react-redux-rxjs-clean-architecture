import { useEffect, useState } from "react";

import { unsubscribe } from "@shared/utils/ObservableUtils.ts";

import { AppHeaderModel } from "./AppHeaderModels.ts";
import { getAuthInteractor } from "../../../../../auth/config/AuthInstances.ts";
import { AuthUser } from "../../../../../auth/domains/AuthUser.ts";

const AppHeaderController = (): AppHeaderModel => {
  const [user, setUser] = useState<AuthUser | undefined>(undefined);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    const userSub = getAuthInteractor.getUser().subscribe((user) => {
      setUser(user);
    });

    const isAuthenticatedSub = getAuthInteractor.isAuthenticated().subscribe((authenticated) => {
      setIsAuthenticated(authenticated);
    });

    return () => unsubscribe([userSub, isAuthenticatedSub]);
  }, []);

  return {
    user,
    isAuthenticated
  };
};

export default AppHeaderController;
