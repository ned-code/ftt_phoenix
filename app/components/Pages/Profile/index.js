import React, { Component } from 'react';
import Helmet from 'react-helmet';

/* component styles */
require('./styles.scss');

export default class Profile extends Component {
  render() {
    return (
      <section className="Profile">
        <Helmet
          title="Profile"
        />
        <h1>Profile</h1>
      </section>
    );
  }
}
