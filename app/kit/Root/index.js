import React, { Component, PropTypes } from 'react';

require('bootstrap-loader');

require('./root.scss');

import sidebar5 from '../Img/sidebar-5.jpg';

export default class Root extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  }
  render () {
    return (
      <div className='wrapper'>
        <div className='sidebar' data-color='purple' data-image={sidebar5}>
          <div className='sidebar-wrapper' >
            <div className='logo'>
                <a href='http://www.creative-tim.com' className='simple-text'> Creative Tim </a>
            </div>
            <ul className='nav'>
              <li className='active'>
                <a href='/light-bootstrap-dashboard/dashboard'>
                  <i className='pe-7s-graph'></i>
                  <p>Dashboard</p>
                </a>
              </li>
              <li>
                <a href='/light-bootstrap-dashboard/user'>
                  <i className='pe-7s-user'></i>
                  <p>User Profile</p>
                </a>
              </li>
              <li>
                <a href='/light-bootstrap-dashboard/table'>
                  <i className='pe-7s-note2'></i>
                  <p>Table List</p>
                </a>
              </li>
              <li>
                <a href='/light-bootstrap-dashboard/typography'>
                  <i className='pe-7s-news-paper'></i>
                  <p>Typography</p>
                </a>
              </li>
              <li>
                <a href='/light-bootstrap-dashboard/icons'>
                  <i className='pe-7s-science'></i>
                  <p>Icons</p>
                </a>
              </li>
              <li>
                <a href='/light-bootstrap-dashboard/maps'>
                  <i className='pe-7s-map-marker'></i>
                  <p>Maps</p>
                </a>
              </li>
              <li>
                <a href='/light-bootstrap-dashboard/notifications'>
                  <i className='pe-7s-bell'></i>
                  <p>Notifications</p>
                </a>
              </li>
              <li className='active active-pro'>
                <a href='/light-bootstrap-dashboard/upgrade'>
                  <i className='pe-7s-rocket'></i>
                  <p>Upgrade to PRO</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className='main-panel'>
          {
              React.Children.map(
                this.props.children,
                (element, idx) => {
                  return React.cloneElement(element, { ref: idx }); 
                }
              )  
          }
        </div>
      </div>
    );
  }
}
