var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Drinks.findAll({}).then(function(dbDrinks) {
      res.render("index", {
        msg: "Welcome!",
        drinks: dbDrinks
      });
    });
  });

  // Load drinks page and pass in an drink by name
  app.get("/drink/:drinkName", function(req, res) {
    db.Drinks.findOne({ where: { drinkName: req.params.Name } }).then(function(dbDrinks) {
      res.render("drink", {
        drinks: dbDrinks
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
