
var mergeApp = angular.module("mergeApp",
  [
    'ngRoute',
    'ngSanitize',
    'mergeApp.Controllers'
  ]
).
config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

  // @TODO dynamically populate this with Drupal node paths
  $routeProvider.
    when("/", {templateUrl: "app/partials/front.html", controller: "frontController"}).
    when("/node/:id", {templateUrl: "app/partials/node.html", controller: "nodeController"}).
    when("/404", {templateUrl: "app/partials/404.html", controller: "404Controller"}).
    otherwise({redirectTo: '/404'});

    $locationProvider.html5Mode(true);
}]);


