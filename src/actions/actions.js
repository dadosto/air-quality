import { UPDATE_AIR_QUALITY_DATA_FOR_RANGE } from './actionTypes';

import {
  getAirQualityData
} from '../service/AirQualityService';

export const updateAirQualityDataForDateRangeAndLocation = (data) => ({
  type: UPDATE_AIR_QUALITY_DATA_FOR_RANGE,
  data
});

export function getAirQualityDataForDateRangeAndLocation(startDate, endDate, latitude, longitude) {
  return dispatch => {
    getAirQualityData(startDate, endDate, latitude, longitude)
      .then(receivedData => {
        console.log(`TEST data: ${JSON.stringify(receivedData[0])}`);
        dispatch(updateAirQualityDataForDateRangeAndLocation(receivedData[0]));
      }, error => {
        console.log(`'Error while fetching the data: ${error}`);
      });
  }
}
