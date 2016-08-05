import React, { Component } from 'react';
import Helmet from 'react-helmet';

export default class Home extends Component {
  render () {
    return (
      <section data-page-name='Home' >
        <Helmet
          title='Home'
        />
        <h1> Home </h1>
      </section>
    );
  }
}
