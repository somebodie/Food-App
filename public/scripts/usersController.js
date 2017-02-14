// USERS CONTROLLER HERE!
angular.module('foodApp')
    .controller('usersController', usersController)

function usersController($http, $state) {
    console.log('HEY USER!');
    var self = this;

    function registerUser(user) {
      // console.log(user);
      // console.log('REGISTRATION!!');
      $http.post('/users', user)
        .then(function(response) {
          console.log(response);
          // $state.go('main') TODO if we can get signin to stay
          $state.go('login') //TODO if we cannot get sign in to stay
        })
    }

    function login() {
        // console.log('RETURNING USER');
        $http.post('/sessions/login')
        .then(function (response) {
          console.log(response);
          // FIXME: make sure to define err if (!err) {
          //if login in is sucessful then will go to main
            $state.go('main');
          // }
        })
    }

    function logout() {
      // console.log('USER LEAVING!');
      $http.delete('/sessions')
      .then(function (response) {
        // console.log(response);
        $state.go('home', {reload: true}); //goes back to homepage and reloads
      })
    }

    function markOnHand() {
        // triggers a put route to the server, setting onHand to true
        console.log('MARK !!!');
        // IDEA: to use check type as input and pull information
    }

    function getWeek() {
        // getWeek() should make a get request to the server for the selected week
    }

    function updateWeek() {
        // Edit button should reveal update week form
        // updateWeek() method should make a put request to the server
    }

    function getOverview() {
      // TODO: Overview page needs each meal to be a link [this can be the partial that will show]
    }

    self.registerUser = registerUser;
    self.login = login;
    self.logout = logout;
}
