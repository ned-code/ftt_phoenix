import React, { Component, PropTypes } from 'react';

import { connect } from 'react-redux';

import * as actions from '../actions';

@connect(
  state => ({
    users: state.members.users 
  }), 
  actions 
)
export default class Main extends Component {
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


