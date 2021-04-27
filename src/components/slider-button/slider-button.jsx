import React from 'react';
import PropTypes from 'prop-types';
import {ReactSVG} from 'react-svg';
import ArrowRight from '../../assets/img/icon-arrow-right.svg';
import ArrowLeft from '../../assets/img/icon-arrow-left.svg';

const SliderButton = ({onButtonClick, disabled, type}) => {
  return (
    <button
      className={`slider__button slider__button--${type}`}
      type="button"
      aria-label="Перелистнуть на другое фото"
      onClick={onButtonClick}
      disabled={disabled}
    >
      <ReactSVG
        className={`slider__button-icon slider__button-icon--${type === `prev` ? `left` : `right`}`}
        src={type === `prev` ? ArrowLeft : ArrowRight}
      />
    </button>
  );
};

SliderButton.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
};

export default SliderButton;
