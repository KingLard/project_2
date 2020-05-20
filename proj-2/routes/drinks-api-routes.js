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
    // Get all drinks
    app.get("/api/drinks", function(req, res) {
      db.Drinks.findAll({}).then(function(dbDrinks) {
        res.json(dbDrinks);
      });
    });
  
    // Create a new drink
    app.post("/api/drinks", function(req, res) {
      var drink = req.body;
      db.Drinks.create({
        Name: drink.Name,
        Category: drink.Category,
        Alcholic: drink.Alcholic,
        Instructions: drink.Instructions,
        Ingredients: drink.Ingredients,
        Measurements: drink.Measurements
      }).then(function(dbDrinks) {

        res.json(dbDrinks);
      });
      res.status(204);
    });
};