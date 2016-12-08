import React, { Component, PropTypes } from 'react';

import { Paper, RaisedButton, Toolbar, Subheader, ToolbarGroup, Avatar, IconButton, IconMenu, MenuItem } from 'material-ui';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

import IconNavigationMoreVert from 'material-ui/svg-icons/navigation/more-vert'

import Row from './Row';

export default class T extends Component {

  static contextTypes = {
    users: PropTypes.array,
  }

  render () {
    const { users } = this.context;

    return (
      <Paper zDepth={1} >
        <Table style={{ width: '700px' }} >
          <TableHeader 
            adjustForCheckbox={false}
            displaySelectAll={false}
          >
            <TableRow>
              <TableHeaderColumn>Relation</TableHeaderColumn>
              <TableHeaderColumn>Name</TableHeaderColumn>
              <TableHeaderColumn>Birth</TableHeaderColumn>
              <TableHeaderColumn>BirthPlace</TableHeaderColumn>
              <TableHeaderColumn></TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            adjustForCheckbox={false}
            displayRowCheckbox={false}
          >
          {
            users.map(
              (user, key) => (
                <Row 
                  key={ key }
                  relation={ '' }
                  name={ user.name }
                  birth={ new Date(1987, 9, 18) }
                  birthplace={ '' }
                  onEdit={ ()=>console.log('edit') }
                  onAddParent={ ()=>console.log('add parent') }
                  onAddSpouse={ ()=>console.log('add spouse') }
                  onAddChild={ ()=>console.log('add child') }
                  onDelete={ ()=>console.log('delete') }
                />
              )
            )
          }
          </TableBody>
        </Table>
      </Paper>
    );
  }
}


