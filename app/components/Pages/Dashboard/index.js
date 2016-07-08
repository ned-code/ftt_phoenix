import React, { Component } from 'react';
import Helmet from 'react-helmet';

/* component styles */
require('./styles.scss');

export default class Dashboard extends Component {
  render() {
    return (
      <section className="Dashboard">
        <Helmet
          title="Dashboard"
        />
        <h1>Dashboard</h1>
      </section>
    );
  }
}
