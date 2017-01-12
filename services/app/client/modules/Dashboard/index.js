import React, { Component, PropTypes } from 'react';

import Module from 'Helpers/react/Module';

import NewsFeed from './components/NewsFeed';
import Photos from './components/Photos';
import Likes from './components/Likes';

import styles from './styles.css';

export default class Dashboard extends Module {
  moduleRender = () => {
    return (
      <div className={styles.container}>
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
    )
  }
}


