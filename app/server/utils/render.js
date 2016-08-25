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

        ${head ? head.title.toString() : ''}
        ${head ? head.meta.toString() : ''}

        <link href="http://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet">
        <link href='http://fonts.googleapis.com/css?family=Roboto:400,700,300' rel='stylesheet' type='text/css'>

        ${bundleCSS}
      </head>
      <body>
        <div id="root">${html ? html : ''}</div>
        <div>
          <script>
            if (typeof window !== 'undefined') {
              window.__INITIAL_STATE__ = ${JSON.stringify(initialState || {})};
            }
          </script>
          <script src="http://${domain}:${devPort}/dist/vendor.js"></script>
          <script src="http://${domain}:${devPort}/dist/main.js"></script>
        </div>
      </body>
    </html>
    `;
};
