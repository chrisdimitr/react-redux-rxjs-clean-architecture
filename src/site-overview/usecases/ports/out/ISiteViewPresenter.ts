import { SiteModel } from "../../models/SiteModel.ts";

export interface ISiteViewPresenter {
  successView(siteModel: SiteModel): SiteModel;
}
