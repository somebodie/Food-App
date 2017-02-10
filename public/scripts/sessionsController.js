console.log('Sessions Controller is here!');

// SESSIONS CONTROLLER HERE!
angular.module('foodApp')
    .controller('sessionsController', sessionsController)

function sessionsController($http, $state) {
    console.log('hitting session controller');

    function login() {
      console.log('LOGIN!');
      // $http.get('/login')
    }
}
