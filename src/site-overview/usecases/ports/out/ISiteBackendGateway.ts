import { Observable } from "rxjs";

import { SiteBackendDto } from "../../dtos/SiteBackendDto.ts";

export interface ISiteBackendGateway {
  getSite(siteId: string): Observable<SiteBackendDto>;
}
