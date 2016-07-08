import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';

require('./scss/style.scss');
require('./scss/themes/flat-blue.scss');

export default class Root extends Component {
  componentDidMount() { }
  componentDidUpdate(prevProps) { }
  render() {
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
