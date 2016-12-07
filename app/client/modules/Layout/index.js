import React, { Component, PropTypes } from 'react';

import Module from 'Helpers/react/Module';

import MaterialAppBar from './components/AppBar';
import MaterialTabs from './components/Tabs';

export default class Layout extends Module {
  onChangeTab = (url) => this.props.history.replace(url); 

  moduleRender = () => {
    return (
      <div>
        <MaterialAppBar />
        <MaterialTabs onChangeTab={this.onChangeTab} />
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

