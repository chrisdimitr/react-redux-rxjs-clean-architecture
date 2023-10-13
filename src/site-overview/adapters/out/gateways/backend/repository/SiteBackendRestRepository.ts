import { from, Observable } from "rxjs";

import { jsonHttpClient } from "@shared/services/http-client/HttpClient.ts";

import { ISiteBackendRestRepository } from "./ISiteBackendRestRepository.ts";
import { getSiteByIdMock } from "./SiteMockServer.ts";
import { SiteResource } from "../resources/SiteResource.ts";

export class SiteBackendRestRepository implements ISiteBackendRestRepository {
  private static readonly SITE_REST_URI = "/site";

  getSiteById(siteId: string): Observable<SiteResource> {
    return import.meta.env.ON_UI_USE_MOCK_SERVER === "true"
      ? from(getSiteByIdMock(siteId))
      : from(
          jsonHttpClient
            .get<SiteResource>(`${SiteBackendRestRepository.SITE_REST_URI}/${siteId}`)
            .then((response) => response.data)
        );
  }
}
