import React, { Component } from 'react';

import Events from 'Components/Events';

import LatestBirths from 'Components/LatestBirths';
import LatestMarriages from 'Components/LatestMarriages';
import LatestDeaths from 'Components/LatestDeaths';

require('./style.scss');

export default class Calendar extends Component {
  render () {
    return (
      <div className='calendar-container'>
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
    );
  }
}



