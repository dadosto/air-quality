import moment from 'moment';

export const getCurrentDate = () => {
  return moment.utc().format('YYYY-MM-DD');
};

export const getDateFromTwoWeeksAgo = () => {
  const currentDate = moment.utc();
  return currentDate.add(-14, 'days').format('YYYY-MM-DD');
};
