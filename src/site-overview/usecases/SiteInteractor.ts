import { map, Observable } from "rxjs";

import { SiteBackendDto } from "./dtos/SiteBackendDto.ts";
import { backendDtoToModel } from "./mappers/SiteModelMapper.ts";
import { SiteModel } from "./models/SiteModel.ts";
import { IGetSiteStoreUseCase } from "./ports/in/IGetSiteStoreUseCase.ts";
import { IGetSiteUseCase } from "./ports/in/IGetSiteUseCase.ts";
import { ISiteBackendGateway } from "./ports/out/ISiteBackendGateway.ts";
import { ISiteViewPresenter } from "./ports/out/ISiteViewPresenter.ts";
import { getSite } from "./store/SiteStore.ts";
import { store } from "../../infrastructure/redux-toolkit/store.ts";

export class SiteInteractor implements IGetSiteStoreUseCase, IGetSiteUseCase {
  private readonly siteBackendGateway: ISiteBackendGateway;
  private readonly siteViewPresenter: ISiteViewPresenter;

  constructor(_siteBackendGateway: ISiteBackendGateway, _siteViewPresenter: ISiteViewPresenter) {
    this.siteBackendGateway = _siteBackendGateway;
    this.siteViewPresenter = _siteViewPresenter;
  }

  dispatchGetSite(siteId: string): void {
    // @ts-ignore
    store.dispatch(getSite(siteId));
  }

  getSite(siteId: string): Observable<SiteModel> {
    return this.siteBackendGateway
      .getSite(siteId)
      .pipe(
        map((siteBackendDto: SiteBackendDto) => this.siteViewPresenter.successView(backendDtoToModel(siteBackendDto)))
      );
  }
}
