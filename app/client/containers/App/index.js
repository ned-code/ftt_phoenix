import React, { Component } from 'react';

require('Containers/App/style.scss');

export default class App extends Component {
  render () {
    console.log('app render');
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

