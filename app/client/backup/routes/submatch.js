import React, { Component, PropTypes } from 'react';

import { BrowserRouter as Router, Match, Miss } from 'react-router';

export default class SubMatch extends Component {
  render () {
    return (
      <Match 
        {...this.props}
        render={
          () => this.props.children.map((match, i) => ( <match key={i} {...match.props} /> ))
        }
      />
    );
  }
}

