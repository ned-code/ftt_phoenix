'use strict';
import React from 'react';
import ReactDom from 'react-dom';

export default class Html extends React.Component {
    render(){
      return <html>
        <head>
          <title>Universal React + Redux Boilerplate</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          {this.props.css.map((css, i) => (<link key={i} rel="stylesheet" href={css} />))}
        </head>
        <body>
          <div id="app" dangerouslySetInnerHTML={getAppMarkup()} />
          <script dangerouslySetInnerHTML={getAppState()} />
          {this.props.js.map((js, i) => (<script key={i} src={js}></script>))}
        </body>
      </html>;
    }
}

/*
var React = require('react');

var Html = React.createClass({    
    getAppMarkup : function(){
      return {__html: this.props.markup};
    },
    getAppState : function(){
      let json = JSON.stringify(this.props.state).replace('</', '<\\/');
      return {__html: `window.__INITIAL_STATE__=${json}`};
    },
    render : function(){
      return <html>
        <head>
          <title>Universal React + Redux Boilerplate</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          {this.props.css.map((css, i) => (<link key={i} rel="stylesheet" href={css} />))}
        </head>
        <body>
          <div id="app" dangerouslySetInnerHTML={getAppMarkup()} />
          <script dangerouslySetInnerHTML={getAppState()} />
          {this.props.js.map((js, i) => (<script key={i} src={js}></script>))}
        </body>
      </html>;
    }
});

module.exports = Html;
*/
