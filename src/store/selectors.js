export const getReviews = (state) => {
  return state.REVIEWS.reviews;
};

export const getPopupData = (state) => {
  return state.POPUP.data;
};

export const getPopupFlag = (state) => {
  return state.POPUP.isPopupOpen;
};

export const getRequiredInput = (state) => {
  return state.POPUP.requiredInput;
};
