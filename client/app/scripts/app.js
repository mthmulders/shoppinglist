'use strict';

angular.module('shoppingListApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'views'
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
