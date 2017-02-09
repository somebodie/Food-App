// UI-Router

angular.module('foodApp', ['ui.router'])

foodAppRouter.$inject = ['$stateProvider', '$urlRouteProvider']

function foodApp($stateProvider, $urlRouteProvider) {
  $urlRouteProvider.otherwise('/'); //if url not recongized will go to index

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/partials/home.html',
      // controller: // if there is functions on home to be placed her ex user
    })
    .state('users', {
      url: '/users',
      templateUrl: '/partials/user.html',
      // controller:
    })
    .state('main', {
      url: '/main',
      templateUrl: '/partials/main.html',
      // controller
    })
    .state('show', {
      url: '/show',
      templateUrl: '/partials/show.html',
      // controller
    })
    .state('recommended', {
      url: '/recommended',
      templateUrl: '/partials/recommended.html'
      // controller
    })
}
