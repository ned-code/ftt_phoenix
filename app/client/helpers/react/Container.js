import React, { Component, PropTypes } from 'react';

export default class Container extends Component {
  render () {
    return (
      <div>
        {
          React.Children.map(
            this.props.children,
            (element, idx) => React.cloneElement(
              element, 
              {
                ref: idx
              }
            )
          )
        }
      </div>
    );
  }
}


