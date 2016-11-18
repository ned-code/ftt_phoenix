import React, { Component } from 'react';

import IconButton from 'material-ui/IconButton';

/* material-ui */
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

import NavigationExpand from 'material-ui/svg-icons/navigation/expand-more';

/* component */
import Logged from 'Components/Logged';

export default class Dashboard extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isDrawerOpen : false
    }
  }

  onTouchTap = () => {
    const { isDrawerOpen } = this.state;
    this.setState({
      isDrawerOpen : !isDrawerOpen
    });
  }

  render () {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <div>
          <AppBar
            title="FamilyTreeTop"
            iconElementRight={<Logged />}
            onLeftIconButtonTouchTap={this.onTouchTap}
          />
          <Drawer open={this.state.isDrawerOpen}>
            <MenuItem>Menu Item</MenuItem>
            <MenuItem>Menu Item 2</MenuItem>
          </Drawer>
        </div>
      </MuiThemeProvider>
    );
  }
}


