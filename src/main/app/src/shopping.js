angular.module('shopping', []);

angular.module('shopping').run(['$rootScope', function($rootScope) {
    $rootScope.appTitle = 'Electronic Shopping List';
}]);