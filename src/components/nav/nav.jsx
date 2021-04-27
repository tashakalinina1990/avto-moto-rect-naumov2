import React from 'react';
import PropTypes from 'prop-types';

const Nav = ({block, list}) => {

  return (
    <nav className={`${block}__nav nav`}>
      <ul className={`nav__list nav__list--${block}`}>
        {list.map((item, i) =>
          <li className="nav__item" key={i + item}>
            <a className="nav__link" href="#" aria-label={`Перейти на станицу ${item}`}>
              {item}
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
};

Nav.propTypes = {
  block: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default Nav;
