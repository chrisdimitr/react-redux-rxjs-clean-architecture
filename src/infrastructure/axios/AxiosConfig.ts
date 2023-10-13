import axios from "axios";

import { authInteractor } from "../../auth/infrastructure/AuthInstances.ts";

export const httpClientAxios = axios.create({
  baseURL: import.meta.env.ON_UI_API_BASE_URI,
  responseType: "json",
  withCredentials: false
});

// Add a request interceptor
httpClientAxios.interceptors.request.use(
  function (config) {
    const token = authInteractor.getAccessToken();

    if (token) config.headers["Authorization"] = `Bearer ${token}`;

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
httpClientAxios.interceptors.response.use(
  function (response) {
    const token = authInteractor.getAccessToken();

    if (token) response.headers["Authorization"] = `Bearer ${token}`;

    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);
