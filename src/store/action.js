import {ActionType} from '../const';

const {
  ADD_REVIEW,
  POPUP_OPEN,
  POPUP_CLOSE,
  POPUP_SAVE_DATA,
  POPUP_CLEAR_DATA,
  REQUIRED_INPUT_CHANGE
} = ActionType;

export const setReview = (review) => ({
  type: ADD_REVIEW,
  payload: review,
});

export const setPopupOpen = () => ({
  type: POPUP_OPEN,
});

export const setPopupClose = () => ({
  type: POPUP_CLOSE,
});

export const setPopupData = (data) => ({
  type: POPUP_SAVE_DATA,
  payload: data,
});

export const clearPopupData = () => ({
  type: POPUP_CLEAR_DATA,
});

export const setRequiredInput = (flags) => ({
  type: REQUIRED_INPUT_CHANGE,
  payload: flags,
});
