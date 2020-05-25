var db = require("../models");
var axios = require("axios");

module.exports = function(app) {
  axios.get('https://www.thecocktaildb.com/api/json/v2/9973533/popular.php')
  .then(response => {
    console.log(response.data);
  var names = [];
  var categories = [];
  var alcoholic = [];
  var instructions = [];
  var ingredients = [];
  var measurements = [];
  var images = [];
  
  for(i = 0; i < 6; i ++) {

    // Create a new drink
    app.post("/api/drinks", function(req, res) {
      var drink = req.body;
      db.Drinks.create({
        Name: drink.Name,
        Category: drink.Category,
        Alcoholic: drink.Alcoholic,
        Instructions: drink.Instructions,
        Ingredients: drink.Ingredients,
        Measurements: drink.Measurements,
        Images: drink.Images
          }).then(function(dbDrinks) {
            res.json(dbDrinks);
          });
          res.status(204);
        });

    names.push(response.data.drinks[i].strDrink)
    categories.push(response.data.drinks[i].strCategory)
    alcoholic.push(response.data.drinks[i].strAlcoholic)
    instructions.push(response.data.drinks[i].strInstructions)
    images.push(response.data.drinks[i].strDrinkThumb)

  function makeArray(obj){
  var result = Object.keys(obj).map(function (key) { 
  return [key, obj[key]]; 
  });
  return result;
  }
  function isTrue(property){
    if(property[1]!==null){
      return true
    }
  }
var newArray = makeArray(response.data.drinks[i]).filter(isTrue);

// console.log(newArray);
for (y=0; y < newArray.length; y++){
  if (newArray[y][0].includes("Ingredient")){
    ingredients.push(newArray[y][1])
  }
  else if (newArray[y][0].includes("Measure")){
    measurements.push(newArray[y][1])
  }
}
  } 
  console.log(names);
  console.log(alcoholic);
  console.log(instructions);
  console.log(ingredients);
  console.log(measurements);
  console.log(images);
})
.catch(error => {
  console.log(error);
})
    // Get all drinks
    app.get("/api/drinks", function(req, res) {
      db.Drinks.findAll({}).then(function(dbDrinks) {
        res.json(dbDrinks);
      });
    });
};


// Lookup by name
// https://www.thecocktaildb.com/api/json/v2/9973533/search.php?s= + name

// Search ingredient by name
// https://www.thecocktaildb.com/api/json/v2/9973533/search.php?i= + ingredient

// Search by ingredient
// https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=Gin

// Filter by alcoholic
// https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?a=Alcoholic

// Filter by Category
// https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?c=Ordinary_Drink

// Lookup a random cocktail
// https://www.thecocktaildb.com/api/json/v2/9973533/random.php

// Lookup a selection of 10 random cocktails (only available to $2+ Patreon supporters)
// https://www.thecocktaildb.com/api/json/v2/9973533/randomselection.php

// List Popular cocktails (only available to $2+ Patreon supporters)
// https://www.thecocktaildb.com/api/json/v2/9973533/popular.php

// List most latest cocktails (only available to $2+ Patreon supporters)
// https://www.thecocktaildb.com/api/json/v2/9973533/latest.php

// Filter by Glass
// https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?g=Cocktail_glass
