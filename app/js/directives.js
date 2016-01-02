
mergeApp.directive('watchVideo', function(){
  return function(scope, element, attrs) {

    scope.$watch(
      function (scope) {
        return scope.video_status;
      },
      function (newValue, oldValue) {
        console.log( newValue );
      }

    );

  }
});

//http://tutorials.jenkov.com/angularjs/watch-digest-apply.html#watch