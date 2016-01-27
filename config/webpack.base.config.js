'use strict';

let webpack = require('webpack');


module.exports = {
    context : 'public/',
    entry : './entry.js',
    output : {
        path : 'dist/', 
        filename : 'bundle.js' 
    }
};


