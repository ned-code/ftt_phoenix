import React, { Component, PropTypes } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Helmet from 'react-helmet';
import R from 'ramda';

import * as actionCreators from 'redux/modules';

/* component styles */
require('./styles.scss');

@connect(
  ({ user }) => ({
    user
  }),
  dispatch => bindActionCreators({
    ...actionCreators.user,
  }, dispatch),
)
export default class Landing extends Component {
  static propTypes = {
    user: PropTypes.object,
  };
  componentDidMount() {
    const { apiGetUser, user } = this.props;

    if (!user.get('auth')) {
      apiGetUser();
    }
  }
  render() {
    const { user } = this.props;
    
    return (
      <section className="landing">
        <Helmet
          title="Landing"
        />
        <h1>Landing</h1>
      </section>
    );
  }
}
