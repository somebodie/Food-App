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
<<<<<<< HEAD
          console.log(response);
<<<<<<< HEAD
=======
=======
>>>>>>> 4616cbe4e70dc87c8f369d82dd8debb5fe70f638
          $scope.currentUser = response.data.data;
>>>>>>> c884702b64080fca781fa572f1aa94dd545c8fb8
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
