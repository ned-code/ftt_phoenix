import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import { asyncConnect } from 'redux-async-connect';

import { 
  load as AppLoad
} from '../../redux/reducer/App/actions';

@asyncConnect([{
  user: (params, helpers) => Promise.resolve({})
}])

export class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { user } = this.props;
    console.log(user);
    return false 
  }
}
