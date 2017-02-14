// UI-Router
angular.module('foodApp', ['ui.router'])
    .config(FoodRouter);

FoodRouter.$inject = ['$stateProvider', '$urlRouterProvider'];

function FoodRouter($stateProvider, $urlRouterProvider) {
    console.log('FOOD APP ROUTER IS LOADING');
    // if url not recongized will go to index
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: '/partials/home.html',
        })
        .state('register', {
            url: '/register',
            templateUrl: '/partials/register.html',
            controller: 'usersController as users'
        })
        .state('login', { //ALT: users.sessions if I can figure out the controllers
            url: '/login',
            templateUrl: '/partials/login.html',
            controller: 'usersController as users'
        })
        .state('main', {
            url: '/main',
            templateUrl: '/partials/main.html',
            controller: 'mealsController as meals'
        })
        .state('main.grocery', { //child of main to show in there view
            url: '/list', //url is http://localhost:3000/#/main/list
            templateUrl: 'partials/list.html',
            controller: 'usersController as users'
        })
    // .state('main.meals', {
    //     url: '/users/:id/meals',
    //     templateUrl: '/partials/meals.html',
    //     controller: 'mealsController as meals'
    // })    // .state('meals.recommended', { //trying to consider how to put a view into a view ALT show.recommended
    // parent: 'show',
    // url: '/recommended',
    // templateUrl: '/partials/recommended.html',
    // controller: 'mealsController as meals'
    // })
}
