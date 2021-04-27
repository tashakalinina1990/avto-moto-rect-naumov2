import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Slider from '../slider/slider';
import Details from '../details/details';
import Tabs from '../tabs/tabs';
import Popup from '../popup/popup';
import {getPopupFlag} from "../../store/selectors";

const Main = ({popupFlag}) => {
  return (
    <main className="main">
      <div className="main__wrapper container">
        <h1 className="main__title visually-hidden">Описание автомобиля Марпех 11</h1>
        <section className="main__description description">
          <div className="description__wrapper">
            <Slider />
            <Details />
          </div>
          <Tabs />
        </section>
        {popupFlag && <Popup />}
      </div>
    </main>
  );
};

Main.propTypes = {
  popupFlag: PropTypes.bool.isRequired,
};

const mapStateToProps = (store) => ({
  popupFlag: getPopupFlag(store),
});

export default connect(mapStateToProps)(Main);
