import { map, Observable } from "rxjs";

import { ISiteRestRepository } from "./repository/ISiteRestRepository.ts";
import { toDomain } from "./SiteResourceDomainMapper.ts";
import { Site } from "../../domains/Site.ts";
import { IGetSitePort } from "../../usecases/ports/out/IGetSitePort.ts";

export class SiteRestAdapter implements IGetSitePort {
  private readonly siteRestRepository: ISiteRestRepository;

  constructor(_siteRestRepository: ISiteRestRepository) {
    this.siteRestRepository = _siteRestRepository;
  }

  getSite(siteId: string): Observable<Site> {
    return this.siteRestRepository.getSiteById(siteId).pipe(map(toDomain));
  }
}
