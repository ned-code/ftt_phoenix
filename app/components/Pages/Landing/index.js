import React, { Component, PropTypes } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { asyncConnect } from 'redux-async-connect'

import Helmet from 'react-helmet';
import R from 'ramda';

import * as actionCreators from 'redux/modules';

/* component styles */
require('./styles.scss');

@asyncConnect([{
  promise: ({store:{dispatch, getState}}) => {
    const promises = [];
    return Promise.all(promises);
  } 
}])

@connect(
  state =>({
    user : state.user
  })
)
export default class Landing extends Component {
  static propTypes = {
    user: PropTypes.object,
  };
  render() {
    const { user } = this.props;
    
    return (
      <section className="landing">
        <Helmet
          title="Landing"
        />
        <h1>Landing</h1>
        <div>
          
        </div>
      </section>
    );
  }
}
