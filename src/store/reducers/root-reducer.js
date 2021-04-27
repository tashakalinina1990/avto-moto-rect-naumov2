import {combineReducers} from 'redux';
import {reviews} from './reviews/reviews';
import {popup} from './popup/popup';

export const NameSpace = {
  REVIEWS: `REVIEWS`,
  POPUP: `POPUP`,
};

const {REVIEWS, POPUP} = NameSpace;

export default combineReducers({
  [REVIEWS]: reviews,
  [POPUP]: popup,
});
