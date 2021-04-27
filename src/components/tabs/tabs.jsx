import React, {useState} from 'react';
import Features from '../features/features';
import Reviews from '../reviews/reviews';
import Contacts from '../contacts/contacts';
import TabsItem from '../tabs-item/tabs-item';
import {TabNames} from '../../const';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(TabNames.FEATURE);

  const handleTabClick = (evt) => {
    if (!evt.target.textContent) {
      return;
    }

    setActiveTab(evt.target.textContent);
  };

  const getTabComponent = () => {
    switch (activeTab) {
      case TabNames.FEATURE:
        return <Features />;
      case TabNames.REVIEWS:
        return <Reviews />;
      case TabNames.CONTACTS:
        return <Contacts />;
      default:
        return null;
    }
  };

  return (
    <div className="description__tabs tabs">
      <ul className="tabs__list">
        {Object.values(TabNames).map((tab, i) =>
          <TabsItem key={`${i}-${tab}`} tab={tab} activeTab={activeTab} onTabClick={handleTabClick} />
        )}
      </ul>

      {getTabComponent()}
    </div>
  );
};

export default Tabs;
