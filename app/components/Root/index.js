import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';

require('./scss/app.scss');

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
      <footer className="app-footer">
        <div className="wrapper">
          <span className="pull-right">2.1 <a href="#"><i className="fa fa-long-arrow-up"></i></a></span> © 2015 Copyright.
        </div>
      </footer>
    </div>
    );
  }
}
