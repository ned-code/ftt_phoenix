import React, { Component, PropTypes } from 'react';

import Module from 'Helpers/react/Module';

import MaterialAppBar from './components/AppBar';
import MaterialTabs from './components/Tabs';

export default class Layout extends Module {
  moduleRender = () => {
    return (
      <div>
        <MaterialAppBar />
        <MaterialTabs />
        <div className='wrapper'>
          {
            React.Children.map(
              this.props.children,
              (element, idx) => {
                return React.cloneElement(element, { ref: idx });
              }
            )
          }
        </div>
      </div>
    );
  }
}

