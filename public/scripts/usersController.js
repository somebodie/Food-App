// // USERS CONTROLLER HERE!
angular.module('foodApp')
    .controller('usersController', usersController)

<<<<<<< HEAD
function usersController($http, $state) {
=======
function usersController($http, $state, $scope) {
>>>>>>> c884702b64080fca781fa572f1aa94dd545c8fb8
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
          console.log(response);
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
