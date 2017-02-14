// MEALS CONTROLLER IS HERE
angular.module('foodApp')
    .controller('mealsController', mealsController)

function mealsController($http, $state, $scope) {
    console.log('YOUR EATTING MEALS NOW!');

    var self = this;

    function getMeals(){
      $http.get(`/users/${$scope.currentUser._id}/meals`)
      .then(function(response){
        console.log(response);
        self.meals = response.data;
        console.log(self.meals);
      })
    }
      getMeals();

    function showMeal() {
      // Meals index route
      $http.get('/users/:id/meals') //FIXME: need the id to fix with get route
      .then(function (response) {
        console.log(response);
      })
    }
    //
    function addMeal() {
      // Create new meal
      $http.post('/users/:id/meals')
      .then(function (response) {
        console.log(response);
        console.log(meals);
      })
      // The addMeal() method should create an empty meal (should make a post request to server)
    }
    //
    // function updateMeal() {
    //   // Update meal route
    //   $http.put('/users/:id/meals/:mealId')
    //   .then(function (response) {
    //     console.log(response);
    //     console.log(meal);
    //   })
    //     // updateMeal() should make a put request to the server
    // }
    //
    // function deleteMeal() {
    //   $http.delete('/users/:id/meals/:mealId')
    //   .then(function (response) {
    //     console.log(response);
    //   })
    // }
    //
    // function addIngredient() {
    //   $http.post('/users/:id/:mealId/ingredients')
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //     // makes a get request to the server for the entire weeks groceries
    // }
    //
    // function updateIngredient() {
    //   $http.put('/users/:id/:mealId/ingredients/:ingredientId')
    //   .then(function (response) {
    //     console.log(response);
    //   })


    // }
    // function showNuturition() {
    //     // Recipe show page should show nutritional information
    // }

    // self.showMeal = showMeal;
    // self.addMeal = addMeal;
    // self.updateMeal = updateMeal;
    // self.deleteMeal = deleteMeal;
    // self.addIngredient = addIngredient;
    // self.updateIngredient = updateIngredient;
}
