import moment from 'moment';

const dateInFormat = "YYYY-MM-DDTHH:mm:ss";
const dateOutFormat = "DD.MM.YYYY";

const createMomentDate = (date, format) => {
  return moment.utc(date, format, true);
};

export const mapAirQualityDataForDate = airQualityDataForSingleDate => {
  const date = createMomentDate(airQualityDataForSingleDate.datetime, dateInFormat);
  return {
    date: date.format(dateOutFormat),
    airQualityIndex: airQualityDataForSingleDate.breezometer_aqi,
    pv: 1,
    amt: 1
  };
};

export const mapAirQualityData = airQualityData => {
  return airQualityData.map(entry => mapAirQualityDataForDate(entry));
};
