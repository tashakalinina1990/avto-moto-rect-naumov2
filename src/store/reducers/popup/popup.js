import {extend} from '../../../utils';
import {
  ActionType,
  defaultPopupData,
  defaultRequiredInput,
  STORE_POPUP_DATA_NAME
} from '../../../const';

const {
  POPUP_OPEN,
  POPUP_CLOSE,
  POPUP_SAVE_DATA,
  POPUP_CLEAR_DATA,
  REQUIRED_INPUT_CHANGE
} = ActionType;

const initialState = {
  data: defaultPopupData,
  requiredInput: defaultRequiredInput,
  isPopupOpen: false
};

const popup = (state = initialState, action) => {
  switch (action.type) {
    case POPUP_OPEN:
      return extend(state, {
        isPopupOpen: true
      });
    case POPUP_CLOSE:
      return extend(state, {
        isPopupOpen: false
      });
    case REQUIRED_INPUT_CHANGE:
      return extend(state, {
        requiredInput: action.payload
      });
    case POPUP_SAVE_DATA:
      localStorage[STORE_POPUP_DATA_NAME] = JSON.stringify(action.payload);
      return extend(state, {
        data: action.payload
      });
    case POPUP_CLEAR_DATA:
      localStorage.removeItem(STORE_POPUP_DATA_NAME);
      return extend(state, {
        data: defaultPopupData,
        requiredInput: defaultRequiredInput,
      });
    default:
      return state;
  }
};

export {popup};
