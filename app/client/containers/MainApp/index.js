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
import * as actions from 'redux/modules/actions';

@connect(
  (state) => {
    return {
      users: null
    };
  },
  { 
    load: actions.users.load
  }
)
export default class MainApp extends Component {

  constructor(props){
    super(props);

    const { load } = this.props;

    load();
  }

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

