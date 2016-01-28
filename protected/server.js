'use strict';
let path = require('path');
let express = require('express');
let reactViews = require('express-react-views');

let app = express();
let port = process.env.PORT || 3000;

// views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jsx');

app.engine('jsx', reactViews.createEngine({}));

// static
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.render('html');
});

app.listen(port, function () {
  console.log('Dynamic react example listening on port ' + port);
});
