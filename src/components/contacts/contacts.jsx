import React, {Fragment} from 'react';
import MapImage from '../../assets/img/map.jpg';
import {CONTACTS, MapData} from '../../const';
import {YMaps, Map, Placemark} from 'react-yandex-maps';

const {CENTER, ZOOM, WIDTH, HEIGHT, MARK} = MapData;

const Contacts = () => {
  return (
    <div className="tabs__contacts contacts">
      <dl className="contacts__info">
        {CONTACTS.map((item, i) =>
          <Fragment key={i + item}>
            <dt className="contacts__name">{item.name}</dt>
            <dd className="contacts__value">{item.value}</dd>
          </Fragment>
        )}
      </dl>
      <div className="contacts__map-wrapper">
        <img className="contacts__map-image" src={MapImage} width="431" height="271" alt="Карта" />
        <div className="contacts__map">
          <YMaps>
            <Map
              defaultState={{
                center: CENTER,
                zoom: ZOOM,
              }}
              width={WIDTH}
              height={HEIGHT}
            >
              <Placemark geometry={MARK} />
            </Map>
          </YMaps>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
