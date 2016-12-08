import React, { Component, PropTypes } from 'react';

import Module from 'Helpers/react/Module';

import Container from './containers';

import Table from './components/Table/index';
import Filters from './components/Filters';

require('./style.scss');

export default class Members extends Module {

  moduleRender = () => {
    return (
      <Container>
        <div className='members-container'>
          <div>
            <Table />
          </div>
          <div>
            <Filters />
          </div>
        </div>
      </Container>
    )
  }
}


