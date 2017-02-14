// USERS CONTROLLER HERE!
angular.module('foodApp')
    .controller('usersController', usersController)

function usersController($http, $state, $scope) {
    var self = this;

    function registerUser(user) {
      console.log(user);
      $http.post('/users', user)
        .then(function(response) {
          $state.go('login');
        })
    }

    self.registerUser = registerUser;

    function login(user) {
        $http.post('/sessions/login', user)
        .then(function(response){
          $scope.currentUser = response.data.data;
          $state.go('main')
        });
    }

    self.login = login;

    function signOut(){
      $http.delete('/sessions')
      .then(function(response){
        console.log(response);
        $state.go('home');
      })
    }

    self.signOut = signOut;

}
