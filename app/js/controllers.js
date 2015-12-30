var controllersModule = angular.module("mergeApp.Controllers", [])

controllersModule.controller("testController", function ($scope) {
  $scope.node = model;
});

/* Node controller */
controllersModule.controller('nodeController', function($scope, $routeParams) {
  $scope.id = $routeParams.id;
  console.log($scope.id);
});

controllersModule.controller('frontController', function($scope, $routeParams) {
  console.log('front!');
});

controllersModule.controller('404Controller', function($scope, $routeParams) {
  console.log('404!');
});