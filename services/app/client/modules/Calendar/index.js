import React, { Component, PropTypes } from 'react';

import Module from 'Helpers/react/Module';

import Events from './components/Events';
import LatestBirths from './components/LatestBirths';
import LatestMarriages from './components/LatestMarriages';
import LatestDeaths from './components/LatestDeaths';

import styles from './styles.css';

export default class Calendar extends Module {
  moduleRender = () => {
    return (
      <div className={styles.continaer}>
        { /* newsFeed */ }
        <div>
          <Events />
        </div>

        { /* Photos && Lieks */ }
        <div>
          <LatestBirths /> 
          <LatestMarriages /> 
          <LatestDeaths /> 
        </div>
      </div>
    )
  }
}


