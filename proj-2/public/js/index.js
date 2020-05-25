// // Get references to page elements
// var $exampleText = $("#example-text");
// var $exampleDescription = $("#example-description");
// var $submitBtn = $("#submit");
// var $exampleList = $("#example-list");
// // The API object contains methods for each kind of request we'll make
// var API = {
//   saveExample: function(example) {
//     return $.ajax({
//       headers: {
//         "Content-Type": "application/json"
//       },
//       type: "POST",
//       url: "api/examples",
//       data: JSON.stringify(example)
//     });
//   },
//   getExamples: function() {
//     return $.ajax({
//       url: "api/examples",
//       type: "GET"
//     });
//   },
//   deleteExample: function(id) {
//     return $.ajax({
//       url: "api/examples/" + id,
//       type: "DELETE"
//     });
//   }
// };
// // refreshExamples gets new examples from the db and repopulates the list
// var refreshExamples = function() {
//   API.getExamples().then(function(data) {
//     var $examples = data.map(function(example) {
//       var $a = $("<a>")
//         .text(example.text)
//         .attr("href", "/example/" + example.id);
//       var $li = $("<li>")
//         .attr({
//           class: "list-group-item",
//           "data-id": example.id
//         })
//         .append($a);
//       var $button = $("<button>")
//         .addClass("btn btn-danger float-right delete")
//         .text("ｘ");
//       $li.append($button);
//       return $li;
//     });
//     $exampleList.empty();
//     $exampleList.append($examples);
//   });
// };
// // handleFormSubmit is called whenever we submit a new example
// // Save the new example to the db and refresh the list
// var handleFormSubmit = function(event) {
//   event.preventDefault();
//   var example = {
//     text: $exampleText.val().trim(),
//     description: $exampleDescription.val().trim()
//   };
//   if (!(example.text && example.description)) {
//     alert("You must enter an example text and description!");
//     return;
//   }
//   API.saveExample(example).then(function() {
//     refreshExamples();
//   });
//   $exampleText.val("");
//   $exampleDescription.val("");
// };
// // handleDeleteBtnClick is called when an example's delete button is clicked
// // Remove the example from the db and refresh the list
// var handleDeleteBtnClick = function() {
//   var idToDelete = $(this)
//     .parent()
//     .attr("data-id");
//   API.deleteExample(idToDelete).then(function() {
//     refreshExamples();
//   });
// };
// // Add event listeners to the submit and delete buttons
// $submitBtn.on("click", handleFormSubmit);
// $exampleList.on("click", ".delete", handleDeleteBtnClick);

//
//
//
//
//
//
var $drinkName = $("#drinkName");
var $drinkCategory = $("#drinkCategory").val();
var $drinkAlcoholic = $("#drinkAlcoholic").val();
var $drinkInstructions = $("#drinkInstructions");
var $drinkIngredients = $("#drinkIngredients");
var $drinkMeasurements = $("#drinkMeasurements");
var $drinkImages = $("#drinkImages");
var $drinkList = $("#drink-list");
var $submitBtn = $("#submit");

var drinkAPI = {
  saveDrink: function(drink) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/drinks",
      data: JSON.stringify(drink)
    });
  },
  getDrink: function() {
    return $.ajax({
      url: "api/drinks",
      type: "GET"
    });
  },
  deleteDrink: function(id) {
    return $.ajax({
      url: "api/drinks/" + id,
      type: "DELETE"
    });
  }
};
// refreshExamples gets new examples from the db and repopulates the list
var refreshDrinks = function() {
  drinkAPI.getDrinks().then(function(data) {
    var $drinks = data.map(function(drink) {
      var $a = $("<a>")
        .text(drink.text)
        .attr("href", "/drink/" + drink.id);
      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": drink.id
        })
        .append($a);
      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");
      $li.append($button);
      return $li;
    });
    $drinkList.empty();
    $drinkList.append($drinks);
  });
};
// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();
  var drink = {
    name: $drinkName.val().trim(),
    category: $drinkCategory.val().trim(),
    alcoholic: $drinkAlcoholic.val().trim(),
    instructions: $drinkInstructions.val().trim(),
    ingredients: $drinkIngredients.val().trim(),
    measurements: $drinkMeasurements.val().trim(),
    images: $drinkImages.val().trim(),
  };
  if (
    !(
      drink.name &&
      drink.category &&
      drink.instructions &&
      drink.ingredients &&
      drink.measurements
    )
  ) {
    alert("You must enter an example text and description!");
    return;
  }
  drinkAPI.saveDrink(drink).then(function() {
    refreshDrinks();
  });
  $drinkName.val("");
  $drinkCategory.val("");
  $drinkAlcoholic.val("");
  $drinkInstructions.val("");
  $drinkIngredients.val("");
  $drinkMeasurements.val("");
  $drinkImages.val("");
};
// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");
  API.deleteDrink(idToDelete).then(function() {
    refreshDrinks();
  });
};
// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
$drinkList.on("click", ".delete", handleDeleteBtnClick);

var isDrink = "drink";
var isName;
var isIngredient;
var name;
var ingredient;
// var isCategory = $("");
// var isAlcoholic = $("");
$("#search").on("click", function(event) {
event.preventDefault();
isDrink = $("#drink").val();
if(isDrink === "drink"){
isName = $("#isName").val().trim();
isIngredient = $("#isIngredient").val().trim();


// var isCategory = $("");
if(isName === "isName"){
  name = $("#search").val().trim();
  axios.get('https://www.thecocktaildb.com/api/json/v2/9973533/search.php?s=' + name)
  .then(response => {
  console.log(response);
  })
  .catch(error => {
  console.log(error);
})
}else if(isIngredient === "isIngredient"){
  ingredient = $("#search").val().trim();
  axios.get('https://www.thecocktaildb.com/api/json/v2/9973533/search.php?i=' + ingredient)
  .then(response => {
  console.log(response);
  })
  .catch(error => {
  console.log(error);
  })
    // }else if(isCategory === "isCategory"){axios.get('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?c=' + category)
    //   .then(response => {
    //   console.log(response);
    //   })
    //   .catch(error => {
    //   console.log(error);
    // })
    // }else if(isAlcoholic === "isAlcoholic"){axios.get('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?a=' + alcoholic)
    //   .then(response => {
    //   console.log(response);
    //   })
    //   .catch(error => {
    //   console.log(error);
    //   })
  }
}
});