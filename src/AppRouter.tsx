import { lazy, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { createBrowserRouter, Navigate, useParams } from "react-router-dom";

import LoadingIndicator from "@shared/components/LoadingIndicator/LoadingIndicator.tsx";
import { appInitializer } from "@shared/services/app-initializer/AppInitializer.ts";
import { unsubscribe } from "@shared/utils/ObservableUtils.ts";

import { selectAppSecureInitialized } from "@config/redux-toolkit/store.ts";

import { getAuthInteractor } from "./auth/config/AuthInstances.ts";
import { EnterprisesOverviewResolver } from "./enterprise-overview/gateways/view/components/EnterprisesOverviewResolver.ts";
import AppLayout from "./layout/gateways/view/components/AppLayout.tsx";
import { SiteOverviewResolver } from "./site-overview/gateways/view/components/SiteOverviewResolver.ts";

import type { RouteObject } from "react-router";

export const authCallbackPath = "/auth-callback";
export const homePath = "/";
export const loginPath = "/login";
export const enterpriseOverviewPath = "/enterprise-overview";
export const siteOverviewPath = "/site-overview/:siteId";

export type RouteResolverFn = (params: any) => Promise<any | undefined>;

const AppAnonymousRoute = (props: { component: any }) => {
  const { component } = props;

  const [isAuthenticated, setIsAuthenticated] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    const sub = getAuthInteractor.isAuthenticated().subscribe((authenticated) => {
      setIsAuthenticated(authenticated);
    });

    return () => unsubscribe([sub]);
  }, []);

  if (isAuthenticated !== undefined) {
    if (isAuthenticated) {
      return <Navigate to={homePath} replace />;
    }

    return component;
  }

  return null;
};

const AppSecuredRoute = (props: { component: any }) => {
  const { component } = props;

  const isAppSecureInitialized = useSelector(selectAppSecureInitialized);

  const [isAuthenticated, setIsAuthenticated] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    const sub = getAuthInteractor.isAuthenticated().subscribe((authenticated) => {
      setIsAuthenticated(authenticated);

      if (authenticated) {
        console.log("AppSecuredRoute - setRequiredSecuredData");
        appInitializer.setRequiredSecuredData();
      }
    });

    return () => unsubscribe([sub]);
  }, []);

  if (isAuthenticated !== undefined) {
    if (isAuthenticated) {
      if (isAppSecureInitialized) {
        return <LoadingIndicator />;
      }

      return component;
    }

    return <Navigate to={loginPath} replace state={window.location.pathname} />;
  }

  return null;
};

const RouteResolver = (props: { Component: any; resolver: RouteResolverFn }) => {
  const { Component, resolver } = props;

  const params = useParams();

  const ResolvedComponent = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [data, setData] = useState<any | undefined>(undefined);

    useEffect(() => {
      const resolveData = async () => {
        try {
          return await resolver(params);
        } catch (error: any) {
          console.log("error");
          return undefined;
        }
      };

      resolveData().then((data) => {
        setIsLoading(false);
        setData(data);
      });
    }, [resolver, params]);

    if (isLoading) {
      return <LoadingIndicator />;
    } else {
      if (data !== undefined) {
        return <Component data={data} />;
      }

      return null;
    }
  };

  return <ResolvedComponent />;
};

const EnterprisesOverview = lazy(
  () => import("./enterprise-overview/gateways/view/components/EnterprisesOverview.tsx")
);
const SiteOverview = lazy(() => import("./site-overview/gateways/view/components/SiteOverview.tsx"));
const Login = lazy(() => import("./login/gateways/view/components/Login.tsx"));
const AuthCallback = lazy(() => import("./auth/gateways/view/components/AuthCallback.tsx"));
const NotFoundError404 = lazy(() => import("./errors/gateways/view/components/NotFoundError404/NotFoundError404.tsx"));

const AppRoutes: RouteObject[] = [
  {
    path: homePath,
    element: <AppSecuredRoute component={<AppLayout />} />,
    children: [
      {
        path: homePath,
        element: <RouteResolver Component={EnterprisesOverview} resolver={EnterprisesOverviewResolver} />
      },
      {
        path: enterpriseOverviewPath,
        element: <RouteResolver Component={EnterprisesOverview} resolver={EnterprisesOverviewResolver} />
        //element: <EnterprisesOverview />
      },
      {
        path: siteOverviewPath,
        element: <RouteResolver Component={SiteOverview} resolver={SiteOverviewResolver} />
      }
    ]
  },
  {
    path: loginPath,
    element: <AppAnonymousRoute component={<Login />} />
  },
  {
    path: authCallbackPath,
    element: <AppAnonymousRoute component={<AuthCallback />} />
  },
  {
    path: "*",
    element: <NotFoundError404 />
  }
];

const AppRouter = createBrowserRouter(AppRoutes);

export default AppRouter;
