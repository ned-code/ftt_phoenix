'use strict';

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var port = process.env.PORT || 3000;
//import Router from './src/Router';

app.use(_express2.default.static(_path2.default.resolve(_path2.default.resolve(__dirname, '..'), '/public')));

//app.use(Router);
//
app.use('*', function (req, res, next) {
  res.sendStatus(200);
});

app.listen(port, function () {
  console.log(' listening on port ' + port);
});
