import { map, Observable } from "rxjs";

import { ISiteBackendRestRepository } from "./repository/ISiteBackendRestRepository.ts";
import { SiteBackendDto } from "../../../../usecases/dtos/SiteBackendDto.ts";
import { resourceToDto } from "../../../../usecases/mappers/SiteBackendDtoMapper.ts";
import { ISiteBackendGateway } from "../../../../usecases/ports/out/ISiteBackendGateway.ts";

export class SiteBackendGateway implements ISiteBackendGateway {
  private readonly siteBackendRestRepository: ISiteBackendRestRepository;

  constructor(_siteBackendRestRepository: ISiteBackendRestRepository) {
    this.siteBackendRestRepository = _siteBackendRestRepository;
  }

  getSite(siteId: string): Observable<SiteBackendDto> {
    return this.siteBackendRestRepository.getSiteById(siteId).pipe(map(resourceToDto));
  }
}
