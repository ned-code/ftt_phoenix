'use strict';
let path = require('path');
let webpack = require('webpack');
let CleanWebpackPlugin = require('clean-webpack-plugin'); 


let DIR = path.resolve(__dirname, '..');
let PUBLIC_DIR = path.join(DIR, 'public');
let DIST_DIR = path.join(DIR, 'dist');
let DIST_PUBLIC_DIR = path.join(DIST_DIR, 'public');

console.log(PUBLIC_DIR);

module.exports = {
    entry : {
        client : PUBLIC_DIR + '\\client.js' 
    },
    output : {
        path : DIST_PUBLIC_DIR, 
        filename : '[name].js',
        // publicPath: '/assets/'
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
      new CleanWebpackPlugin(['public'], {
        root: DIST_DIR,
        verbose: true, 
        dry: false
      })
    ]

};




