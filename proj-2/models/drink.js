module.exports = function(sequelize, DataTypes) {
  var Drinks = sequelize.define("Drinks", {
    Name: DataTypes.STRING,
    Category: DataTypes.STRING,
    Alcholic: DataTypes.BOOLEAN,
    Instructions: DataTypes.TEXT,
    Ingredients: DataTypes.STRING,
    Measurements: DataTypes.STRING
  });
  return Drinks;
};
