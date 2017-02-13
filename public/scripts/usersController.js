// USERS CONTROLLER HERE!
angular.module('foodApp')
    .controller('usersController', usersController)

function usersController($http, $state) {
    console.log('HEY USER!');
    var self = this;

    function registerUser(user) {
      console.log(user);
      console.log('REGISTRATION!!');
      $http.post('/users', user)
        .then(function(response) {
          console.log(response);
        })
    }

    function login() {
        console.log('RETURNING USER');
    }

    function markOnHand() {
        // triggers a put route to the server, setting onHand to true
        console.log('MARK !!!');
    }

    function updateWeek() {
        // Edit button should reveal update week form
        // updateWeek() method should make a put request to the server

    }

    function getWeek() {
        // getWeek() should make a get request to the server for the selected week
    }

    function getOverview() {
      // TODO: Overview page needs each meal to be a link [this can be the partial that will show]
    }

    self.registerUser = registerUser;
}
