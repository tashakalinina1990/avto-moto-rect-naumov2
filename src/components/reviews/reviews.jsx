import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import ReviewsItem from '../reviews-item/reviews-item';
import {getReviews} from '../../store/selectors';
import {setPopupOpen} from '../../store/action';

const Reviews = ({openPopup, reviews}) => {
  return (
    <div className="tabs__reviews reviews">
      <button
        className="reviews__button button button--white"
        type="button"
        aria-label="Открыть форму комментария"
        onClick={openPopup}
      >
        оставить отзыв
      </button>
      <ul className="reviews__list">
        {reviews.map((item, i) =>
          <ReviewsItem review={item} key={i + item} />
        )}
      </ul>
    </div>
  );
};

Reviews.propTypes = {
  openPopup: PropTypes.func.isRequired,
  reviews: PropTypes.arrayOf(
      PropTypes.shape({
        user: PropTypes.string.isRequired,
        definition: PropTypes.shape({
          dignity: PropTypes.string.isRequired,
          limitations: PropTypes.string.isRequired,
          comment: PropTypes.string.isRequired,
        }).isRequired,
        rating: PropTypes.string.isRequired,
        time: PropTypes.string.isRequired,
      })),
};

const mapStateToProps = (store) => ({
  reviews: getReviews(store),
});

const mapDispatchToProps = (dispatch) => ({
  openPopup() {
    dispatch(setPopupOpen());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);
