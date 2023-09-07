import { StandardState } from "@shared/models/StoreStateModels.ts";

import { Site } from "../../domains/Site.ts";

export interface SiteState extends StandardState {
  site?: Site;
}
