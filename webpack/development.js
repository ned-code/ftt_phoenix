import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const clientPath = path.join(__dirname, '../app/client');
const staticPath = path.join(__dirname, '../app/static');
const distPath = path.join(__dirname, '../dist');

export default {
  devtool: 'source-map',
  entry: [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client',
    path.join(clientPath, 'index.js')
  ],
  output: {
    path: distPath,
    publicPath: distPath,
    filename: '[name].js',
    chunkFilename: '[name].[hash].chunk.js'
  },
  resolve: {
    extensions: ['', '.jsx', '.js', '.json', '.scss' ],
    modulesDirectories: [ 'node_modules' ],
    alias: {
      Components: path.join(clientPath, 'components'),
      Presentational: path.join(clientPath, 'presentational'),
      Containers: path.join(clientPath, 'containers'),
      Pages: path.join(clientPath, 'pages'),
      Routes: path.join(clientPath, 'routes'),
      DevTools: path.join(clientPath, 'devtools'),
      Static: staticPath, 
      'redux/store': path.join(clientPath, 'redux/store'),
      'redux/middlewares': path.join(clientPath, 'redux/middlewares'),
      'redux/utils': path.join(clientPath, 'redux/utils'),
      'redux/modules': path.join(clientPath, 'redux/modules')
    }
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: [ 'babel-loader' ]
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      },
      { 
        test: /\.(png|jpg|jpeg|gif|svg|woff)$/, 
        loader: 'url-loader?limit=8192' 
      } 
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),

    new HtmlWebpackPlugin({
      devServer: 'http://localhost:3000',
      inject: 'body',
      template: path.join(staticPath, 'index.html'),
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: (module) => {
        return module.resource 
          && module.resource.indexOf('node_modules') !== -1
      },
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"development"'
      }
    })
  ],
}
