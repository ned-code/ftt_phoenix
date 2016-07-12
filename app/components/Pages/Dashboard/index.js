import React, { Component } from 'react';
import Helmet from 'react-helmet';

import {
  Header,
  SideMenu,
  Cards
} from 'components/Containers';

export default class Dashboard extends Component {
  render() {
    return (
      <section className="row content-container">
        <Helmet
          title="Dashboard"
        />
        <Header />
        <SideMenu />
        <div className="container-fluid">
          <div className="side-body padding-top">
            <Cards />
          </div>
        </div>
      </section>
    );
  }
}
