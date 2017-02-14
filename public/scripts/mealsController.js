// MEALS CONTROLLER IS HERE
angular.module('foodApp')
    .controller('mealsController', mealsController)

function mealsController($http, $state, $scope) {
    var self = this;
    function getMeals(){
      console.log($scope.currentUser);
    };

    getMeals();
}
