// // Get references to page elements
// var $exampleText = $("#example-text");
// var $exampleDescription = $("#example-description");
var $submitBtn = $("#submit");
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
//Drinks api vars
var $drinkName = $("#drinkName");
var $drinkIngred = $("#drinkIngred");
var $drinkPrep = $("#drinkPrep");
var $drinkList = $("#dink-list");

var drinksAPI = {
  saveNewDrink: function(drinks) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/drinks",
      data: JSON.stringify(drinks)
    });
  },
  getDrinks: function() {
    return $.ajax({
      url: "api/drinks",
      type: "GET"
    });
  }
};

// refreshExamples gets new examples from the db and repopulates the list
var refreshDrinks = function() {
  drinksAPI.getDrinks().then(function(data) {
    var $drinks = data.map(function(drinks) {
      var $a = $("<a>")
        .text(drinks.text)
        .attr("href", "/drinks/" + drinks.Name);
      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": drinks.id
        })
        .append($a);
      var $button = $("<button>")
        .addClass("btn btn-danger float-right edit")
        .text("Edit");
      $li.append($button);
      return $li;
    });
    $drinkList.empty();
    $drinkList.append($drinks);
  });
};

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleDrinkFormSubmit = function(event) {
  event.preventDefault();
  var drink = {
    drinkName: $drinkName.val().trim(),
    drinkIngred: $drinkIngred.val().trim(),
    drinkPrep: $drinkPrep.val().trim()
  };
  if (!(drinkName && drinkIngred && drinkPrep)) {
    alert(
      "You must enter a drink name, it's ingredients with their quantity and how to prepare it!"
    );
    return;
  }
  drinksAPI.saveNewDrink(drink).then(function() {
    refreshDrinks();
  });
  $drinkName.val("");
  $drinkIngred.val("");
  $drinkPrep.val("");
};

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleDrinkFormSubmit);
