import React from 'react';
import PropTypes from 'prop-types';

const Slide = ({img}) => {
  return (
    <div className="slider__slide slide">
      <picture className="slide__image">
        <source type="image/webp" srcSet={`${img.bigWebp} 1x, ${img.bigWebpRetina} 2x`} />
        <img src={img.big} srcSet={`${img.bigRetina} 2x`} width="600" height="375" alt="Фото автомобиля" />
      </picture>
      <p className="slide__text">NEW MODEL</p>
    </div>
  );
};

Slide.propTypes = {
  img: PropTypes.shape({
    big: PropTypes.string.isRequired,
    bigWebp: PropTypes.string.isRequired,
    small: PropTypes.string.isRequired,
    smallWebp: PropTypes.string.isRequired,
  }).isRequired,
};

export default Slide;
