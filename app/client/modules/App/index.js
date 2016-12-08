import React, { Component, PropTypes } from 'react';

import { BrowserRouter as Router, Match, Miss } from 'react-router';

import { connect } from 'react-redux';

/* material-ui */
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Module from 'Helpers/react/Module';

require('./style.scss');

export default class App extends Module {
  moduleRender = () => {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <div>
          {
            React.Children.map(
              this.props.children,
              (element, idx) => {
                return React.cloneElement(element, { ref: idx });
              }
            )
          }
        </div>
      </MuiThemeProvider>
    );
  }
}

