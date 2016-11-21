import React, { Component } from 'react';

import Messages from 'Components/Messages';
import MembersGrid from 'Components/MembersGrid';

export default class Dashboard extends Component {
  render () {
    return ( 
      <div>
      <Messages /> 
      <MembersGrid /> 
      </div>
    );
  }
}


