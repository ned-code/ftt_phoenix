import React, { Component } from 'react';
import Helmet from 'react-helmet';

/* component styles */
require('./styles.scss');

export default class NotFound extends Component {
  render() {
    return (
      <section className="notfound">
        <Helmet
          title="NotFound"
        />
        <h1>404</h1>
      </section>
    );
  }
}
