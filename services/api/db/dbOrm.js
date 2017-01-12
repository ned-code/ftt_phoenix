var db = require('./db');

var bookshelf = require('bookshelf')(db);

bookshelf.Collection.prototype.toJsonMap = function (key) {
  var map = {};

  this.models.forEach(function (model) {
    map[model[key]] = model.toJSON();
  });

  return map;
};


module.exports = bookshelf;
