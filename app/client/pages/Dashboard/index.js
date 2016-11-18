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
    this.state = { open : false }
  }

  handleToggle = () => this.setState({open: !this.state.open});
  handleClose = () => this.setState({open: false});

  render () {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <div>
          <AppBar
            title="FamilyTreeTop"
            iconElementRight={<Logged />}
            onLeftIconButtonTouchTap={this.handleToggle}
          />
          <Drawer 
            open={this.state.open}
            onRequestChange={(open) => this.setState({open})}
          >
            <MenuItem onTouchTap={this.handleClose}>Dashboard</MenuItem>
            <MenuItem onTouchTap={this.handleClose}>Members</MenuItem>
            <MenuItem onTouchTap={this.handleClose}>Family Tree</MenuItem>
          </Drawer>
        </div>
      </MuiThemeProvider>
    );
  }
}


