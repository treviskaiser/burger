var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    console.log({ data });
    res.render("index", { burgers: data });
  });
});

router.post("/api/burgers", function(req, res) {
  console.log(req.body.burger_name);
  burger.insertOne([req.body.burger_name], function(result) {
    // Send back the ID of the new quote
    console.log("8888" + result);
    res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", function(req, res) {
  var id = req.params.id;
  console.log("id", id);

  burger.updateOne(id, function(result) {
    res.json({ result });
  });
});

// router.delete("/api/cats/:id", function(req, res) {
//   var condition = "id = " + req.params.id;

//   cat.delete(condition, function(result) {
//     if (result.affectedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });

// Export routes for server.js to use.
module.exports = router;
