import _ from 'lodash';

import { UPDATE_CURRENT_DATA } from './actionTypes';
import { UPDATE_HISTORY_DATA } from './actionTypes';
import { UPDATE_SELECTED_LOCATION } from './actionTypes';

import {
  getAirQualityData
} from '../service/AirQualityService';

export const updateCurrentAirQualityData = (data) => ({
  type: UPDATE_CURRENT_DATA,
  data
});

export const updateHistoryAirQualityDataForLocation = (historyData) => ({
  type: UPDATE_HISTORY_DATA,
  historyData
});

export function getAirQualityDataForDateRangeAndLocation(startDate, endDate, latitude, longitude) {
  return dispatch => {
    getAirQualityData(startDate, endDate, latitude, longitude)
      .then(receivedData => {
        const mostRecentItem = _.last(receivedData);
        dispatch(updateCurrentAirQualityData(mostRecentItem));
        dispatch(updateHistoryAirQualityDataForLocation(receivedData));
      }, error => {
        console.log(`'Error while fetching the data: ${error}`);
      });
  }
}

export const updateLocation = (latitude, longitude, address) => {
  return {
    type: UPDATE_SELECTED_LOCATION,
    location: {
      latitude,
      longitude,
      address
    }
  };
};
