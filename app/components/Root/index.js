import React, { Component, PropTypes } from 'react';

export default class Root extends Component {
  static propTypes = {
    children: PropTypes.array.isRequired
  }
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
