import React, { Component } from 'react';
import Helmet from 'react-helmet';

export default class List extends Component {
  render () {
    return (
      <section data-page-name='List' >
        <Helmet
          title='List'
        />
        <h1> List </h1>
      </section>
    );
  }
}
