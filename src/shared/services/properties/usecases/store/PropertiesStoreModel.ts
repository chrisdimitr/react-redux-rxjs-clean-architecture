import { Property } from "@shared/models/CommonModel.ts";
import { StandardState } from "@shared/models/StoreStateModel.ts";

export interface PropertiesState extends StandardState {
  properties: Property[];
}
