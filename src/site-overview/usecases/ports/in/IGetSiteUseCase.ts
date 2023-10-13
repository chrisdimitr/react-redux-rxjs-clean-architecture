import { Observable } from "rxjs";

import { SiteModel } from "../../models/SiteModel.ts";

export interface IGetSiteUseCase {
  getSite(siteId: string): Observable<SiteModel>;
}
