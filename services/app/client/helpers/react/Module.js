import React, { Component, PropTypes } from 'react';

import { Match } from 'react-router';

export default class Module extends Component {

  static propTypes = {
    children: PropTypes.any,
    pattern: PropTypes.string,
    exactly: PropTypes.bool
  };

  find (name) {
    let component = (<div name={name} />);
    if(!this.props.children) return component;

    if(Array.isArray(this.props.children)){
      this.props.children.map(child => {
        if(!component && child.props.name === name){
          component = child;
        }
      });
    } else {
      let child = this.props.children;
      if(child.props.name === name) {
        component = child;
      }
    }
    return component;
  }

  getChild (name, props) {
    const child = this.find(name);
    if(!child){
      console.warn('Module <'+name+'> not found!'); // eslint-disable-line
    }

    return (args) => React.cloneElement(child, { ...props, ...args });
  }

  moduleRender () {
    return (<div>{ this.props.children }</div>);
  }

  render () {
    const { pattern, exactly } = this.props;

    if (!pattern) {
      return this.moduleRender();
    }

    return (
      <Match 
        pattern={ pattern }
        exactly={ !!exactly }
        render={ this.moduleRender.bind(this) }
      />
    );
  }
}


