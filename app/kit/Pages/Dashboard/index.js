import React, { Component } from 'react';
import Helmet from 'react-helmet';

export default class Dashboard extends Component {
  render () {
    return (
      <section data-page-name='Dashboard' >
        <Helmet
          title='Dashboard'
        />
        <h1> Dashboard </h1>
      </section>
    );
  }
}
