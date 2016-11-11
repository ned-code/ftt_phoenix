import path from 'path';
import webpack from 'webpack';
import express from 'express';

import webpackConfig from '../../webpack/webpack.config.babel.js';

const app = express();

import httpProxy from 'http-proxy';
const targetUrl = 'http://localhost:4000';
const proxy = httpProxy.createProxyServer({
  target: targetUrl,
  ws: true
});

const compiler = webpack(webpackConfig);
app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath
}));
app.use(require('webpack-hot-middleware')(compiler));


// Proxy to API server
app.use('/api', (req, res) => {
  proxy.web(req, res, {target: targetUrl});
});

app.use('/ws', (req, res) => {
  proxy.web(req, res, {target: targetUrl + '/ws'});
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../dist/index.html'));
});

app.listen(3000, function(err) {
  if (err) {
    return console.error(err);
  }

  console.log('Listening at http://localhost:3000/');
})
