import React, { PropTypes } from 'react';

/* material-ui */
import Avatar from 'material-ui/Avatar';
import ListItem from 'material-ui/List/ListItem';

import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';

import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

const UserAvatar = (props) => ( 
  <ListItem
    style={{color: 'white' }}
    disabled={true}
    leftAvatar={
      <Avatar src={require("Static/images/uxceo-128.jpg")} /> 
    }
  >
    Username
  </ListItem>
);

UserAvatar.propTypes = { };

export default UserAvatar;
