import React from 'react';
import ReactDom from 'react-dom';

export default class HelloMessage extends React.Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}


