import { GET_AIR_QUALITY_DATA_FOR_RANGE } from './actionTypes';

export const saveAirQualityDataForDateRangeAndLocation = (dateTimeFrom, data) => ({
  type: GET_AIR_QUALITY_DATA_FOR_RANGE,
  data
});
