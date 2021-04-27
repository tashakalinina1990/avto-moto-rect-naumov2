import moment from "moment";
import 'moment/locale/ru';

export const getReviewDate = (date) => {
  return moment(date).locale(`ru`).fromNow();
};

export const splittingDigits = (item) => {
  return (String(item)).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, `$1 `);
};

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};
