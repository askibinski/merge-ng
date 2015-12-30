
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

// @TODO this probably also belongs in services
var model = {
  nid: 123, // init values
  body: 'Lorem Ipsum',
  image_url: '/app/images/default_image.jpg'
};

// @TODO move to service
mergeApp.run(function ($http) {
  $http.get("http://merge.localhost/node/1?_format=json").success(function (data) {
    //console.log(data);
    model.nid = data.nid[0].value;
    model.body = data.body[0].value;
    model.image_url = data.field_image[0].url;
  });
});


