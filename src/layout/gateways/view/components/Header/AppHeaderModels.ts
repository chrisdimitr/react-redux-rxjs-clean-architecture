import { AuthUser } from "../../../../../auth/domains/AuthUser.ts";

export interface AppHeaderModel {
  user?: AuthUser;
  isAuthenticated?: boolean;
}
