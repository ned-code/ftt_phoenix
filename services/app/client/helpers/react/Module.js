import React, { Component, PropTypes } from 'react';

import { Match } from 'react-router';

export default class Module extends Component {

  moduleRender () {
    return (null);
  }

  render () {
    const { pattern, exactly } = this.props;

    return (
      <Match 
        pattern={ pattern }
        exactly={ exactly }
        render={ this.moduleRender }
      />
    );
  }
}


