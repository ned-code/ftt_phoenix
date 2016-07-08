import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';

require('./styles/app.scss');

//import { Header, Footer, LeftMenu } from 'components/containers';

export default class Root extends Component {
  /*
  static propTypes = {
    location: PropTypes.object,
    children: PropTypes.object,
    params: PropTypes.object,
    history: PropTypes.object,
  };
  */
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
