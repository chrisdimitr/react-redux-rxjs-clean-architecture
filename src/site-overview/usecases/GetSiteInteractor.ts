import { Observable } from "rxjs";

import { store } from "@config/redux-toolkit/store.ts";

import { IGetSiteRestUseCase } from "./ports/in/IGetSiteRestUseCase.ts";
import { IGetSiteStoreUseCase } from "./ports/in/IGetSiteStoreUseCase.ts";
import { IGetSitePort } from "./ports/out/IGetSitePort.ts";
import { getSite } from "./store/SiteStore.ts";
import { Site } from "../domains/Site.ts";

export class GetSiteInteractor implements IGetSiteStoreUseCase, IGetSiteRestUseCase {
  private readonly getSitePort: IGetSitePort;

  constructor(_getSitePort: IGetSitePort) {
    this.getSitePort = _getSitePort;
  }

  dispatchGetSite(siteId: string): void {
    // @ts-ignore
    store.dispatch(getSite(siteId));
  }

  getSite(siteId: string): Observable<Site> {
    return this.getSitePort.getSite(siteId);
  }
}
