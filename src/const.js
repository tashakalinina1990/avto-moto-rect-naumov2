import React from 'react';
import Imag1 from './assets/img/avto-1.jpg';
import Imag2 from './assets/img/avto-2.jpg';
import Imag3 from './assets/img/avto-3.jpg';
import ImagRetina1 from './assets/img/avto-1@2x.jpg';
import ImagRetina2 from './assets/img/avto-2@2x.jpg';
import ImagRetina3 from './assets/img/avto-3@2x.jpg';
import ImagWebp1 from './assets/img/avto-1.webp';
import ImagWebp2 from './assets/img/avto-2.webp';
import ImagWebp3 from './assets/img/avto-3.webp';
import ImagWebpRetina1 from './assets/img/avto-1@2x.webp';
import ImagWebpRetina2 from './assets/img/avto-2@2x.webp';
import ImagWebpRetina3 from './assets/img/avto-3@2x.webp';
import ImagSmall1 from './assets/img/avto-1-small.jpg';
import ImagSmall2 from './assets/img/avto-2-small.jpg';
import ImagSmall3 from './assets/img/avto-3-small.jpg';
import ImagSmallWebp1 from './assets/img/avto-1-small.webp';
import ImagSmallWebp2 from './assets/img/avto-2-small.webp';
import ImagSmallWebp3 from './assets/img/avto-3-small.webp';

export const STORE_REVIEWS_PREFIX = `avto-moto-localstorage-reviews`;
export const STORE_POPUP_DATA_PREFIX = `avto-moto-localstorage-popup-data`;
export const STORE_VERSION = `v1`;
export const STORE_REVIEWS_NAME = `${STORE_REVIEWS_PREFIX}-${STORE_VERSION}`;
export const STORE_POPUP_DATA_NAME = `${STORE_POPUP_DATA_PREFIX}-${STORE_VERSION}`;

export const HEADER_NAV_LINKS = [
  `Автомобили`,
  `Контакты`,
  `Услуги`,
  `Вакансии`,
];

export const FOOTER_NAV_LINKS = [
  `Корпоративным клиентам`,
  `Клиентам`,
  `Аренда авто`,
  `Каршеринг`,
  `Как продать авто`,
  `Traid-in`,
  `Test draiv`,
];

export const RATING_STARS = [`5`, `4`, `3`, `2`, `1`];

export const POPUP_INPUTS = [
  {
    id: `user`,
    title: `Имя`,
  },
  {
    id: `dignity`,
    title: `Достоинства`,
  },
  {
    id: `limitations`,
    title: `Недостатки`,
  }
];

export const TabNames = {
  FEATURE: `Характеристики`,
  REVIEWS: `Отзывы`,
  CONTACTS: `Контакты`
};

export const IMAGES = [
  {
    big: Imag1,
    bigRetina: ImagRetina1,
    bigWebp: ImagWebp1,
    bigWebpRetina: ImagWebpRetina1,
    small: ImagSmall1,
    smallWebp: ImagSmallWebp1
  },
  {
    big: Imag2,
    bigRetina: ImagRetina2,
    bigWebp: ImagWebp2,
    bigWebpRetina: ImagWebpRetina2,
    small: ImagSmall2,
    smallWebp: ImagSmallWebp2
  },
  {
    big: Imag3,
    bigRetina: ImagRetina3,
    bigWebp: ImagWebp3,
    bigWebpRetina: ImagWebpRetina3,
    small: ImagSmall3,
    smallWebp: ImagSmallWebp3
  },
];

export const FEATURES_LIST = [
  {
    name: `Трансмиссия`,
    key: `transmission`
  },
  {
    name: `Мощность двигателя, л.с.`,
    key: `horsepower`
  },
  {
    name: `Тип двигателя`,
    key: `fuel`
  },
  {
    name: `Привод`,
    key: `drive`
  },
  {
    name: `Объем двигателя, л`,
    key: `volume`
  },
  {
    name: `Макс. крутящий момент`,
    key: `torque`
  },
  {
    name: `Количество цилиндров`,
    key: `cylinders`
  },
];

export const CONTACTS = [
  {
    name: `Адрес`,
    value: <>Санкт-Петербург, <br/> набережная реки Карповки, дом 5</>
  },
  {
    name: `Режим работы`,
    value: `Ежедневно, с 10:00 до 21:00`
  },
  {
    name: `Телефон`,
    value: <a className="contacts__link" href="tel:88003335599">8 (800) 333-55-99</a>
  },
  {
    name: `E-mail`,
    value: <a className="contacts__link" href="mailto:info@avto-moto.ru">info@avto-moto.ru</a>
  },
];

export const DEFINITION_TITLES = [`Достоинства`, `Недостатки`, `Комментарий`];

export const ActionType = {
  ADD_REVIEW: `ADD_REVIEW`,
  POPUP_OPEN: `POPUP_OPEN`,
  POPUP_CLOSE: `POPUP_CLOSE`,
  POPUP_SAVE_DATA: `POPUP_SAVE_DATA`,
  POPUP_CLEAR_DATA: `POPUP_CLEAR_DATA`,
  REQUIRED_INPUT_CHANGE: `REQUIRED_INPUT_CHANGE`
};

export const defaultPopupData = {
  user: ``,
  dignity: ``,
  limitations: ``,
  comment: ``,
  rating: ``,
};

export const defaultRequiredInput = {
  user: false,
  comment: false
};

export const Key = {
  ESCAPE: `Escape`,
  ESC: `Esc`,
}

export const MapData = {
  CENTER: [59.968140, 30.316303],
  ZOOM: 15,
  WIDTH: 431,
  HEIGHT: 271,
  MARK: [59.968136, 30.316262]
};
