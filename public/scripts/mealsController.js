console.log('Meals Controller is Here!');

// MEALS CONTROLLER HERE!
angular.module('foodApp')
    .controller('mealsController', mealsController)

function mealsController($http, $state) {
    console.log('hitting meal controller');

}
