import { StandardState } from "@shared/models/StoreStateModel.ts";

import { Enterprise } from "../../domains/Enterprise.ts";

export interface EnterpriseState extends StandardState {
  enterprises: Enterprise[];
}
