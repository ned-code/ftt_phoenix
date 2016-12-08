import React, { Component, PropTypes } from 'react';

import { Match } from 'react-router';

export default class Module extends Component {

  static contextTypes = {
    router: PropTypes.object.isRequired
  }

  moduleRender () {
    return (null);
  }

  render (props) {
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


