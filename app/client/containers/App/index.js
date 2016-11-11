import React, { Component } from 'react';

export default class App extends Component {
  render () {
    return (
      <div className="wrapper">
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

