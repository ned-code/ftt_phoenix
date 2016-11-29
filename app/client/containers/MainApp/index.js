import React, { Component } from 'react';

require('Containers/MainApp/style.scss');

import { connect } from 'react-redux';

/* material-ui */
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

/* component */
import MainAppBar from 'Containers/MainApp/components/MainAppBar';
import MainTabs from 'Containers/MainApp/components/MainTabs';

/* actions */

@connect(
  state => ({
  }),
  { }
)
export default class MainApp extends Component {

  render () {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <div>
          <MainAppBar />
          <MainTabs />
          <div className="wrapper">
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
      </MuiThemeProvider>
    );
  }
}

