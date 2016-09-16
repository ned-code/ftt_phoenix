import React, { Component } from 'react';
import { IndexLink, Link } from 'react-router';

export default class Menu extends Component {
  render () {
    return (
      <div className='sidebar-wrapper' >
        <div className='logo'>
            <IndexLink to='/' className='simple-text'>FamilyTreeTop</IndexLink>
        </div>
        <ul className='nav'>
          <li>
            <Link activeClassName='active' to='/dashboard'>
              <i className='pe-7s-graph'></i>
              <p>Dashboard</p>
            </Link>
          </li>
          <li>
            <Link activeClassName='active'to='/user'>
              <i className='pe-7s-user'></i>
              <p>User Profile</p>
            </Link>
          </li>
          <li>
            <Link activeClassName='active'to='/list'>
              <i className='pe-7s-note2'></i>
              <p>Members List</p>
            </Link>
          </li>
          <li>
            <Link activeClassName='active'to='/tree'>
              <i className='pe-7s-science'></i>
              <p>Family Tree</p>
            </Link>
          </li>
          <li style={{display:'none'}}>
            <Link activeClassName='active'to='/notifications'>
              <i className='pe-7s-bell'></i>
              <p>Notifications</p>
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}
