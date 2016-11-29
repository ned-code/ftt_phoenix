import React, { Component } from 'react';

import MembersTable from 'Components/MembersTable';
import MembersFilters from 'Components/MembersFilters';

require('./style.scss');

export default class Members extends Component {
  render () {
    return (
      <div className='members-container'>
        { /* newsFeed */ }
        <div>
          <MembersTable />
        </div>

        { /* Photos && Lieks */ }
        <div>
          <MembersFilters />
        </div>
      </div>
    );
  }
}



