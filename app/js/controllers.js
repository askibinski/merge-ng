var controllersModule = angular.module("mergeApp.Controllers", []);

controllersModule.controller("testController", function ($scope) {
  $scope.node = testmodel;
});

controllersModule.controller('nodeController', function($scope, $routeParams) {
  $scope.id = $routeParams.id;
  console.log($scope.id);
});

controllersModule.controller('frontController', function($scope, $routeParams) {
  console.log('front!');

  // we laten de video alleen zien op tablet of desktop omdat we er dan vanuit gaan dat er wifi is.
  if ((WURFL.form_factor == 'Desktop' || WURFL.form_factor == 'Tablet') && WURFL.complete_device_name != 'Google Nexus 7') {
    console.log('Desktop!');
  }
  // ipad
  if (WURFL.form_factor == 'Tablet' && WURFL.complete_device_name == 'Apple iPad') {

  } else {

  }

});

controllersModule.controller('videoController', function($scope) {

  $scope.video_status = (document.querySelectorAll('#front-video')[0].readyState);

  $scope.myButton = function () {
    console.log('test');
  }

  $scope.spinnershow = false;
});

controllersModule.controller('404Controller', function($scope, $routeParams) {
  console.log('404!');
});