import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import { App, LoginForm } from './containers'

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles.css';

ReactDOM.render((
      <Router history={browserHistory}>
        <Route path="/" component={App}/>
        <Route path="/login" component={LoginForm}/>
      </Router>
      ), document.getElementById('container'));

