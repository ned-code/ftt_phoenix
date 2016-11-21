import React, { Component } from 'react';
import { Link } from 'react-router'

/* material-ui */
import Drawer from 'material-ui/Drawer';

import IconActionDashboard from 'material-ui/svg-icons/action/dashboard';
import IconSocialPeople from 'material-ui/svg-icons/social/people';
import IconHardwareDeviceHub from 'material-ui/svg-icons/hardware/device-hub';

import MenuItem from 'material-ui/MenuItem';

export default class LeftMenu extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    const { onTouch } = this.props;

    const linkStyle = {
      'textDecoration': 'none',
      'color': 'black'
    };

    return (
      <Drawer 
        docked={false}
        open={this.props.open}
        onRequestChange={(open) => onTouch(open)}
      >
        <MenuItem onTouchTap={onTouch}>
          <Link style={linkStyle} to={'dashboard'}>
            <IconActionDashboard /> Dashboard
          </Link>
        </MenuItem>
        <MenuItem onTouchTap={onTouch}>
          <Link style={linkStyle} to={'members'}>
            <IconSocialPeople /> Members
          </Link>
        </MenuItem>
        <MenuItem onTouchTap={onTouch}>
            <IconHardwareDeviceHub /> Family Tree
        </MenuItem>
      </Drawer>
    );
  }
}



