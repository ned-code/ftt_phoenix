import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const clientPath = path.join(__dirname, '../app/client');
const staticPath = path.join(__dirname, '../app/static');
const distPath = path.join(__dirname, '../dist');

export default {
  devtool: 'eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    path.join(clientPath, 'index.js')
  ],
  output: {
    filename: 'main.js',
    path: distPath
  },
  resolve: {
    alias: {
      Components: path.join(clientPath, 'component'),
      Containers: path.join(clientPath, 'containers'),
      Pages: path.join(clientPath, 'pages'),
      Routes: path.join(clientPath, 'routes'),
      DevTools: path.join(clientPath, 'devtools'),
      'redux/api': path.join(clientPath, 'redux/api'),
      'redux/store': path.join(clientPath, 'redux/middlewares'),
      'redux/middlewares': path.join(clientPath, 'redux/middlewares'),
      'redux/modules': path.join(clientPath, 'redux/modules')
    }
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: [ 'babel' ]
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.css$/,
        loader: 'style!css?modules!postcss'
      },
      { 
        test: /\.(png|jpg|jpeg|gif|woff)$/, 
        loader: 'url-loader?limit=8192' 
      } 
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      //favicon: '',
      inject: 'body',
      template: path.join(staticPath, 'index.html')
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor.js',
      minChunks: (module) => {
        return module.resource 
          && module.resource.indexOf('node_modules') !== -1
      },
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"development"'
      }
    }),
    new ExtractTextPlugin('styles.css')
  ],
}
