import React, {Component, PropTypes} from 'react';
import { renderToString } from 'react-dom/server';
import serialize from 'serialize-javascript';

export default class Html extends Component {
  static propTypes = {
    html: PropTypes.node,
    store: PropTypes.object
  };

  render() {
    const {html, store} = this.props;
    const content = html ? renderToString(html) : '';

    console.log(content);

    return (
      <html lang="en-us">
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </head>
        <body>
          <div id="content" dangerouslySetInnerHTML={{__html: content}}/>
          <script dangerouslySetInnerHTML={{__html: `window.__data=${serialize(store.getState())};`}} charSet="UTF-8"/>
        </body>
      </html>
    );
  }
}

