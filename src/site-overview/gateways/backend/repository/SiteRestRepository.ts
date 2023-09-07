import { from, Observable } from "rxjs";

import { jsonHttpClient } from "@shared/services/http-client/HttpClient.ts";

import { ISiteRestRepository } from "./ISiteRestRepository.ts";
import { getSiteByIdMock } from "./SiteMockServer.ts";
import { SiteResource } from "../SiteResources.ts";

export class SiteRestRepository implements ISiteRestRepository {
  private static readonly SITE_REST_URI = "/site";

  getSiteById(siteId: string): Observable<SiteResource> {
    return import.meta.env.ON_UI_USE_MOCK_SERVER === "true"
      ? from(getSiteByIdMock(siteId))
      : from(
          jsonHttpClient
            .get<SiteResource>(`${SiteRestRepository.SITE_REST_URI}/${siteId}`)
            .then((response) => response.data)
        );
  }
}
