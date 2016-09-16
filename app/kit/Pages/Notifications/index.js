import React, { Component } from 'react';
import Helmet from 'react-helmet';

export default class Notifications extends Component {
  render () {
    return (
      <section data-page-name='Notifications' >
        <Helmet
          title='Notifications'
        />
        <h1> Notifications </h1>
      </section>
    );
  }
}
