import React, { Component } from 'react';

import { Redirect } from 'react-router';


/* material-ui */
import {
  Tabs,
  Tab
} from 'material-ui';

export default class MaterialTabs extends Component {

  loadUrl = (url) => {
  }

  render () {
    let pathname = window.location.pathname.split('v1/')[1];
    if(!pathname || pathname.length == 0 || pathname === 'home'){
      pathname = 'dashboard';
    };

    return (
      <Tabs value={pathname}>
        <Tab label="Dashboard" value="dashboard"  onActive={()=>this.loadUrl("dashboard")} />
        <Tab label="Calendar" value="calendar" onActive={()=>this.loadUrl("calendar")} />
        <Tab label="Members" value="members" onActive={()=>this.loadUrl("members")} />
        <Tab label="Family" value="family" onActive={()=>this.loadUrl("family")} />
      </Tabs>
    );
  }
}




