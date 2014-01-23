'use strict';

angular.module('shoppingListApp')
  .controller('MainCtrl', function ($scope) {
    console.log('Controller started!');
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
