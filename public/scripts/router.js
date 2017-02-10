// UI-Router
angular.module('foodApp', ['ui.router'])
    .config(foodAppRouter);

foodAppRouter.$inject = ['$stateProvider', '$urlRouterProvider'];

function foodAppRouter($stateProvider, $urlRouterProvider) {
    //if url not recongized will go to index
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: '/partials/home.html'
        })
        .state('users', {
            url: '/users',
            templateUrl: '/partials/users.html',
            controller: 'sessionsController as sessions'
        })
        .state('main', {
            url: '/main',
            templateUrl: '/partials/main.html',
            controller: 'usersController as users'
        })
        .state('show', {
            url: '/show',
            templateUrl: '/partials/show.html',
            controller: 'mealsController as meals'
        })
        .state('show.recommended', { //trying to consider how to put a view into a view
            url: '/show/recommended',
            templateUrl: '/partials/recommended.html',
            // controller: ''
        })
}
