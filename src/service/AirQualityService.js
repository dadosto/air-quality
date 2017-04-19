import http from './httpHelper';

import {
  getDataFromServerUrl,
  getQueryParams
} from '../constants/serviceUrls';

export const getAirQualityData = (startDateTime, endDateTime, latitude, longitude) => {
  const url = getDataFromServerUrl();
  const queryParams = getQueryParams(startDateTime, endDateTime, 1, latitude, longitude);
  return http.getJson(url, queryParams);
};
