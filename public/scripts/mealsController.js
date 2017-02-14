// MEALS CONTROLLER IS HERE
angular.module('foodApp')
    .controller('mealsController', mealsController)

function mealsController($http, $state, $scope) {

    var self = this;
    self.showEdit = false;

    function getMeals(){
      $http.get(`/users/${$scope.currentUser._id}/meals`)
      .then(function(response){
        console.log(response);
        self.mealsIndex = response.data;
        console.log(self.mealsIndex);
      })
    }
      getMeals();

    function showMeal(meal) {
      $http.get(`/users/${$scope.currentUser._id}/meals/${meal._id}`)
      .then(function (response) {
        self.currentMeal = response.data;
        console.log(self.currentMeal);
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
    function updateMeal(meal) {
      // Update meal route
      console.log(meal);
      $http.put(`/users/${$scope.currentUser._id}/meals/${meal._id}`, meal)
      .then(function (response) {
        console.log(response);
      })
        // updateMeal() should make a put request to the server
    }
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

    self.showMeal = showMeal;
    // self.addMeal = addMeal;
    self.updateMeal = updateMeal;
    // self.deleteMeal = deleteMeal;
    // self.addIngredient = addIngredient;
    // self.updateIngredient = updateIngredient;
}
