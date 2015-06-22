var myAppModule = angular.module('myApp', []);
myAppModule.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
		templateUrl: './html/chat.html',
		controller:'ChatController'
      }).
      otherwise({
		templateUrl: './html/search.html',
		controller:'SearchController'
      });
}]);