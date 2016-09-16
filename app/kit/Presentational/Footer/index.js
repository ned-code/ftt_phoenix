import React, { Component } from 'react';
import { IndexLink, Link } from 'react-router';

export default class Footer extends Component {
  render () {
    return (
      <footer className='footer'>
        <div className='container-fluid'>
          <nav className='pull-left'>
            <ul>
              <li>
                <IndexLink to='/' >Home</IndexLink>
              </li>
              <li>
                <Link to='/blog' >Blog</Link>
              </li>
            </ul>
          </nav>
          <p className='copyright pull-right'>
              © 2016 <a href='http://www.familytreetop.com'>FamilyTreeTop</a>
          </p>
        </div>
        </footer>
    );
  }
}
