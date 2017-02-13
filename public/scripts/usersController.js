// USERS CONTROLLER HERE!
angular.module('foodApp')
    .controller('usersController', usersController)

function usersController($http, $state) {
    console.log('HEY USER!');

    function login() {
        console.log('RETURNING USER');
    }

    function registerUser() {
        console.log('NEW USER STARTING!');
    }

    function markOnHand() {
        // triggers a put route to the server, setting onHand to true
        console.log('MARK !!!');
    }

    function updateWeek() {
        // Edit button should reveal update week form
    }
    // The select week dropdown should change the visible week, probably using an angular method getWeek()

    function getWeek() {
        // getWeek() should make a get request to the server for the selected week
        // Update week form should allow meals to be dragged to different days
    }

    function getOverview() {

    }
}
