import React from 'react';
import {ReactSVG} from 'react-svg';
import Nav from '../nav/nav';
import Logo from '../../assets/img/icon-logo.svg';
import {HEADER_NAV_LINKS} from '../../const';

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper container">
        <a className="header__logo" href="/" aria-label="Перейти на главную станицу">
          <ReactSVG className="header__logo-icon" src={Logo} alt="Avto-Moto - Лого"/>
        </a>
        <Nav block={`header`} list={HEADER_NAV_LINKS}/>
      </div>
    </header>
  );
};

export default Header;
