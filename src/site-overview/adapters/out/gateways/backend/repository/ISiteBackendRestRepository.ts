import { Observable } from "rxjs";

import { SiteResource } from "../resources/SiteResource.ts";

export interface ISiteBackendRestRepository {
  getSiteById(siteId: string): Observable<SiteResource>;
}
