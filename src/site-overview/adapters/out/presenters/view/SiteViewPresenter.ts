import { SiteModel } from "../../../../usecases/models/SiteModel.ts";
import { ISiteViewPresenter } from "../../../../usecases/ports/out/ISiteViewPresenter.ts";

export class SiteViewPresenter implements ISiteViewPresenter {
  constructor() {}

  successView(siteModel: SiteModel): SiteModel {
    return siteModel;
  }
}
