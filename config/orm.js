var connection = require("./connection.js");

var orm = {
  selectAll: function(cb) {
    var queryString = "SELECT * FROM burgers where devoured = 0";
    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  insertOne: function(value, cb) {
    var queryString = "INSERT INTO burgers (burger_name) VALUES (?)";

    console.log(queryString);

    connection.query(queryString, [value], function(err, result) {
      if (err) throw err;
      console.log(result);
      cb(result);
    });
  },
  updateOne: function(id, cb) {
    var queryString = "UPDATE burgers SET devoured = 1 where id = ?";

    console.log(queryString);

    connection.query(queryString, [id], function(err, result) {
      if (err) throw err;
      console.log(result);
      cb(result);
    });
  }
};

module.exports = orm;
