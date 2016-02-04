'use strict';

let path = require('path');
let webpack = require('webpack');
let CleanWebpackPlugin = require('clean-webpack-plugin'); 

let _path = path.resolve(__dirname, '..');
let _outPath = path.join(_path, '/dist/public/'),

let _publicPath = path.resolve(_path, 'public')
let _entryPath = path.join(_publicPath, 'client.js');

module.exports = {
    entry : {
        client : _entryPath
    },
    output : {
        path : _outPath, 
        filename : '[name].js',
        publicPath: '/assets/'
    },
    loaders: [
        {
          test: /\.js$|\.jsx$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel', 
          query: {
            presets: ['react', 'es2015']
          }
        }
    ],
    plugins : [
      new CleanWebpackPlugin(['dist'], {
        root: _dirPath,
        verbose: true, 
        dry: false
      })
    ]
};




