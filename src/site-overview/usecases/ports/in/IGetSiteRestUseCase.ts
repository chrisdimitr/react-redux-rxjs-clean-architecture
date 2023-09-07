import { Observable } from "rxjs";

import { Site } from "../../../domains/Site.ts";

export interface IGetSiteRestUseCase {
  getSite(siteId: string): Observable<Site>;
}
