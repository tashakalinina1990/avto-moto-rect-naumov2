import {extend} from '../../../utils';
import {ActionType, STORE_REVIEWS_NAME} from '../../../const';
import {reviewsMocks} from '../../../mocks';

const {ADD_REVIEW} = ActionType;

const initialState = {
  reviews: localStorage[STORE_REVIEWS_NAME] ?
    JSON.parse(localStorage[STORE_REVIEWS_NAME]) :
    reviewsMocks
};

const reviews = (state = initialState, action) => {
  switch (action.type) {
    case ADD_REVIEW:
      localStorage[STORE_REVIEWS_NAME] = JSON.stringify([...state.reviews, action.payload]);
      return extend(state, {
        reviews: [...state.reviews, action.payload],
      });
    default:
      return state;
  }
};

export {reviews};
