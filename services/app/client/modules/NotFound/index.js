import React, { Component, PropTypes } from 'react';

import { Miss } from 'react-router';

export default class NotFound extends Component {
  render () {
    return (
      <Miss 
        render={
          () => (<div>NotFound</div>) 
        } 
      />
    );
  }
}


