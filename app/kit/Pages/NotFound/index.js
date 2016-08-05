import React, { Component } from 'react';
import Helmet from 'react-helmet';

export default class NotFoundPage extends Component {
  render () {
    return (
      <section data-page-name='404'>
        <Helmet
          title='NotFound'
        />
        <h1>404</h1>
      </section>
    );
  }
}
