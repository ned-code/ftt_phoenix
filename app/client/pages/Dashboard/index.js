import React, { Component } from 'react';

import NewsFeed from 'Components/NewsFeed';
import Photos from 'Components/Photos';
import Likes from 'Components/Likes';

require('./style.scss');

export default class Dashboard extends Component {
  render () {
    return (
      <div className='dashboard-container'>
        { /* newsFeed */ }
        <div>
          <NewsFeed />
        </div>

        { /* Photos && Lieks */ }
        <div>
          <Photos /> 
          <Likes /> 
        </div>
      </div>
    );
  }
}



