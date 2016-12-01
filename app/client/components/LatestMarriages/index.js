import React, { Component } from 'react';

import { Paper, Toolbar, Subheader, ToolbarGroup, Avatar, IconButton, IconMenu, MenuItem } from 'material-ui';
import { List, ListItem, makeSelectable } from 'material-ui/List';

import IconActionDateRange from 'material-ui/svg-icons/action/date-range'

export default class LatestMarriages extends Component {
  render () {
    return ( 
      <Paper zDepth={1} style={{ width: '500px' }}>
        <Toolbar style={{ width: '100%' }} >
          <ToolbarGroup firstChild={true}>
            <Subheader>Latest Marriages</Subheader>
          </ToolbarGroup>
        </Toolbar>
        <List>
          <ListItem
            primaryText="Ted Tomas"
            secondaryText="Uncle"
            leftIcon={<div><IconActionDateRange></IconActionDateRange>24</div>}
            rightIcon={<Avatar>42</Avatar>}
            secondaryTextLines={2}
          />
          <ListItem
            primaryText="Ted Tomas"
            secondaryText="Uncle"
            leftIcon={<div><IconActionDateRange></IconActionDateRange>24</div>}
            rightIcon={<Avatar>42</Avatar>}
            secondaryTextLines={2}
          />
          <ListItem
            primaryText="Ted Tomas"
            secondaryText="Uncle"
            leftIcon={<div><IconActionDateRange></IconActionDateRange>24</div>}
            rightIcon={<Avatar>42</Avatar>}
            secondaryTextLines={2}
          />
        </List>
      </Paper> 
    );
  }
}



