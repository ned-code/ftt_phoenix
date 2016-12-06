import React, { Component } from 'react';

import MemebersContainer from 'Containers/MembersContainer';

import MembersTable from 'Components/MembersTable';
import MembersFilters from 'Components/MembersFilters';

import { Paper, RaisedButton, Toggle, Toolbar, Subheader, ToolbarGroup, Avatar, IconButton, IconMenu, MenuItem } from 'material-ui';

require('./style.scss');

export default class Members extends Component {
  render () {
    return (
      <MemebersContainer>
        <div className='members-container'>
          <div>
            <MembersTable />
          </div>
          <div>
            <MembersFilters />
          </div>
        </div>
      </MemebersContainer>
    );
  }
}



