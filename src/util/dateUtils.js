import moment from 'moment';

export const getCurrentDate = () => {
  return moment.utc().format('YYYY-MM-DD');
};

export const getTomorrowsDate = () => {
  return moment.utc().add(1, 'days').format('YYYY-MM-DD');
};

export const getDateFromTwoWeeksAgo = () => {
  const date = moment.utc().add(-13, 'days');
  return date.format('YYYY-MM-DD');
};
