import { Observable } from "rxjs";

import { SiteResource } from "../SiteResources.ts";

export interface ISiteRestRepository {
  getSiteById(siteId: string): Observable<SiteResource>;
}
