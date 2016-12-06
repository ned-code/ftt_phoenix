import React, { Component, PropTypes } from 'react';

import { Divider, IconButton, IconMenu, MenuItem } from 'material-ui';
import { TableRow, TableRowColumn } from 'material-ui/Table';

import IconNavigationMoreVert from 'material-ui/svg-icons/navigation/more-vert'

import DateTime from 'Presentational/DateTime';

export default class Row extends Component {
  static propTypes = {
    relation: PropTypes.string,
    name: PropTypes.string,
    birth: PropTypes.instanceOf(Date),
    birthplace: PropTypes.string,
    onEdit: PropTypes.func,
    onAddParent: PropTypes.func,
    onAddSpouse: PropTypes.func,
    onAddChild: PropTypes.func,
    onDelete: PropTypes.func
  };

  render () {
    const { relation, name, birth, birthplace, onEdit, onAddParent, onAddSpouse, onAddChild, onDelete  } = this.props;
    return (
      <TableRow>
        <TableRowColumn> { relation } </TableRowColumn>
        <TableRowColumn> { name } </TableRowColumn>
        <TableRowColumn><DateTime>{ birth }</DateTime></TableRowColumn>
        <TableRowColumn> { birthplace } </TableRowColumn>
        <TableRowColumn>
          <IconMenu
            iconButtonElement={<IconButton><IconNavigationMoreVert /></IconButton>}
            anchorOrigin={{horizontal: 'right', vertical: 'top'}}
            targetOrigin={{horizontal: 'right', vertical: 'top'}}
          >
            <MenuItem onTouchTap={onEdit} primaryText="Edit" />
            <MenuItem onTouchTap={onAddParent} primaryText="Add Parent" />
            <MenuItem onTouchTap={onAddSpouse} primaryText="Add Spouse" />
            <MenuItem onTouchTap={onAddChild} primaryText="Add Child" />
            <Divider />
            <MenuItem onTouchTap={onDelete} primaryText="Delete" />
          </IconMenu>
        </TableRowColumn>
      </TableRow>
    );
  }
}


