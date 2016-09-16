import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Header extends Component {
  render () {
    const { title } = this.props;
    return (
      <nav className='navbar navbar-default navbar-fixed'>
        <div className='container-fluid'>
          <div className='navbar-header'>
            <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='#navigation'>
              <span className='sr-only'>Toggle navigation</span>
              <span className='icon-bar'></span>
              <span className='icon-bar'></span>
              <span className='icon-bar'></span>
            </button>
            <a className='navbar-brand' href='#'>{title}</a>
          </div>
          <div className='collapse navbar-collapse'>
            <ul className='nav navbar-nav navbar-right'>
              <li className='dropdown' style={{display:'none'}}>
                <a href='#' className='dropdown-toggle' data-toggle='dropdown'>
                  Notifications 
                  <b className='caret'></b>
                </a>
                <ul className='dropdown-menu'>
                  <li><a href='#'>Action</a></li>
                  <li><a href='#'>Another action</a></li>
                  <li><a href='#'>Something</a></li>
                  <li><a href='#'>Another action</a></li>
                  <li><a href='#'>Something</a></li>
                  <li className='divider'></li>
                  <li><a href='#'>Separated link</a></li>
                </ul>
              </li>
              <li>
                <Link to='/user/logout'>
                  Log out
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
