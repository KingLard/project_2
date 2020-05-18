var db = require("../models");
var axios = require("axios");

axios.get('https://www.thecocktaildb.com/api/json/v2/9973533/popular.php')
.then(response => {
  console.log(response.data);
  })
.catch(error => {
  console.log(error);
})
// https://www.thecocktaildb.com/api/jsonv2/9973533/popular.php
// https://www.thecocktaildb.com/api/json/v2/9973533/list.php?c=list

module.exports = function(app) {
    // Get all examples
    app.get("/api/drinks", function(req, res) {
      db.Drinks.findAll({}).then(function(dbDrinks) {
        res.json(dbDrinks);
      });
    });
  
    // Create a new example
    app.post("/api/drinks", function(req, res) {
      db.Drinks.create(req.body).then(function(dbDrinks) {
        res.json(dbDrinks);
      });
    });
};