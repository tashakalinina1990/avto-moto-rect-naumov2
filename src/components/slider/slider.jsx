import React, {useState} from 'react';
import Slide from '../slide/slide';
import SliderButton from '../slider-button/slider-button';
import {IMAGES} from '../../const';

const Slider = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <div className="description__slider slider">
      <Slide img={IMAGES[activeSlide]} />
      <div className="slider__control">
        <SliderButton
          onButtonClick={() => setActiveSlide((prevState) => prevState - 1)}
          disabled={activeSlide === 0}
          type={`prev`}
        />
        <ul className="slider__preview-list">
          {IMAGES.map((item, i) => {
            return (
              <li key={`${i}-${item}`} className="slider__preview-item">
                <picture>
                  <source type="image/webp" srcSet={item.smallWebp} />
                  <img src={item.small} width="128" height="80" alt={`Миниатюра слайда ${i + 1}`} />
                </picture>
              </li>
            );
          })}
        </ul>
        <SliderButton
          onButtonClick={() => setActiveSlide((prevState) => prevState + 1)}
          disabled={activeSlide === IMAGES.length - 1}
          type={`next`}
        />
      </div>
    </div>
  );
};

export default Slider;
