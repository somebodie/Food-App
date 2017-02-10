console.log("Users Controller Works!")

// USERS CONTROLLER HERE!
angular.module('foodApp')
    .controller('usersController', usersController)

function usersController($http, $state) {
    console.log('hitting user controller');
}
