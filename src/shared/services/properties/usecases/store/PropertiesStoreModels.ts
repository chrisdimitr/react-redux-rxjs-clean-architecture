import { Property } from "@shared/models/CommonModels.ts";
import { StandardState } from "@shared/models/StoreStateModels.ts";

export interface PropertiesState extends StandardState {
  properties: Property[];
}
