import React, { Component } from 'react';

import { browserHistory } from 'react-router';


/* material-ui */
import {
  Tabs,
  Tab
} from 'material-ui';

export default class MainTabs extends Component {

  loadUrl = (url) => browserHistory.push(`/${url}`);

  render () {
    return (
      <Tabs value={window.location.pathname.slice(1)}>
        <Tab label="Dashboard" value="dashboard"  onActive={()=>this.loadUrl("dashboard")} />
        <Tab label="Calendar" value="calendar" onActive={()=>this.loadUrl("calendar")} />
        <Tab label="Members" value="members" onActive={()=>this.loadUrl("members")} />
        <Tab label="Family" value="family" onActive={()=>this.loadUrl("family")} />
      </Tabs>
    );
  }
}




