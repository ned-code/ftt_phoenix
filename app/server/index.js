import path from 'path';
import express from 'express';

const app = express();

import httpProxy from 'http-proxy';

const targetUrl = 'http://localhost:4000';
const proxy = httpProxy.createProxyServer({
  target: targetUrl,
  ws: true
});

const env = process.env.NODE_ENV || 'development';

import webpackConfig from '../../webpack/webpack.config.babel.js';
import webpack from 'webpack';

const compiler = webpack(webpackConfig);

if (env === 'development') {
  app.use(require('webpack-dev-middleware')(compiler, {
    publicPath: webpackConfig.output.publicPath,
    historyApiFallback: true
  }));
  app.use(require('webpack-hot-middleware')(compiler));
};

// Proxy to API server
app.use('/api', (req, res) => {
  proxy.web(req, res, {target: targetUrl});
});

app.use('/ws', (req, res) => {
  proxy.web(req, res, { target: targetUrl + '/ws' });
});

// Render
app.get('*', (req, res) => {
  var filename = path.join(compiler.outputPath, 'index.html');

  compiler.outputFileSystem.readFile(filename, function(err, result){
    if (err) {
      return next(err);
    }
    res.set('content-type','text/html');
    res.send(result);
    res.end();
  });
});

app.listen(3000, function(err) {
  if (err) {
    return console.error(err);
  }

  console.log('Listening at http://localhost:3000/');
})
