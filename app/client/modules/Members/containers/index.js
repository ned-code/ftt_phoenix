import React, { Component, PropTypes } from 'react';

import { connect } from 'react-redux';

import * as actions from '../actions';
import Container from 'Helpers/react/Container';

@connect(
  state => ({
    users: state.members.users 
  }), 
  actions 
)
export default class Main extends Container {
  static childContextTypes = {
    users: PropTypes.array
  }

  getChildContext () {
    return {
      users: this.props.users
    }
  }

  componentWillMount () {
    const { load } = this.props;

    load();
  }
}


