import React, { Component } from 'react';
import Helmet from 'react-helmet';

import LoginComponent from 'Components/Login';


export default class LoginPage extends Component {
  render () {
    return (
      <div className='container' data-page-name='login' >
        <Helmet
          title='Login'
        />
        <LoginComponent />
      </div>
    );
  }
}
