// MEALS CONTROLLER IS HERE
angular.module('foodApp')
    .controller('mealsController', mealsController)

function mealsController($http, $state) {
    console.log('YOUR EATTING MEALS NOW!');

    function showNuturition() {
        // Recipe show page should show nutritional information
    }

    function getGroceryList() {
        // makes a get request to the server for the entire weeks groceries
    }

    function addMeal() {
        // The addMeal() method should create an empty meal (should make a post request to server)
    }

    function updateMeal() {
        // updateMeal() should make a put request to the server
    }

    function showMeal() {

    }

    function getMeal() {

    }
}
