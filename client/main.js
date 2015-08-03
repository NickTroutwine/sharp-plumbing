(function() {
angular.module('main', [
  'ui.router'
])

.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'pages/home.html'
    })
    .state('services', {
      url: '/services',
      templateUrl: 'pages/services.html'
    })
    .state('application', {
      url: '/application',
      templateUrl: 'pages/application.html'
    })

    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode({
     enabled: true
    });
  });
})();