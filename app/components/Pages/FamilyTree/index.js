import React, { Component } from 'react';
import Helmet from 'react-helmet';

/* component styles */
require('./styles.scss');

export default class FamilyTree extends Component {
  render() {
    return (
      <section className="FamilyTree">
        <Helmet
          title="FamilyTree"
        />
        <h1>FamilyTree</h1>
      </section>
    );
  }
}
