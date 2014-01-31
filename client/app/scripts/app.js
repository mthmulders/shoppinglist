'use strict';

angular.module('shoppingListApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'templates'
])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
