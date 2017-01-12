import React, { Component, PropTypes } from 'react';

import Module from 'Helpers/react/Module';

import Container from './containers';

import Table from './components/Table/index';
import Filters from './components/Filters';

import styles from './styles.css';


export default class Members extends Module {
  moduleRender = () => {
    return (
      <Container>
        <div className={styles.container}>
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


