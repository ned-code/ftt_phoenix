import fs from 'fs';
import path from 'path';

export const renderFullPage = (html, devPort, domain, initialState = null, head) => {

  // Add bundle.css for server side rendering and start:prod
  const bundleCSS = initialState !== null || process.env.NODE_ENV === 'production'
    ? `<link rel="stylesheet" type="text/css" href="http://${domain}:${devPort}/dist/bundle.css"></style>`
    : '';

  return `
    <!doctype html>
    <meta charset="utf-8">
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=1.0, minimum-scale=1.0, maximum-scale=1.0">

        <meta property="og:type" content="website" />
        <meta property="og:url" content=${head ? head : ''} />

        <!-- Fonts -->
        <link href="http://fonts.googleapis.com/css?family=Roboto+Condensed:300,400" rel="stylesheet" type="text/css">
        <link href="http://fonts.googleapis.com/css?family=Lato:300,400,700,900" rel="stylesheet" type="text/css">

        ${head ? head.title.toString() : ''}
        ${head ? head.meta.toString() : ''}

        ${bundleCSS}

        ${head ? head.title.toString() : ''}

      </head>
      <body class="flat-blue">

        <div id="root" class="app-container">${html ? html : ''}</div>

        <div>
          <script>
            window.__INITIAL_STATE__ = ${JSON.stringify(initialState || {})};
          </script>
          <script src="http://${domain}:${devPort}/dist/vendor.js"></script>
          <script src="http://${domain}:${devPort}/dist/main.js"></script>
        </div>
      </body>
    </html>
    `;
};
