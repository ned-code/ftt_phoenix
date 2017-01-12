import React, { Component } from 'react';

/* material-ui */
import {
  IconButton,
  IconMenu,
  MenuItem,
  AppBar,
  Avatar
} from 'material-ui';

import IconHardwareKeybordArrowDown from 'material-ui/svg-icons/hardware/keyboard-arrow-down';

export default class MaterialAppBar  extends Component {
  render () {
    return (
      <AppBar
        title="FamilyTreeTop"
        iconElementLeft={ <span></span> }
        iconElementRight={
          <div style={{ 'color': 'white' }}>
            <Avatar>F</Avatar> FamilyTreeTop
            <IconMenu
              iconButtonElement={<IconButton><IconHardwareKeybordArrowDown color={'white'}/></IconButton>}
              anchorOrigin={{horizontal: 'right', vertical: 'top'}}
              targetOrigin={{horizontal: 'right', vertical: 'top'}}
            >
              <MenuItem primaryText='Logout' />
            </IconMenu>
          </div>
        }
      />
    );
  }
}




