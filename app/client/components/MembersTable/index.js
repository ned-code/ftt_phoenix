import React, { Component } from 'react';

import { Paper, Toolbar, Subheader, ToolbarGroup, Avatar, IconButton, IconMenu, MenuItem } from 'material-ui';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

export default class MembersTable extends Component {
  render () {
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
            </TableRow>
          </TableHeader>
          <TableBody
            adjustForCheckbox={false}
            displayRowCheckbox={false}
          >
            <TableRow>
              <TableRowColumn>1</TableRowColumn>
              <TableRowColumn>John Smith</TableRowColumn>
              <TableRowColumn>Employed</TableRowColumn>
              <TableRowColumn>Employed</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>2</TableRowColumn>
              <TableRowColumn>Randal White</TableRowColumn>
              <TableRowColumn>Unemployed</TableRowColumn>
              <TableRowColumn>Unemployed</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>3</TableRowColumn>
              <TableRowColumn>Stephanie Sanders</TableRowColumn>
              <TableRowColumn>Employed</TableRowColumn>
              <TableRowColumn>Employed</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>4</TableRowColumn>
              <TableRowColumn>Steve Brown</TableRowColumn>
              <TableRowColumn>Employed</TableRowColumn>
              <TableRowColumn>Employed</TableRowColumn>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
    );
  }
}


