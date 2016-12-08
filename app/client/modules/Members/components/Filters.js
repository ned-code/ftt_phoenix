import React, { Component } from 'react';

import { Paper, RaisedButton, Toggle, Toolbar, Subheader, ToolbarGroup, Avatar, IconButton, IconMenu, MenuItem } from 'material-ui';

export default class Filters extends Component {
  render () {
    return (
      <Paper zDepth={1} style={{ width: '300px' }}>
        <Toolbar style={{ width: '100%' }} >
          <ToolbarGroup firstChild={true}>
            <Subheader>Filter</Subheader>
          </ToolbarGroup>
        </Toolbar>
        <div style={{ textAlign: 'center' }}>
          <Toggle
            name="immidiateFamily"
            label="Imidiate Family"
            onToggle={()=>console.log('toggle')}
            defaultToggled={true}
          />
          <Toggle
            name="ancestors"
            label="Ancestors"
            onToggle={()=>console.log('toggle')}
            defaultToggled={true}
          />
          <Toggle
            name="aunst"
            label="Aunts/Uncles"
            onToggle={()=>console.log('toggle')}
            defaultToggled={true}
          />
          <Toggle
            name="cousins"
            label="Cousins"
            onToggle={()=>console.log('toggle')}
            defaultToggled={true}
          />
          <Toggle
            name="nephews"
            label="Nephews/Neices"
            onToggle={()=>console.log('toggle')}
            defaultToggled={true}
          />
          <Toggle
            name="relativeInLaw"
            label="Relative-in-Law"
            onToggle={()=>console.log('toggle')}
            defaultToggled={true}
          />
        </div>
        <div style={{ margin: '3px', textAlign: 'center' }}>
            <RaisedButton style={{ width: '90px' }} label="Male" disabled={false} />
            <RaisedButton style={{ width: '90px' }} label="Female" disabled={false} />
            <RaisedButton style={{ width: '90px' }} label="Both" disabled={true} />
        </div>
        <div style={{ margin: '3px', textAlign: 'center' }}>
            <RaisedButton style={{ width: '90px' }} label="Living" disabled={false} />
            <RaisedButton style={{ width: '90px' }} label="Deceased" disabled={false} />
            <RaisedButton style={{ width: '90px' }} label="Both" disabled={true} />
        </div>
        <div style={{ margin: '3px', textAlign: 'center' }}>
            <RaisedButton style={{ width: '90px' }} label="ANC" disabled={false} />
            <RaisedButton style={{ width: '90px' }} label="DES" disabled={false} />
            <RaisedButton style={{ width: '90px' }} label="Both" disabled={true} />
        </div>
        <div style={{ margin: '3px', textAlign: 'center' }}>
            <RaisedButton style={{ width: '90px' }} label="REG" disabled={false} />
            <RaisedButton style={{ width: '90px' }} label="UNREG" disabled={false} />
            <RaisedButton style={{ width: '90px' }} label="Both" disabled={true} />
        </div>
      </Paper> 
    );
  }
}


