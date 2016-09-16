import React, { Component } from 'react';
import Helmet from 'react-helmet';

export default class User extends Component {
  render () {
    return (
      <section data-page-name='User' >
        <Helmet
          title='User'
        />
        <h1> User </h1>
      </section>
    );
  }
}
