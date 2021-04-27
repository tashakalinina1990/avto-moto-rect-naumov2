import React from "react";
import PropTypes from 'prop-types';

const TabsItem = ({tab, activeTab, onTabClick}) => {
  return (
    <li className="tabs__item">
      <button
        className={`tabs__button${activeTab === tab ? ` tabs__button--active` : ``}`}
        type="button"
        aria-label={`Показать ${tab}`}
        onClick={onTabClick}
      >
        {tab}
      </button>
    </li>
  );
};

TabsItem.propTypes = {
  tab: PropTypes.string.isRequired,
  activeTab: PropTypes.string.isRequired,
  onTabClick: PropTypes.func.isRequired,
};

export default TabsItem;
