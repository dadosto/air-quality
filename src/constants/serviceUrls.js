const serviceBaseUrl = 'https://api.breezometer.com/baqi/';
const queryParamStartDateTime = 'start_datetime';
const queryParamEndDateTime = 'end_datetime';
const queryParamInterval = 'interval';
const queryParamLatitude = 'lat';
const queryParamLongitude = 'lon';
const queryParamKey = 'key';

const apiKey = '005b69208ac0466d9dda0ac071349717';

export const getDataFromServerUrl = () => {
  return serviceBaseUrl;
};

export const getQueryParams = (startDate, endDate, interval, latitude, longitude) => ({
  [queryParamStartDateTime]: startDate,
  [queryParamEndDateTime]: endDate,
  [queryParamInterval]: interval,
  [queryParamLatitude]: latitude,
  [queryParamLongitude]: longitude,
  [queryParamKey]: apiKey
});
