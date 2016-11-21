import React, { Component } from 'react';

require('Containers/App/style.scss');

import { connect } from 'react-redux';

/* material-ui */
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import AppBar from 'material-ui/AppBar';

/* component */
import LeftMenu from 'Components/LeftMenu';
import Logged from 'Components/Logged';
import UserAvatar from 'Components/UserAvatar';

/* actions */
import * as actionsApp from 'redux/modules/app/actions';

@connect(
  state => ({
    app: state.app  
  }),
  {
    onLeftMenuChange: actionsApp.leftMenuChange
  }
)
export default class App extends Component {
  constructor (props) {
    super(props);
    this.state = { open: false };
  }

  handleTouch = (data) => {
    this.setState({ open: false });
  };

  handleToggle = () => this.setState({ open: true });

  render () {
    const { app, onLeftMenuChange } = this.props;
    const { leftMenuOpen } = app;
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <div>
          <LeftMenu open={this.state.open} onTouch={this.handleTouch} />
          <AppBar
            title="FamilyTreeTop"
            iconElementRight={<div><UserAvatar /></div>}
            onLeftIconButtonTouchTap={this.handleToggle}
          />
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

