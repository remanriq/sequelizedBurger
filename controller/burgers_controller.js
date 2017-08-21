var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var db = require("../models");

// Create all our routes and set up logic within those routes where required.

router.get('/', function(req, res){
  res.redirect('/burgers');
}); 

router.get("/burgers", function(req, res) {
 db.burgers.findAll({
   order: [
     ["burger_name","ASC"]
   ]
 }).then(function(allburgers){

   var hbsObject = {
     burgers: allburgers
   };
   res.render("index", hbsObject);
 });
}); 

router.post("/insertOne", function(req, res) {
   return db.burgers.create({
   burger_name: req.body.burger_name
 }).then(function() {
   res.redirect("/burgers");
 });
});

router.put("/update", function(req, res) {
db.burgers.update({
   where: {
     id: req.params.devoured
   }
 }).then(function() {
   res.redirect("/burgers");
 });
});






module.exports = router;