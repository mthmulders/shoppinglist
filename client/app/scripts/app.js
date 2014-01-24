'use strict';

angular.module('shoppingListApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'templates'
])
  .config(['$routeProvider', function ($routeProvider) {
    console.log('Configuring routeProvider');
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
    console.log('Configured routeProvider');
  }]);
