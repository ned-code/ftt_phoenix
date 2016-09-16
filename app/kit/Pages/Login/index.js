import React, { Component } from 'react';
import Helmet from 'react-helmet';

import {
  Login 
} from 'Presentational';


export default class LoginPage extends Component {
  render () {
    return (
      <div className='container' data-page-name='login' >
        <Helmet
          title='Login'
        />
        <Login />
      </div>
    );
  }
}
