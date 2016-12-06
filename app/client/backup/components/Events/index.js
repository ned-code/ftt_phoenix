import React, { Component } from 'react';

import { Toolbar, ToolbarGroup, DropDownMenu, Paper, Avatar, IconButton, IconMenu, MenuItem, Divider, Subheader } from 'material-ui';
import { List, ListItem, makeSelectable } from 'material-ui/List';

import IconActionDateRange from 'material-ui/svg-icons/action/date-range'

export default class Events extends Component {
  render () {
    return ( 
      <Paper zDepth={1} style={{ width: '500px' }}>
        <Toolbar>
          <ToolbarGroup firstChild={true}>
            <DropDownMenu 
              value={1} 
              autoWidth={true}
              style={{ width: '100%' }}
              onChange={(...rest) => console.log(rest)}
            >
              <MenuItem value={1} primaryText="January" />
              <MenuItem value={2} primaryText="February" />
              <MenuItem value={3} primaryText="March" />
              <MenuItem value={4} primaryText="April" />
              <MenuItem value={5} primaryText="May" />
              <MenuItem value={6} primaryText="June" />
              <MenuItem value={7} primaryText="Jule" />
              <MenuItem value={8} primaryText="August" />
              <MenuItem value={9} primaryText="September" />
              <MenuItem value={10} primaryText="Octember" />
              <MenuItem value={11} primaryText="November" />
              <MenuItem value={12} primaryText="December" />
            </DropDownMenu>
          </ToolbarGroup>
        </Toolbar>
        <List>
          <Subheader>Birthday</Subheader>
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
          <Divider />
          <Subheader>Anniversary</Subheader>
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
          <Divider />
          <Subheader>We remember</Subheader>
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



