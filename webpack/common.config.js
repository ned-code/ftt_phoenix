const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const merge = require('webpack-merge');

const development = require('./dev.config.js');
const production = require('./prod.config.js');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const path = require('path');

const TARGET = process.env.npm_lifecycle_event;
process.env.BABEL_ENV = TARGET;

var devUrl;

// location dist for dev and prod
if (process.env.NODE_ENV === 'development') {
  devUrl = 'http://localhost:5000/dist/';
}

if (process.env.NODE_ENV === 'production') {
  devUrl = '/dist/';
}

const common = {
  eslint: {
    configFile: '.eslintrc.prod'
  },
  output: {
    path: __dirname + '/../dist/',
    publicPath: devUrl,
    filename: '[name].js',
    chunkFilename: '[name].[hash].chunk.js'
  },

  resolve: {
    extensions: ['', '.jsx', '.js', '.json', '.scss'],
    modulesDirectories: ['node_modules'],
    alias: {
      test: path.join(__dirname, '../app/test/'),
      constants: path.join(__dirname, '../app/constants/'),
      'redux/modules': path.join(__dirname, '../app/redux/modules/'),
      'redux/store': path.join(__dirname, '../app/redux/store/'),
      'redux/api': path.join(__dirname, '../app/redux/api/'),
      'redux/utils': path.join(__dirname, '../app/redux/utils/'),
      devtools: path.join(__dirname, '../app/devtools/'),
      decorators: path.join(__dirname, '../app/decorators/'),
      Img: path.join(__dirname, '../app/kit/Img'),
      Root: path.join(__dirname, '../app/kit/Root'),
      Pages: path.join(__dirname, '../app/kit/Pages'),
      Containers:path.join(__dirname, '../app/kit/Containers'),
      Presentational:path.join(__dirname, '../app/kit/Presentational'),
      Modules:path.join(__dirname, '../app/kit/Modules'),
    },
  },

  module: {
    loaders: [{
      test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=10000&mimetype=application/font-woff',
    }, {
      test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=10000&mimetype=application/font-woff2',
    }, {
      test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=10000&mimetype=application/octet-stream',
    }, {
      test: /\.otf(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=10000&mimetype=application/font-otf',
    }, {
      test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'file',
    }, {
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=10000&mimetype=image/svg+xml',
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    }, {
      test: /\.png$/,
      loader: 'file?name=[hash].[name].[ext]',
    }, {
      test: /\.jpg$/,
      loader: 'file?name=[hash].[name].[ext]',
    }, {
      test: /\.gif$/,
      loader: 'file?name=[hash].[name].[ext]',
    }, {
      test: /packery/,
      loader: 'imports?define=>false&this=>window',
    },
    // Bootstrap 3 
    { test:/bootstrap-sass[\/\\]assets[\/\\]javascripts[\/\\]/, loader: 'imports?jQuery=jquery' },
    ],
  },

  externals: { },
  plugins: [
    // generate bundle.css for server-side-rendering
    new ExtractTextPlugin('bundle.css'),
    // define global constants
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: process.env.NODE_ENV === 'development' ? '"development"' : '"production"',
      },
      __DEVELOPMENT__: process.env.NODE_ENV === 'development',
      __PRODUCTION__: process.env.NODE_ENV === 'production',
      __DEVTOOLS__: process.env.NODE_ENV === 'development'
    }),

    // chunks for generate vendor bundle
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: (module) => {
        return module.resource && module.resource.indexOf('node_modules') !== -1
      },
    })
  ],
  postcss: (wp) => {
    return [
      autoprefixer({
        browsers: ['last 2 versions'],
      }),
    ];
  },
};


//common.plugins.splice(0,0, new CleanWebpackPlugin(['dist'], { root: process.cwd() }));
if (process.env.NODE_ENV === 'development') {
  module.exports = merge(development, common);
};

if (process.env.NODE_ENV === 'production') {
  module.exports = merge(production, common);
};
