import { StandardState } from "@shared/models/StoreStateModel.ts";

import { Site } from "../../domains/Site.ts";

export interface SiteState extends StandardState {
  site?: Site;
}
