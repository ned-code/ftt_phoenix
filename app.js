'use strict';
var express = require('express');
var reactViews = require('express-react-views');

var app = express();

app.set('views', __dirname + '/protected/views');
app.set('view engine', 'jsx');
app.engine('jsx', reactViews.createEngine());

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.render('index', { name : "Alexander" });
});

var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Dynamic react example listening on port ' + port);
});
