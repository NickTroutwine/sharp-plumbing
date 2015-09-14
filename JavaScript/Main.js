(function() {
angular.module('main', [
  'ui.router'
])

.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'partials/home.html'
    })
    .state('services', {
      url: '/services',
      templateUrl: 'partials/services.html'
    })
    .state('application', {
      url: '/application',
      templateUrl: 'partials/application.html'
    })

    $urlRouterProvider.otherwise('/');
});
})();