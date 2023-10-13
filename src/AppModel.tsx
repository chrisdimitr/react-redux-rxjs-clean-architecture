import { Theme } from "@mui/material";

export interface AppModel {
  theme: Theme;
  isInitialized: boolean;
}

export type RouteResolverFn = (params: any) => Promise<any | undefined>;
