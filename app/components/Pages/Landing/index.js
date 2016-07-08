import React, { Component } from 'react';
import Helmet from 'react-helmet';

/* component styles */
require('./styles.scss');

export default class Landing extends Component {
  render() {
    return (
      <section className="Landing">
        <Helmet
          title="Landing"
        />
        <h1>Landing</h1>
      </section>
    );
  }
}
