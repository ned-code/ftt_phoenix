'use strict';

let webpack = require('webpack');
let CleanWebpackPlugin = require('clean-webpack-plugin'); 

module.exports = {
    context : 'public/',
    entry : './entry.js',
    output : {
        path : 'dist/', 
        filename : 'bundle.js' 
    },
    loaders: [
        {
          test: /\.jsx?$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel', 
          query: {
            presets: ['react', 'es2015']
          }
        }
    ],
    plugins : [
      new CleanWebpackPlugin(['dist', 'build'], {
        root: __dirname + "\\..\\",
        verbose: true, 
        dry: false
      })
    ]
};




