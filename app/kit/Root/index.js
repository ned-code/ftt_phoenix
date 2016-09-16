import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

require('bootstrap-loader');

require('./root.scss');

import sidebar5 from '../Img/sidebar-5.jpg';

import {
  Header,
  Footer,
  Menu
} from 'Presentational';

@connect(
  state =>({
    routing: state.routing
  })
)
export default class Root extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  }
  render () {
    const { routing } = this.props;

    const pathname = routing.locationBeforeTransitions.pathname.slice(1);
    const title = pathname.charAt(0).toUpperCase() + pathname.slice(1);

    return (
      <div className='wrapper'>
        <div className='sidebar' data-color='purple' data-image={sidebar5}>
          <Menu />
        </div>
        <div className='main-panel'>
          <Header title={title} />
          <div className='content'>
          {
              React.Children.map(
                this.props.children,
                (element, idx) => {
                  return React.cloneElement(element, { ref: idx }); 
                }
              )  
          }
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}
