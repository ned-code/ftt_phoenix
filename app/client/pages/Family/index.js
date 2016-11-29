import React, { Component } from 'react';

import FamilyTree from 'Components/FamilyTree';

require('./style.scss');

export default class Family extends Component {
  render () {
    return (
      <div className="family-container">
        <FamilyTree />
      </div>
    );
  }
}



