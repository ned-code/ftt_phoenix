import React, { Component } from 'react';
import Helmet from 'react-helmet';

export default class Tree extends Component {
  render () {
    return (
      <section data-page-name='Tree' >
        <Helmet
          title='Tree'
        />
        <h1> Tree </h1>
      </section>
    );
  }
}
