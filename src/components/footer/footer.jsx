import React from 'react';
import Nav from '../nav/nav';
import {FOOTER_NAV_LINKS} from '../../const';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper container">
        <Nav block={`footer`} list={FOOTER_NAV_LINKS}/>
      </div>
    </footer>
  );
};

export default Footer;
