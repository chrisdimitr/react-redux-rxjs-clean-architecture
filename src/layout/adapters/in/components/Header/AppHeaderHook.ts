import { useEffect, useState } from "react";

import { unsubscribe } from "@shared/utils/ObservableUtils.ts";

import { AppHeaderModel } from "./AppHeaderModel.ts";
import { AuthUser } from "../../../../../auth/domains/AuthUser.ts";
import { authInteractor } from "../../../../../auth/infrastructure/AuthInstances.ts";

const AppHeaderHook = (): AppHeaderModel => {
  const [user, setUser] = useState<AuthUser | undefined>(undefined);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    const userSub = authInteractor.getUser().subscribe((user) => {
      setUser(user);
    });

    const isAuthenticatedSub = authInteractor.isAuthenticated().subscribe((authenticated) => {
      setIsAuthenticated(authenticated);
    });

    return () => unsubscribe([userSub, isAuthenticatedSub]);
  }, []);

  return {
    user,
    isAuthenticated
  };
};

export default AppHeaderHook;
