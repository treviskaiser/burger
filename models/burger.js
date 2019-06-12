var orm = require("../config/orm");

var burgers = {
  selectAll: function(cb) {
    orm.selectAll(function(res) {
      cb(res);
    });
  },
  insertOne: function(value, cb) {
    orm.insertOne(value, function(res) {
      console.log("Insert" + res);
      cb(res);
    });
  },
  updateOne: function(id, cb) {
    orm.updateOne(id, function(res) {
      console.log(res);
      cb(res);
    });
  }
};

module.exports = burgers;
