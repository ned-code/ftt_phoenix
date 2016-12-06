import React, { Component } from 'react';

import { connect } from 'react-redux';

@connect(
  state => ({ 
  }),
  { }
)
export default class MembersContainer extends Component {
  render () {
    return (
      <div>
        {
          React.Children.map(
            this.props.children,
            (element, idx) => {
              return React.cloneElement(element, { ref: idx });
            }
          )
        }
      </div>
    );
  }
}

